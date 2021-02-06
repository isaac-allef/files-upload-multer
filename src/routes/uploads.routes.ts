import { Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import SaveFileMetadataToDatabaseService from '../services/SaveFileMetadataToDatabaseService';
import File from '../models/File';

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

uploadsRouter.get('/', async (request, response) => {
    try {
        const filesRepository = getRepository(File);

        const files = await filesRepository.find();

        return response.json({ files });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

uploadsRouter.get('/:filename', async (request, response) => {
    try {
        const { filename } = request.params;

        const filesRepository = getRepository(File);

        const file = await filesRepository.findOne({ filename });

        return response.json({ file });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default uploadsRouter;