import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarTipoDaSenhaDoUser1669765347794 implements MigrationInterface {
    name = 'AlterarTipoDaSenhaDoUser1669765347794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas"."user" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "vagas"."user" ADD "senha" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas"."user" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "vagas"."user" ADD "senha" integer NOT NULL`);
    }

}
