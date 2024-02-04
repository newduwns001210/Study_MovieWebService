import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
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
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movies}>
          {data.map((data) => (
            <Movie
              key={data.id}
              id={data.id}
              year={data.year}
              coverImg={data.medium_cover_image}
              title={data.title}
              summary={data.summary}
              genres={data.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
