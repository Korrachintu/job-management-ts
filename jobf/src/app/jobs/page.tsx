'use client';

import { useEffect, useState } from 'react';
import { fetchJobs } from '../../services/jobService';
import { JobCard } from '../../components/JobCard';
import { Job } from '../../types/Job';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
