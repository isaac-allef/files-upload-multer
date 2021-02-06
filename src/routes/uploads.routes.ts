import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import SaveFileMetadataToDatabaseService from '../services/SaveFileMetadataToDatabaseService';

const uploadsRouter = Router();
const upload = multer(uploadConfig);

uploadsRouter.post('/', upload.single('oneFile'), async (request, response) => {
    try {
        const { filename, mimetype, size } = request.file;

        const saveFileMetadataToDatabase = new SaveFileMetadataToDatabaseService();

        const file = await saveFileMetadataToDatabase.execute({ 
            filename,
            mimetype,
            size,
        });

        return response.json(file);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default uploadsRouter;