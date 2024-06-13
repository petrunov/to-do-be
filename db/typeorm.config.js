"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var config_1 = require("@nestjs/config");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '../.env' });
var configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: configService.get('MYSQL_HOST'),
    port: configService.get('MYSQL_PORT'),
    username: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DB'),
    entities: ["".concat(__dirname, "/../src/**/*.entity{.ts,.js}")],
    synchronize: configService.get('nodenv') === 'development',
    logging: configService.get('nodenv') === 'development',
    migrations: ["".concat(__dirname, "/migrations/*{.ts,.js}")],
    migrationsTableName: 'migrations',
});
