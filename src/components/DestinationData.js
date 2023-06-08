import { Component } from "react";
// import kst1 from "../assests/kst.jpg";
// import kst2 from "../assests/kst2.jpg";
// import kst3 from "../assests/kst.jpg";
// import kst4 from "../assests/kst.jpg";
import "./DestinationStyle.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
