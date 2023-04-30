import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import fs from "node:fs";
import { resolve } from "node:path";
import crypto from "node:crypto";
import "dotenv/config";

const tmpfolder = resolve(__dirname, "..", "..", "tmp", "uploads");

if (!fs.existsSync(tmpfolder)) {
  fs.mkdirSync(tmpfolder, { recursive: true });
}

const fileSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpfolder);
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err, err.message);

      const filename = `${hash.toString("hex")}-${file.originalname}`;

      cb(null, filename);
    });
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png", "image/gif"];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new Error("Invalid file type"));
  }
};

export const upload = multer({
  dest: tmpfolder,
  storage,
  limits: { fileSize },
  fileFilter,
});
