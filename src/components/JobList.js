import { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [list, setList] = useState({});

  console.log(list);

  useEffect(() => {
    const fetchJobList = async () => {
      const response = await axios.get(
        `https://interview.pencilwoodbd.org/api`
      );
      setList(response.data);
    };
    fetchJobList();
  }, []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">sfsaf</main>
  );
};
export default JobList;
