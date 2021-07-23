import React, { Component } from "react";
import "./Inspiration.css"

class Inspiration extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="container">
        <div className="youtube">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r6sGWTCMz2k"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="bodyText">
          <p>
            This project was inspired by 3Blue1Brown's video series on Fourier series.
            For whatever is drawn on the Canvas, a fourier series will be created to
            cyclicaly trace the image in complex space as a chain of rotating vectors
                  - the video explains the mathmatical concepts fully. <hr></hr>
                  Another large influence was u/treeforface's {" "}
            {<a href="https://gofigure.impara.ai/inspiration" target="_blank">website</a>}
            {" "}which inspired me to make my own version.
            </p>
        </div>
      </div>
    );
  };
}

export default Inspiration;
