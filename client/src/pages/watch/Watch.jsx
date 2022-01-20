import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation, useParams } from "react-router-dom";
import "./watch.scss";
import ReactPlayer from 'react-player';
import { useEffect, useState } from "react";
import axios from "../../axios";

export default function Watch() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${id}`);
        setMovie(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [id]);


  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <ReactPlayer style={{ objectFit: 'fill', paddingTop: 20 }} className="video" autoPlay progress controls url={movie.video}
        width="100vw"
        height='95%' fluid={false} playsInline />
    </div>
  );
}
