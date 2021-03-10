import React, { Component } from "react";
import { reviews } from "../../services/usefulApi";

class Reviews extends Component {
  state = {
    content: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    reviews(moviesId).then((data) => {
      this.setState({ content: data.results });
    });
  }

  render() {
    console.log(this.state.content);
    return (
      <>
        <ul>
          {this.state.content.length > 0 ? (
            this.state.content.map((discript) => {
              return (
                <li key={discript.id}>
                  <h2>Author:{discript.author}</h2>
                  <p>{discript.content}</p>
                </li>
              );
            })
          ) : (
            <p>There are no reviews yet.</p>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
