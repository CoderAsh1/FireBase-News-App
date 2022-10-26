import "./newscard.css";

export default function NewsCard({ data }) {
  const { publishedAt, urlToImage, title, content } = data;

  return (
    <div className="newscard">
      <div className="card_wrapper">
        <img src={urlToImage} alt="NewsTime" />
        <div className="details">
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
          <h2>{title}</h2>
          <p title={content}>{content.slice(0, 200) + "..."}</p>
        </div>
      </div>
    </div>
  );
}
