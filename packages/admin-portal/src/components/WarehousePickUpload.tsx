import { useState, useEffect } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import axios from "axios";
import { S3 } from "aws-sdk";
import { useDispatch } from "react-redux";

interface FileUploadProps {
  label: string;
}

const UploadWarehousePic = ({ label }: FileUploadProps) => {
  const [file, setFile] = useState<File>();
  const [s3GetPromiseUrl, setS3GetPromiseUrl] = useState<string>("");
  const [acceptedFile, setAccetedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [s3FileKey, setS3FileKey] = useState<string>("");
  const dispatch = useDispatch();
  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setAccetedFiles([acceptedFiles[0]]);
    console.log("accepted files :  ", acceptedFiles);

    try {
      handleUploadFile(acceptedFiles[0]);
    } catch (error) {
      console.log("image upload error >>> ", error);
    }
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
      "application/pdf": [".pdf"],
    },
    multiple: true,
    maxSize: 4 * 1024 * 1024, // Specify max file size (4 MB)
    maxFiles: 1,
  });

  useEffect(() => {
    // var s3FileKey = localStorage.getItem("s3FileKey");
    // var s3FileFormat = localStorage.getItem("s3FileFormat");
    if (s3FileKey && s3FileKey?.length > 0) {
      setS3GetPromiseUrl(
        `https://globextrade.s3.ap-south-1.amazonaws.com/${s3FileKey}`
      );
    } else {
      setS3GetPromiseUrl(``);
    }
    // if (s3FileKey !== "" && s3FileKey && s3FileFormat !== "" && s3FileFormat) {
    //   setS3GetPromiseUrl(`https://globextrade.s3.ap-south-1.amazonaws.com/${s3FileKey}`);
    // } else {
    //   setS3GetPromiseUrl("");
    // }
    localStorage.clear();
  }, [acceptedFiles]);

  async function handleUploadFile(acceptedFile: File) {
    var date = new Date();
    var formattedDate = format(date, "yyyy-M-dd HH:mm:ss");

    if (acceptedFiles) {
      var fileKey = `warehouse/pics/date=${formattedDate}${acceptedFile.name.toLowerCase()}`;
      var fileType = acceptedFile.type;
      console.log(" file >> ", fileKey);
      console.log("mode : ", process.env.NEXT_PUBLIC_BUCKET_NAME);
      //add key here
      const client_s3 = new S3({
        region: process.env.NEXT_PUBLIC_REGION,
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
        signatureVersion: "v4",
      });
      try {
        const fileParams = {
          Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
          Key: fileKey,
          Expires: 600,
          ContentType: fileType,
        };

        const url = await client_s3.getSignedUrlPromise(
          "putObject",
          fileParams
        );
        const uploadUrl = url;

        const fromAxios = await axios.put(uploadUrl, acceptedFile, {
          headers: {
            "Content-type": fileType,
            "Access-Control-Allow-Origin": "*",
          },
          onUploadProgress: (progressEvent: any) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        });
        setS3FileKey(fileKey);
        localStorage.setItem("s3FileKey", fileKey);
        localStorage.setItem("s3FileFormat", fileType);
      } catch (error) {
        console.log("AWS S3 API - upload_file.tsx - POST Error:", error);
      }

      setFile(undefined);
    }
  }

  const getFileIcon = (fileType: string): string => {
    if (fileType.includes("image")) {
      return "🖼️"; // Unicode for image icon
    } else if (fileType.includes("pdf")) {
      return "📄"; // Unicode for PDF icon
    } else if (fileType.includes("word")) {
      return "📃"; // Unicode for Word document icon
    } else {
      return "📂"; // Unicode for generic file icon
    }
  };

  return (
    <div {...getRootProps()} className="space-y-4">
      <label className="block text-sm font-medium leading-6 text-gray-600">
        {label}
      </label>
      <div
        className={`border border-dashed rounded-lg p-4 cursor-pointer border-primary-500 max-w-xs`}
      >
        <input id={label} {...getInputProps()} />
        <p className={`text-primary-500 text-xs font-medium`}>
          Drop or click to upload {label}
        </p>
        {acceptedFile.length > 0 && (
          <div className="mt-4 flex items-center  w-8">
            <span className="text-lg">{getFileIcon(acceptedFile[0].type)}</span>{" "}
            {/* Unicode character for file icon */}
            <p className="text-xs font-normal ml-2 w-12">
              {acceptedFile[0].name}
            </p>
          </div>
        )}
      </div>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-4">
          <p className="text-sm font-medium">Uploading: {uploadProgress}%</p>
          <progress
            className="bg-primary-500"
            value={uploadProgress}
            max="100"
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default UploadWarehousePic;
