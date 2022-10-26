import NewsCard from "../NewsCard/NewsCard";
import "./dashboard.css";
import fetchNews from "../../newsData";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [newsData, setNewsData] = useState([]);
  async function getNewsData() {
    let data = await fetchNews();
    setNewsData(data.data.articles);
  }

  let slicedData = newsData.splice(0, 4);
  console.log(newsData, slicedData);
  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <div className="dashboard">
      {/* <header>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header> */}
      {newsData.map((data, i) => (
        <NewsCard data={data} key={i} />
      ))}
    </div>
  );
}
