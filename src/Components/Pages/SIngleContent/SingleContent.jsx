import "./SingleContent.css";
const SingleContent = (prop) => {
  return (
    <>
      <div className="posterCard">
        <img
          src={`https://image.tmdb.org/t/p/w300/${prop.poster_path}`}
          height={240}
          width={220}
          style={{ objectFit: "fill" }}
        />
        <div className="posterContent">
          <div className="contentTitle">
            <p>{prop.original_title}</p>
          </div>
          <div className="posterContenttype">
            <p> {prop.media_type}</p>
            <p>{prop.release_date || prop.first_air_date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleContent;
