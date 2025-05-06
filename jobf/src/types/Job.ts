export interface Job {
    id?: number;
    title: string;
    company: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    salary: string;
    description: string;
    requirements: string;
    responsibilities: string;
    deadline: string;
  }
  