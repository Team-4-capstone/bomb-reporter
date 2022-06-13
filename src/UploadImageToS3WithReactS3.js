import React, {useState} from 'react';
import {uploadFile} from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = 'oceans2';
const REGION = 'us-east-2';
const ACCESS_KEY = 'AKIA5BUWQB4PNAY55UXG';
const SECRET_ACCESS_KEY = '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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput} crossOrigin="anonymous"/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithReactS3;