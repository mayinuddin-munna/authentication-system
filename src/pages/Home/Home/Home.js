import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);

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

  return <div>Home.js</div>;
};

export default Home;
