import { getRepository } from "typeorm";
import File from '../models/File';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

interface Request {
    filename: string;
    mimetype: string;
    size: number;
}

class SaveFileMetadataToDatabaseService {
    public async execute({ filename, mimetype, size }: Request): Promise<File> {
        const filesRepository = getRepository(File);

        const filePath = path.join( uploadConfig.directory, filename );
        const fileExists = fs.existsSync(filePath);

        if (!fileExists) {
            throw Error('Nonexistent file');
        }

        const file = filesRepository.create({
            filename,
            mimetype,
            size,
        });

        await filesRepository.save(file);

        return file;
    }
}

export default SaveFileMetadataToDatabaseService;