import React, { Component } from "react";

class flashCard extends Component {
  state = {
    flashCardAnswer: null
  };

  // Onchange function goes here
  onChange = event => {
    console.log(event.target.value);
    this.setState({
      flashCardAnswer: event.target.value
    });
  };

  // Onclick function
  onClick = event => {
    const answer = this.state.flashCardAnswer;
    // event.preventDefault();
    if (answer === "365") {
      console.log("Yayy! You're correct!!");
    } else {
      console.log("OOps! incorrect answer");
    }
  };

  render() {
    return (
      <div className="flashCard">
        <div className="flashCard_container">
          <h2 className="flashCard_question">
            How many days are there in a year?
          </h2>
          <div className="flashCard_questions">
            <ul className="flashCard_list">
              <input
                className="flashCard_list_item_input"
                type="text"
                onChange={this.onChange}
                value={this.state.flashCardAnswer}
              />
            </ul>
            <button
              className="flashCard_list_item_submit"
              onClick={this.onClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default flashCard;
