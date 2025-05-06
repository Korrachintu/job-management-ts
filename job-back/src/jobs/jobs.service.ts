import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobsRepo: Repository<Job>) {}

  create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobsRepo.create(createJobDto);
    return this.jobsRepo.save(job);
  }

  findAll(): Promise<Job[]> {
    return this.jobsRepo.find();
  }
}
