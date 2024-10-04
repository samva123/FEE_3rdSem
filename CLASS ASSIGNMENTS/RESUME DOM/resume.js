document.addEventListener("DOMContentLoaded", function() {
    // Resume container
    const resume = document.getElementById('resume');

    // 1. Header Section (Name, Title, Contact Info, Profile Image)
    const header = document.createElement('div');
    header.className = 'resume-header';

    // Profile Image
    const profileImage = document.createElement('img');
    profileImage.src = 'hello.jpg'; 
    profileImage.alt = 'Profile Picture';
    profileImage.style.width = '300px';
    profileImage.style.borderRadius = '20%';  

    // Name
    const name = document.createElement('h1');
    name.textContent = 'Varun Bansal';

    // Title
    const title = document.createElement('p');
    title.textContent = 'Student';

    // Contact Info
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: vb60490@gmail.com | Phone: +919729550485';  
    // Append elements to header
    header.appendChild(profileImage);
    header.appendChild(name);
    header.appendChild(title);
    header.appendChild(contactInfo);

    // Append header to resume
    resume.appendChild(header);

    // 2. Experience Section
    const experienceSection = document.createElement('div');
    experienceSection.className = 'resume-section';

    const experienceTitle = document.createElement('h2');
    experienceTitle.textContent = 'Experience';

    const job1 = document.createElement('div');
    const jobTitle1 = document.createElement('h3');
    jobTitle1.textContent = 'Software Developer at Chitkara University';
    const jobDetails1 = document.createElement('p');
    jobDetails1.textContent = 'Developed web applications using JavaScript, HTML, and CSS.';

    job1.appendChild(jobTitle1);
    job1.appendChild(jobDetails1);

    experienceSection.appendChild(experienceTitle);
    experienceSection.appendChild(job1);

    resume.appendChild(experienceSection);

    // 3. Education Section
    const educationSection = document.createElement('div');
    educationSection.className = 'resume-section';

    const educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Education';

    const degree = document.createElement('div');
    const degreeTitle = document.createElement('h3');
    degreeTitle.textContent = 'B.E. in Computer Science, Chitkara University';
    const degreeDetails = document.createElement('p');
    degreeDetails.textContent = 'Currently in Second year';

    degree.appendChild(degreeTitle);
    degree.appendChild(degreeDetails);

    educationSection.appendChild(educationTitle);
    educationSection.appendChild(degree);

    resume.appendChild(educationSection);

    // 4. Skills Section
    const skillsSection = document.createElement('div');
    skillsSection.className = 'resume-section';

    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Skills';

    const skillsList = document.createElement('ul');
    const skill1 = document.createElement('li');
    skill1.textContent = 'JavaScript';
    const skill2 = document.createElement('li');
    skill2.textContent = 'HTML & CSS';
    const skill3 = document.createElement('li');
    skill3.textContent = 'React.js';

    skillsList.appendChild(skill1);
    skillsList.appendChild(skill2);
    skillsList.appendChild(skill3);

    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsList);

    resume.appendChild(skillsSection);

    // 5. Adding Some Basic Styling
    document.body.style.fontFamily = 'Arial, sans-serif';

    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(section => {
        section.style.marginBottom = '20px';
    });

    header.style.textAlign = 'center';
    name.style.fontSize = '2em';
    title.style.fontSize = '1.2em';
    contactInfo.style.fontSize = '1em';
    contactInfo.style.color = 'gray';

    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.style.borderBottom = '2px solid #333';
        h2.style.paddingBottom = '5px';
    });

    const ulElements = document.querySelectorAll('ul');
    ulElements.forEach(ul => {
        ul.style.listStyle = 'circle';
    });

    // Centering the Profile Image
    profileImage.style.display = 'block';
    profileImage.style.margin = '0 auto';
});
