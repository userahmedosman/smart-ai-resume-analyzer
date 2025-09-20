import React, {type FormEvent, useState} from 'react';
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";



const upload = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget.closest("form");
        if(!form) return;
        const formData = new FormData(form);
        const companyName = formData.get("company-name");
        const jobTitile = formData.get("job-title");
        const jobDesc = formData.get("job-description");
        console.log(companyName, jobTitile, jobDesc, file);
    }
    const[IsProcessing, setIsProcessing] = useState(false)
    const[statusText, setStatusText] = useState('')
    const[file, setFile] = useState<File | null>();

    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }
  return (
      <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
          <Navbar />
          <section className={"main-section"}>
              <div className={"page-heading py-16"}>
                  <h1>Smart feedback for your dream job</h1>
                  {IsProcessing ? (
                      <>
                          <h1>{statusText}</h1>
                          <img src={"/images/resume-scan.gif"} className={"w-full"} alt={"Processing resume" } />
                      </>
                  ):(
                     <h2>Drop your resume to find how ATS score it gets and ge improvement tips</h2>
                  )}
                  {!IsProcessing && (
                      <form id={"upload-form"} onSubmit={handleSubmit} className={"flex flex-col gap-4 mt-8"}>
                          <div className={"form-div"}>
                              <label htmlFor={"company-name"}>Company Name</label>
                              <input type={"text"} name={"company-name"} placeholder={"Company Name"} id={"company-name"} />
                          </div>
                          <div className={"form-div"}>
                              <label htmlFor={"job-title"}>Job Title</label>
                              <input type={"text"} name={"job-title"} placeholder={"Job Title"} id={"job-title"} />
                          </div>
                          <div className={"form-div"}>
                              <label htmlFor={"job-description"}>Job Description</label>
                              <textarea rows={5} name={"job-description"} placeholder={"Job Description"} id={"job-description"} />
                          </div>

                          <div className={"form-div flex items-center justify-center gradient-border"}>
                              <label htmlFor={"uploader"}>Upload Resume</label>
                             <FileUploader onFileSelect={handleFileSelect} />
                          </div>
                          <button className={"primary-button"} type="submit">Analyze Resume</button>
                      </form>
                  )}
              </div>
          </section>
      </main>
  );
};

export default upload;