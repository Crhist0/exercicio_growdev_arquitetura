import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProject1641934337054 implements MigrationInterface {
    name = 'CreateProject1641934337054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "description" character varying(300), "startDate" TIMESTAMP, "endDate" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userUsername" character varying(20), CONSTRAINT "PK_8505f3977d7839dd709ff79f9d7" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_d1aa7d9cba50c1a73a0089f53c3" FOREIGN KEY ("userUsername") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_d1aa7d9cba50c1a73a0089f53c3"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
