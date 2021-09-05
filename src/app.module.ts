import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from 'ormconfig';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(ormconfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
