const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
require("dotenv").config();

// AWS S3 클라이언트 설정 (SDK v3)
const s3 = new S3Client({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Multer 설정 (파일을 메모리에 저장)
const upload = multer({
  storage: multer.memoryStorage(), // multer-s3 대신 memoryStorage 사용
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB 제한
});

// S3 업로드 함수
const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ACL: "public-read",
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
};

module.exports = { upload, uploadToS3 };
