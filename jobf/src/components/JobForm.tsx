'use client';

import { Button, Group, Select, TextInput, Textarea, Stack } from '@mantine/core';
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="Job Title"
          {...register('title', { required: 'Required' })}
          error={errors.title?.message}
        />
        <TextInput
          label="Company"
          {...register('company', { required: 'Required' })}
          error={errors.company?.message}
        />
        <TextInput
          label="Location"
          {...register('location', { required: 'Required' })}
          error={errors.location?.message}
        />
        <Select
          label="Job Type"
          data={['Full-time', 'Part-time', 'Contract', 'Internship']}
          value={watch('type')}
          onChange={(value) => setValue('type', value as Job['type'])}
          withAsterisk
        />
        <TextInput
          label="Salary"
          {...register('salary', { required: 'Required' })}
          error={errors.salary?.message}
        />
        <Textarea
          label="Description"
          {...register('description')}
        />
        <Textarea
          label="Requirements"
          {...register('requirements')}
        />
        <Textarea
          label="Responsibilities"
          {...register('responsibilities')}
        />
        <DateInput
          label="Application Deadline"
          value={new Date(watch('deadline'))}
          onChange={(date) => setValue('deadline', date instanceof Date ? date.toISOString() : '')}

        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Create Job</Button>
        </Group>
      </Stack>
    </form>
  );
};