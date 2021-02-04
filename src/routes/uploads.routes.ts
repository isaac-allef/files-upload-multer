import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

const uploadsRouter = Router();
const upload = multer(uploadConfig);

uploadsRouter.post('/', upload.single('oneFile'), (request, response) => {

    const { fieldname, originalname, mimetype, filename } = request.file;

    return response.json({
        fieldname,
        originalname,
        mimetype,
        filename,
    });
});

export default uploadsRouter;