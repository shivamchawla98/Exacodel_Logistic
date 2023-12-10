import { useState, useEffect } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import axios from "axios";
import { S3 } from "aws-sdk";
import { useDispatch } from "react-redux";
import {
  update_AEO_cert,
  update_DUNS_cert,
  update_IATA_cert,
  update_aadhaar_card,
  update_cert_of_registration,
  update_isoCertificate,
  update_manufacturing_license,
  update_other_license,
  update_pancard_auth,
  update_pancard_company,
} from "@/features/uploads/upload-slice";

interface FileUploadProps {
  label: string;
  doc: string;
}

const FileUpload = ({ label, doc }: FileUploadProps) => {
  const [file, setFile] = useState<File>();
  const [s3GetPromiseUrl, setS3GetPromiseUrl] = useState<string>("");
  const [acceptedFile, setAccetedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [s3FileKey, setS3FileKey] = useState<string>("");
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setAccetedFiles([acceptedFiles[0]]);
    try {
      handleUploadFile();
    } catch (error) {
      console.log("image upload error >>> ", error);
    }
  };

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
  }, [file]);

  console.log("mode : ", process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID);
  async function handleUploadFile() {
    var date = new Date();
    var formattedDate = format(date, "yyyy-M-dd");

    if (file) {
      var fileKey = `user/${doc}/date=${formattedDate}${acceptedFile[0].name.toLowerCase()}`;
      var fileType = acceptedFile[0].type;
      console.log("Doc: ", doc, " file >> ", fileKey);

      switch (doc) {
        case "cert_of_registration":
          dispatch(update_cert_of_registration(fileKey));
          break;
        case "pancard_company":
          dispatch(update_pancard_company(fileKey));
          console.log("in pan card");

          break;
        case "aadhaar_card":
          dispatch(update_aadhaar_card(fileKey));
          break;
        case "isoCertificate":
          dispatch(update_isoCertificate(fileKey));
          break;
        case "pancard_auth":
          dispatch(update_pancard_auth(fileKey));
          break;
        case "AEO_cert":
          dispatch(update_AEO_cert(fileKey));
          break;
        case "IATA_cert":
          dispatch(update_IATA_cert(fileKey));
          break;
        case "DUNS_cert":
          dispatch(update_DUNS_cert(fileKey));
          break;
        case "manufacturing_license":
          dispatch(update_manufacturing_license(fileKey));
          break;
        case "other_license":
          dispatch(update_other_license(fileKey));
          break;

        default:
          console.log("default me hu");

          break;
      }
      console.log("mode : ", process.env.NEXT_PUBLIC_BUCKET_NAME);
      //add key here
      const client_s3 = new S3({
        region: "",
        accessKeyId: "",
        secretAccessKey: "",
        signatureVersion: "",
      });

      // const client_s3 = new S3({
      //   region: process.env.NEXT_PUBLIC_REGION,
      //   accessKeyId: process.env. NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      //   secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
      //   signatureVersion: "v4",
      // });

      try {
        const fileParams = {
          Bucket: "globextrade",
          // Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
          Key: fileKey,
          Expires: 600,
          ContentType: fileType,
        };

        const url = await client_s3.getSignedUrlPromise(
          "putObject",
          fileParams
        );
        const uploadUrl = url;

        const fromAxios = await axios.put(uploadUrl, file, {
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "application/pdf": [".pdf"],
    },
    multiple: false,
    maxSize: 4 * 1024 * 1024, // Specify max file size (4 MB)
  });

  return (
    <div {...getRootProps()} className="space-y-4">
      <label className="text-xs font-medium">{label}</label>
      <div
        className={`border border-dashed rounded-lg p-4 cursor-pointer border-sky-500 max-w-xs`}
      >
        <input id={label} {...getInputProps()} />
        <p className={`text-sky-500 text-xs font-medium`}>
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
          <progress className="bg-sky-500" value={uploadProgress} max="100" />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
