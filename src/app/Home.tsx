'use client';
import React from 'react';



const HomePage: React.FC = () => {

  const handleContactClick = () => {
    const emailAddress = 'sarveshpalav@gmail.com'; // Replace with your email address
    const subject = 'Contact from Website'; // Optional: Add a subject line
    const body = 'Hello, I would like to get in touch with you regarding...'; // Optional: Add a default message body
  
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleResumeClick = () => {
    
    const resumeUrl = '/assets/Sarvesh_Palav_Resume.pdf'; // Relative path to the resume file
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Sarvesh_Palav_Resume.pdf'; // You can set the filename here
    anchor.click();
    
  };

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    <div className=" p-6 rounded-lg">
       
    <div className="text-center sm:text-left"> 
<h1 className="header font-inter text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Sarvesh Palav</h1>
<h2 className="sub-heading font-inter text-base sm:text-lg mt-4 md:ml-2">Full Stack Application Developer</h2>
</div>

    </div>
    <div className="font-inter p-6  brief text-center sm:text-left">
    Over the years, I’ve built products for companies and businesses around the globe, ranging from marketing websites to complex solutions and enterprise apps, with a focus on fast, elegant, and accessible user experiences.
Currently, I work at Optel Group as a Software Consultant, crafting thoughtful and inclusive experiences that adhere to web standards for diverse clients across the traceability domain. I leverage technologies like Python, FastAPI, PostgreSQL, React-TypeScript, and Google Cloud Platform to deliver scalable and reliable solutions.

    </div>
    
  
    <div className="grid grid-cols-1 md:grid-cols-8 justify-center gap-4 w-full mt-2 md:col-span-3">
<div className="centerOnMobile mx-5 md:mx-6  col-span-2 flex  ">
    <div >
        <button style={{width: "10rem"}} type="button" onClick={handleContactClick}   className="text-white hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white-500 dark:text-white dark:hover:text-white dark:hover:bg-white-500 dark:focus:ring-white-800">Contact Me</button>
    </div>
   
</div>
<div className="centerOnMobile mx-5 md:mx-6  col-span-2 flex  ">
    <div >
        <button style={{width: "12rem"}} type="button" onClick={handleResumeClick} className="text-white hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white-500 dark:text-white dark:hover:text-white dark:hover:bg-white-500 dark:focus:ring-white-800">Download Resume</button>
    </div>
   
</div>

<div  className=" mx-4 my-4 md:mx-6  md:col-span-4 flex ">
   
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4 ">
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300 ">HTML</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">CSS</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Javascript</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Typescript</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
</div>
<div className="centerOnMobile" >
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Angular</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Pulumi IAC</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">CI/CD</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">GIT</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Gitlab</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Wordpress</span>
</div>
<div className="centerOnMobile">
<span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Terminal</span>
</div>
</div>

</div>

</div>
    
    
    </div>
  );
}

export default HomePage;
