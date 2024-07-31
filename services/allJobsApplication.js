//functions of parameter and argument



// services/jobApplications.js
export async function fetchAppliedJobs(userId) {
    console.log(userId);
    const response = await fetch(`/api/jobs/appliedjobs?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch applied jobs');
    }
    return response.json();
  }

//   api/jobs/appliedjobs?userId