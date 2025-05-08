'use client';

import { Card, Text, Group, Badge, Avatar, Stack } from '@mantine/core';
import { IconMapPin, IconBriefcase, IconCurrencyRupee, IconClock } from '@tabler/icons-react';
import { Job } from '../types/Job';

export const JobCard = ({ job }: { job: Job }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-lg transition duration-200">
    <Group justify="space-between" mb="sm">
      <Avatar size="lg" radius="xl" src="/company-logo.png" alt={job.company[0]} />
      <Badge color="blue" variant="light">24h Ago</Badge>
    </Group>

    <Stack gap={2}>
      <Text fw={700} size="lg">{job.title}</Text>
      <Text size="sm" c="dimmed">{job.company}</Text>
    </Stack>

    <Group mt="xs" gap="xs" wrap="wrap">
      <Group gap={4}><IconMapPin size={16} /><Text size="xs">{job.location}</Text></Group>
      <Group gap={4}><IconBriefcase size={16} /><Text size="xs">{job.type}</Text></Group>
      <Group gap={4}><IconCurrencyRupee size={16} /><Text size="xs">{job.salary}</Text></Group>
    </Group>

    <Text size="xs" mt="xs" lineClamp={2} c="dimmed">
      {job.description}
    </Text>

    <Group justify="center" mt="md">
      <Badge variant="filled" color="teal">{job.deadline ? `Deadline: ${new Date(job.deadline).toLocaleDateString()}` : ''}</Badge>
    </Group>

    <Group justify="center" mt="lg">
      <button className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded hover:bg-blue-600 transition">
        Apply Now
      </button>
    </Group>
  </Card>
);
