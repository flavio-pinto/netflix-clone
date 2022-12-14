import { Component } from "react";
import { Container } from "react-bootstrap";
import Gallery from "./Gallery";

class MainContent extends Component {
  state = {
    gallery1: [],
    gallery2: [],
    gallery3: [],
  };

  componentDidMount = () => {
    this.fetchMovies("gallery1", "harry%20potter");
    this.fetchMovies("gallery2", "star%20wars");
    this.fetchMovies("gallery3", "godzilla");
  };

  fetchMovies = async (gallery, query) => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=58d180c3&s=" + query
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        this.setState({
          [gallery]: data.Search.slice(0, 6),
        });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid className="px-4">
        <div className="mb-5">
          <h4 className="text-white text-start">Trending Now</h4>
          <Gallery movieObjects={this.state.gallery1} />
        </div>
        <div className="mb-5">
          <h4 className="text-white text-start">Watch it Again</h4>
          <Gallery movieObjects={this.state.gallery2} />
        </div>
        <div className="mb-5">
          <h4 className="text-white text-start">New Releases</h4>
          <Gallery movieObjects={this.state.gallery3} />
        </div>
      </Container>
    );
  }
}

export default MainContent;
