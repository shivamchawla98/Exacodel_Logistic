import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from "date-fns";
import axios from 'axios';
import { S3 } from 'aws-sdk';
import { useDispatch } from 'react-redux';
import { update_AEO_cert, update_DUNS_cert, update_IATA_cert, update_aadhaar_card, update_cert_of_registration, update_isoCertificate, update_manufacturing_license, update_other_license, update_pancard_auth, update_pancard_company } from '@/features/uploads/upload-slice';

interface FileUploadProps {
  label: string;
  doc: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, doc }) => {
  const [file, setFile] = useState<File>();
  const [s3GetPromiseUrl, setS3GetPromiseUrl] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    try {
      handleUploadFile();
    } catch (error) {
      console.log("image upload error >>> ", error);
    }
  }

  useEffect(() => {
    var s3FileKey = localStorage.getItem("s3FileKey");
    var s3FileFormat = localStorage.getItem("s3FileFormat");

    if (s3FileKey !== "" && s3FileKey && s3FileFormat !== "" && s3FileFormat) {
      setS3GetPromiseUrl(`https://globextrade.s3.ap-south-1.amazonaws.com/${s3FileKey}`);
    } else {
      setS3GetPromiseUrl("");
    }
    localStorage.clear();
  }, [file]);

  async function handleUploadFile() {
    var date = new Date();
    var formattedDate = format(date, "yyyy-M-dd");

    if (file) {
      var fileKey = `user/${doc}/date=${formattedDate}${(file.name).toLowerCase()}`;
      var fileType = file.type;
      switch (doc) {
        case 'cert_of_registration':
          dispatch(update_cert_of_registration(fileKey))
          break;
        case 'pancard_company':
          dispatch(update_pancard_company(fileKey))
          break;
        case 'aadhaar_card':
          dispatch(update_aadhaar_card(fileKey))
          break;
        case 'isoCertificate':
          dispatch(update_isoCertificate(fileKey))
          break;
        case 'pancard_auth':
          dispatch(update_pancard_auth(fileKey))
          break;
        case 'AEO_cert':
          dispatch(update_AEO_cert(fileKey))
          break;
        case 'IATA_cert':
          dispatch(update_IATA_cert(fileKey))
          break;
        case 'DUNS_cert':
          dispatch(update_DUNS_cert(fileKey))
          break;
        case 'manufacturing_license':
          dispatch(update_manufacturing_license(fileKey))
          break;
        case 'other_license':
          dispatch(update_other_license(fileKey))
          break;

        default:
          break;
      }
      const client_s3 = new S3({
        region: "ap-south-1",
        accessKeyId: "AKIA5FWQZ5L4KOCCTT73",
        secretAccessKey: "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",
        signatureVersion: "v4",
      });

      try {
        const fileParams = {
          Bucket: "globextrade",
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
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progress);
          },
        });

        localStorage.setItem("s3FileKey", fileKey);
        localStorage.setItem("s3FileFormat", fileType);
      } catch (error) {
        console.log("AWS S3 API - upload_file.tsx - POST Error:", error);
      }

      setFile(undefined);
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="space-y-4">
      <label className='text-xs font-medium'>{label}</label>
      <div className={`border border-dashed rounded-lg p-4 cursor-pointer border-sky-500`}>
        <input id={label} {...getInputProps()} />
        <p className={`text-sky-500 text-xs font-medium`}>Drop or click to upload {label}</p>
        {s3GetPromiseUrl && (
          <div className="mt-4">
            <p className="text-sm font-medium">{label} Uploaded: {file?.name || ''}</p>
            <img src={s3GetPromiseUrl} alt="Preview" />
          </div>
        )}
      </div>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-4">
          <p className="text-sm font-medium">Uploading: {uploadProgress}%</p>
          <progress className='bg-sky-500' value={uploadProgress} max="100" />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
