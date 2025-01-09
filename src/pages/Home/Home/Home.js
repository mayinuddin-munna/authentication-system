import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const response = await axios.get(
          `https://interview.pencilwoodbd.org/api/job/`
        );
        console.log(response.data);
        setList(response.data);
      } catch (error) {
        console.error("Error fetching job list:", error);
      }
    };

    fetchJobList();
  }, []);

  return (
    <div className="h-screen py-24">
      <h1 className="text-center mb-10">Total available jobs: {list.length}</h1>
      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {list.length > 0 ? (
              list.map((job, index) => (
                <div key={index} className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        {job.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {job.description}
                      </p>
                      <div className="flex items-center mt-3">
                        Created At:{" "}
                        {new Date(job.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
