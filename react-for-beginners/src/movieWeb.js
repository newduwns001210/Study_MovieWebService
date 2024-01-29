import { useState, useEffect } from "react";

function MovieWeb() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year"
      )
    ).json();
    setData(json.data.movies);
    setLoading(false);
  };
  // coinTraker처럼 .then을 사용하는 것보다 async-await를 쓰는게 훨씬 보기 좋고 오류가 없음

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>MovieWeb {loading ? null : `(${data.length})`}</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data.map((data) => (
            <div key={data.id}>
              <img src={data.medium_cover_image} />
              <h2>{data.title}</h2>
              <p>{data.summary}</p>
              <ul>
                {data.genres.map((exam) => (
                  <li key={exam}>{exam}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieWeb;
