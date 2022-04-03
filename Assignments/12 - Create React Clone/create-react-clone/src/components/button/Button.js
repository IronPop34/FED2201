import React from "react";

class HadesSaysButton extends React.Component {
  // define what data is managed when our class component is instantiated using a constructor method
  constructor() {
    super();
    this.state = {
      HadesSays: "Blood and Darkness",
    };
    this.handleHadesSaysClick = this.handleHadesSaysClick.bind(this);
  }

  // handleClick methods
  handleHadesSaysClick() {
      this.handleClick()
      this.setState({ 
          HadesSays: this.state.HadesSays});
    }

  // render expression/statement
  render() {
    return (
      <div className="HadesSaysButton">
        <div className="click-displays">
          <h3>HadesSays: {this.state.HadesSays}</h3>          
        </div>

        <div className="buttons">
          <button onClick={this.handleHadesSaysClick}>Hades Says:</button>          
        </div>
      </div>
    );
  }
}


export default HadesSaysButton;
