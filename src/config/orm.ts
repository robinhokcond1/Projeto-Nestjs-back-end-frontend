import * as path from 'path';
import { Options } from '@nestjs/common';
import {TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
    type: 'sqlite', 
    database: 'data/rocketseat.db', 
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

module.exports = options;
