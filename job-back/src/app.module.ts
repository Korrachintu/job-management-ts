import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'localhost',
      host: process.env.DB_HOST || 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'mysecretpassword',
      database: process.env.POSTGRES_DB || 'jobdb',
      entities: [Job],
      synchronize: true,
    }),
    JobsModule,
  ],
})
export class AppModule {}