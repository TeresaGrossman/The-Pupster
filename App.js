import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppys from "./puppys.json";
import "./App.css";

class App extends Component {
  // Setting this.state.puppys to the puppys json array
  state = {
    puppys
  };

  removePuppy = id => {
    // Filter this.state.puppys for puppys with an id not equal to the id being removed
    const puppys = this.state.puppys.filter(puppy=> puppy.id !== id);
    // Set this.state.puppys equal to the new puppyss array
    this.setState({ puppys });
  };

  // Map over this.state.puppyss and render a PuppyCard component for each puppy object
  render() {
    return (
      <Wrapper>
        <Title>Puppies List</Title>
        {this.state.puppys.map(puppy => (
          <PuppyCard
            removePuppy={this.removePuppy}
            id={puppy.id}
            key={puppy.id}
            name={puppy.name}
            image={puppy.image}
            // occupation={puppy.occupation}
            // location={puppy.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
