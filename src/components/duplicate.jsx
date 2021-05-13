import React, { Component } from "react";

class Duplicate extends Component {
  state = {
    el: [1, 1, 2, 3, 4, 5, 5],
  };

  dup() {
    const tempArray = [...this.state.el].sort();
    let duplicates = [];

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i]);
      }
    }

    return (
      <ul className="list-group text-center">
        {duplicates.map((even) => (
          <li key={even} className="list-group-item">
            {even}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div><p>The duplicate elements are</p>{this.dup()}</div>;
  }
}

export default Duplicate;
