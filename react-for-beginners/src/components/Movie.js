import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, year, summary, genres, id }) {
  //Movie 컴포넌트가 부모 컴포넌트로부터 props들의 정보를 받아온다는 의미
  return (
    <div>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <h2 className={styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie_year}>{year}</h3>
      <p>
        {summary.length > 235 ? (
          `${summary.slice(0, 235)}` && (
            <Link to={`/movie/${id}`}>more long summary...</Link>
          )
        ) : summary.length < 1 ? (
          <p>No summary</p>
        ) : (
          summary
        )}
      </p>
      <ul className={styles.movie_genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // 장르는 string type을 가진 array이기 때문에 arrayOf를 사용
};

export default Movie;
