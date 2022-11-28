import 'reflect-metadata';
import { DataSource } from "typeorm";
import { appEnv } from "../../app/envs/app.env";

export default new DataSource({

  type: 'postgres',
  url: appEnv.databaseUrl,
  synchronize: false,
  ssl: {
    rejectUnauthorized: false
  },
  schema: 'escolha_o_seu',
  entities: ["src/app/shared/entities/**/*.ts"],
  migrations: ["src/app/shared/migrations/**/*.ts"]

})