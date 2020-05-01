import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpDir = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpDir,
  storage: multer.diskStorage({
    destination: tmpDir,

    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
