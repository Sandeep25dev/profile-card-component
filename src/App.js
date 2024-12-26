import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await res.json();

        setData(data.results);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  return (
    <div className="bg-[#CDC1FF] h-screen flex items-center">
      <div className="w-full">
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
