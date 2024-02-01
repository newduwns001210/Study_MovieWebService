import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// URL에 있는 값을 반화내주는 함수

function Detail({}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { random } = useParams();
  // random은 data.id에서 값을 받아오고 있기 때문에 useParams를 사용하여 값을 받아옴
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${random}`)
    ).json();
    setLoading(false);
    setData([json.data.movie]);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Movie Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data.map((data) => (
            <div>
              <h2>{data.title}</h2>
              <img src={data.medium_cover_image} />
              <ul>
                <li>{data.genres}</li>
              </ul>
              <button>
                <Link to="/">홈으로</Link>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
