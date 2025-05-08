'use client';

import { useRouter } from 'next/navigation';
import { JobForm } from '../../components/JobForm';
import { createJob } from '../../services/jobService';
import { Job } from '../../types/Job';

export default function CreateJobPage() {
  const router = useRouter();

  const handleCreate = async (job: Job) => {
    await createJob(job);
    router.push('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create New Job</h2>
      <JobForm onSubmit={handleCreate} />
    </div>
  );
}
