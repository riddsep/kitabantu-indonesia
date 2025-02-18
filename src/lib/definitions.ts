export interface JobListing {
  id: string;
  jobTitle: string;
  company: string;
  jobType: string;
  location: string;
  category: string;
  salary: string;
  imageUrl: string;
  jobDesc: string[];
  jobReq: string[];
  createdAt: string;
}

export interface Job {
  imageUrl: string;
  jobTitle: string;
  company: string;
  jobType: string;
  location: string;
  category: string;
  salary: string;
}
