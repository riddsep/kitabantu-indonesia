export interface JobListing {
  id: string;
  title: string;
  company: string;
  jobType: string;
  location: string;
  category: string;
  salary: string;
  imageUrl: string;
  description: string[];
  requirements: string[];
  createdAt: string;
}
