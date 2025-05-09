import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes config available app-wide
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: parseInt(configService.get<string>('DB_PORT', '5432')),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'mysecretpassword'),
        database: configService.get<string>('DB_NAME', 'jobdb'),
        entities: [Job],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },

      }),
      
    }),
    JobsModule,
  ],
})
export class AppModule {}
