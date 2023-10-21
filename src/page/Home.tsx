import { useLoaderData } from "react-router-dom";

function Home() {
  const { data } = useLoaderData() as { data: string };
  console.log("home page data", data);
  return (
    <div>
      This is home page <p>{data}</p>
    </div>
  );
}

export default Home;
