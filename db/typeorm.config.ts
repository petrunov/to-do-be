import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { resolve } from 'path';
import { parse } from 'pg-connection-string';

const url =
  process.env.CLEARDB_DATABASE_URL ||
  'mysql://bfdcc24e94f9a2:c4d6c4a0@us-cluster-east-01.k8s.cleardb.net/heroku_902fb620fe4592d?reconnect=true';

const parsedUrl = parse(url);

const envPath = resolve(__dirname, '../.env');
config({ path: envPath });

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: parsedUrl.host,
  port: parseInt(parsedUrl.port, 10),
  username: parsedUrl.user,
  password: parsedUrl.password,
  database: parsedUrl.database,
  entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
  synchronize: configService.get('nodenv') === 'development',
  logging: configService.get('nodenv') === 'development',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
});
