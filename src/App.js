import axios from "axios";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      }, []);
  }, []);
  console.log(data);
  return (
    <div style={{ backgroundColor: "#f5f5f7" }}>
      <Search data={data} />
    </div>
  );
}

export default App;
