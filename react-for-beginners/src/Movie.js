import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  //Movie 컴포넌트가 부모 컴포넌트로부터 props들의 정보를 받아온다는 의미
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((exam) => (
          <li key={exam}>{exam}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // 장르는 string type을 가진 array이기 때문에 arrayOf를 사용
};

export default Movie;
