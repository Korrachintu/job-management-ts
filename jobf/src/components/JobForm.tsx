'use client';

import { useForm } from 'react-hook-form';
import { Button, TextInput, Textarea, Select } from '@mantine/core';
import { createJob } from '../services/jobService';
import { Job } from '../types/Job';

export const JobForm = () => {
  const { register, handleSubmit, reset } = useForm<Job>();

  const onSubmit = async (data: Job) => {
    await createJob(data);
    reset();
    alert('Job Created!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="Job Title" {...register('title')} required />
      <TextInput label="Company" {...register('company')} required />
      <TextInput label="Location" {...register('location')} required />
      <Select label="Job Type"
        data={["Full-time", "Part-time", "Contract", "Internship"]}
        {...register('type')}
        required
      />
      <TextInput label="Salary Range" {...register('salary')} required />
      <Textarea label="Description" {...register('description')} required />
      <Textarea label="Requirements" {...register('requirements')} required />
      <Textarea label="Responsibilities" {...register('responsibilities')} required />
      <TextInput label="Deadline" type="date" {...register('deadline')} required />
      <Button mt="md" type="submit">Create Job</Button>
    </form>
  );
};