import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createFiles1612636127121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'files',
            columns: [
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
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('files');
    }

}
