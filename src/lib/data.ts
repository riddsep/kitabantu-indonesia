import { JobListing } from "./definitions";

const API_ENDPOINT = "https://67b41927392f4aa94fa94b60.mockapi.io/kitabantu";

export async function fetchJobListing(): Promise<JobListing[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/joblisting`);
    const data: JobListing[] = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch job listing.");
  }
}
