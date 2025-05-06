'use client';

import { Card, Text } from '@mantine/core';
import { Job } from '../types/Job';

export const JobCard = ({ job }: { job: Job }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Text fw={700}>{job.title}</Text>
    <Text>{job.company} — {job.location}</Text>
    <Text>Type: {job.type}</Text>
    <Text>Salary: {job.salary}</Text>
    <Text size="sm" mt="sm">Deadline: {job.deadline}</Text>
  </Card>
);
