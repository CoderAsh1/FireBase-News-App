import axios from "axios";

let apiKey = process.env.REACT_APP_NEWS_API_KEY;
export default async function fetchNews() {
  let data = await axios.get(
    `https://newsapi.org/v2/everything?q=news&pageSize=20&apiKey=${apiKey}`
  );
  return data;
}
