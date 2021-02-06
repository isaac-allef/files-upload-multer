import { getRepository } from "typeorm";
import File from '../models/File';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

interface Request {
    filename: string;
}

class DeleteFileAndMetadataService {
    public async execute({ filename }: Request): Promise<File> {
        const filesRepository = getRepository(File);

        const file = await filesRepository.findOne({ where: { filename } });

        if (!file) {
            throw Error('File not found');
        }
        
        await filesRepository.remove(file);

        const filePath = path.join( uploadConfig.directory, filename );
        const fileExists = fs.existsSync(filePath);

        if (!fileExists) {
            throw Error('Nonexistent file');
        }

        await fs.promises.unlink(filePath);

        return file;
    }
}

export default DeleteFileAndMetadataService;