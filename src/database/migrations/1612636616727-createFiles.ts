import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createFiles1612636127121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable( new Table({
            name: 'files',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'filename',
                    type: 'varchar',
                },
                {
                    name: 'mimetype',
                    type: 'varchar',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('files');
    }

}
