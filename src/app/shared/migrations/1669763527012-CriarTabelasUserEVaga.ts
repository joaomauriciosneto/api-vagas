import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelasUserEVaga1669763527012 implements MigrationInterface {
    name = 'CriarTabelasUserEVaga1669763527012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vagas"."user" ("id" character varying NOT NULL, "nome" character varying(60) NOT NULL, "username" character varying(60) NOT NULL, "senha" integer NOT NULL, "tipo" character varying NOT NULL, "empresa" character varying(60), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vagas"."vaga" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, "dtLimite" TIMESTAMP NOT NULL, "indAtivo" boolean NOT NULL, "maxCandidatos" integer NOT NULL, "id_recrutador" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8fc4878a1eec234441d6696c3cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" ADD CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b" FOREIGN KEY ("id_recrutador") REFERENCES "vagas"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" DROP CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b"`);
        await queryRunner.query(`DROP TABLE "vagas"."vaga"`);
        await queryRunner.query(`DROP TABLE "vagas"."user"`);
    }

}
