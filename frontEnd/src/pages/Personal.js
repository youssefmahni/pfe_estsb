import { useEffect, useState } from "react";
import Header from "../userComp/Header";
import Body from "../userComp/Body";


const Personal = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const responce = await fetch("http://localhost:3500/personal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const data = await responce.json();
      setTitle(data.response.email);
    }
    fetchData();
  },[]);

  return (
      <div >
          <h1>hello {title}</h1>
          <Header />
          <Body />
      </div>
  );
};

export default Personal;
