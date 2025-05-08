'use client';

import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/jobService';
import { JobCard } from '../components/JobCard';
import { Job } from '../types/Job';
import { TextInput, Select, RangeSlider, Group } from '@mantine/core';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<{
    title: string;
    location: string;
    type: string;
    salaryRange: [number, number];
  }>({

    title: '',
    location: '',
    type: '',
    salaryRange: [0, 100000],
  });

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
    (!filters.type || job.type === filters.type) &&
    parseInt(job.salary) >= filters.salaryRange[0] &&
    parseInt(job.salary) <= filters.salaryRange[1]
  );

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Job Listings</h1>

      <Group grow mb="md">
        <TextInput
          placeholder="Filter by Title"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
        />
        <TextInput
          placeholder="Filter by Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <Select
          placeholder="Filter by Type"
          data={['Full-time', 'Part-time', 'Contract', 'Internship']}
          value={filters.type}
          onChange={(value) => setFilters({ ...filters, type: value || '' })}
        />
      </Group>

      <RangeSlider
        label={(val) => `$${val}`}
        value={filters.salaryRange}
        onChange={(value) => setFilters({ ...filters, salaryRange: value })}
        min={0}
        max={200000}
        step={1000}
        mb="md"
      />

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </main>
  );
}
