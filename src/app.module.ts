import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig, DbConfig } from '../config';
import { TodosModule } from './todos/todos.module';
import { parse } from 'pg-connection-string'; // Adjust based on your parsing library

// Retrieve database URL from environment variable
const dbUrl = process.env.CLEARDB_DATABASE_URL;

// Parse the database URL to extract connection parameters
const parsedUrl = parse(dbUrl);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: parsedUrl.host,
        port: parseInt(parsedUrl.port, 10),
        username: parsedUrl.user,
        password: parsedUrl.password,
        database: parsedUrl.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV === 'development',
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
