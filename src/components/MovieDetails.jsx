import { useEffect, useState } from "react";
import { Alert, Badge, Card, Col, Row, Spinner } from "react-bootstrap";
//import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchSingleMovie(params.id)
    console.log(movie);
  }, [])

  const fetchSingleMovie = async (id) => {
    try {
      let res = await fetch(
        "https://www.omdbapi.com/?apikey=58d180c3&i=" + id
      );
      if (res.ok) {
        let data = await res.json();
        setMovie(data);
        console.log(data);
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <Row className="justify-content-center my-5">
      <Col className="text-center" xs={12} md={6}>
        {movie ? (
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}</Card.Text>
              <Card.Body>
                Rating: <Badge bg="danger">{movie.imdbRating}</Badge>
              </Card.Body>
            </Card.Body>
          </Card>
        ) : (
          <Spinner animation="border" variant="success" />
        )}
      </Col>
    </Row>
  )
}

export default MovieDetails;


//http://www.omdbapi.com/?apikey=58d180c3&i=

    // <Card>
    //   <Card.Img variant="top" src={movie.Poster} />
    //   <Card.Body>
    //     <Card.Title>{movie.Title}</Card.Title>
    //     <Card.Text>
    //       {movie.Plot}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    