// Sample job data
const jobs = [
    { title: "Frontend Developer", company: "TechCorp", description: "Build amazing user interfaces." },
    { title: "Backend Developer", company: "DataWorks", description: "Develop APIs and server logic." },
  ];
  
  const jobListingsDiv = document.getElementById('job-listings');
  const postJobForm = document.getElementById('post-job-form');
  
  // Function to display jobs
  function displayJobs() {
    jobListingsDiv.innerHTML = ''; // Clear previous jobs
    jobs.forEach((job, index) => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job');
      jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p>Company: ${job.company}</p>
        <p>${job.description}</p>
      `;
      jobListingsDiv.appendChild(jobDiv);
    });
  }
  
  // Add a new job
  postJobForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('job-title').value;
    const company = document.getElementById('job-company').value;
    const description = document.getElementById('job-description').value;
  
    if (title && company && description) {
      jobs.push({ title, company, description });
      displayJobs();
      postJobForm.reset();
    } else {
      alert('Please fill in all fields');
    }
  });
  
  // Initialize job listings
  displayJobs();
  