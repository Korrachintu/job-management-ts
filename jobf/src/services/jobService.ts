import axios from 'axios';
import { Job } from '../types/Job';

const API_URL = 'http://localhost:3001/jobs';

export const fetchJobs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createJob = async (job: Job) => {
  const res = await axios.post(API_URL, job);
  return res.data;
};
