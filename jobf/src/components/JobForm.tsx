'use client';

import {
  Button,
  Group,
  Select,
  TextInput,
  Textarea,
  Stack,
  Card,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from 'react-hook-form';
import { Job } from '../types/Job';

interface JobFormProps {
  onSubmit: (data: Job) => void;
  defaultValues?: Partial<Job>;
}

export const JobForm = ({ onSubmit, defaultValues }: JobFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Job>({
    defaultValues: {
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      requirements: '',
      responsibilities: '',
      deadline: '',
      ...defaultValues,
    },
  });

  return (
    <Card shadow="lg" padding="xl" radius="md" className="w-full max-w-2xl mx-auto">
      <Title order={3} mb="md" ta="center">Create Job Opening</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Job Title"
            placeholder="e.g. Full Stack Developer"
            {...register('title', { required: 'Required' })}
            error={errors.title?.message}
          />

          <TextInput
            label="Company Name"
            placeholder="e.g. Amazon, Microsoft"
            {...register('company', { required: 'Required' })}
            error={errors.company?.message}
          />

          <TextInput
            label="Location"
            placeholder="e.g. Bengaluru, Remote"
            {...register('location', { required: 'Required' })}
            error={errors.location?.message}
          />

          <Select
            label="Job Type"
            placeholder="Select type"
            data={['Full-time', 'Part-time', 'Contract', 'Internship']}
            value={watch('type')}
            onChange={(value) => setValue('type', value as Job['type'])}
            withAsterisk
          />

          <TextInput
            label="Salary Range"
            placeholder="e.g. ₹10L - ₹20L"
            {...register('salary', { required: 'Required' })}
            error={errors.salary?.message}
          />

          <DateInput
            label="Application Deadline"
            placeholder="Pick date"
            value={watch('deadline') ? new Date(watch('deadline')) : null}
            // onChange={(date) => setValue('deadline', date instanceof Date ? date.toISOString() : '')}
            onChange={(date) => setValue('deadline', date ? new Date(date).toISOString() : '')}

          />

          <Textarea
            label="Job Description"
            placeholder="Tell the candidate more about the role"
            {...register('description')}
            minRows={3}
          />

          <Textarea
            label="Requirements"
            placeholder="List out key requirements"
            {...register('requirements')}
            minRows={3}
          />

          <Textarea
            label="Responsibilities"
            placeholder="What will the candidate do?"
            {...register('responsibilities')}
            minRows={3}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="default">Save Draft</Button>
            <Button type="submit" color="blue">Publish</Button>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};
