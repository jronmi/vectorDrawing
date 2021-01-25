import React, { Component } from "react";
let Complex = require('complex.js');

import Animation from "../modules/Animation.js";
import Canvas from "../modules/Canvas.js"

// to use styles, import the necessary CSS files
import "../../utilities.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      angles: [],
      magnitude: [],
      submitted: false,
      maxVectorCount: 100
    };
  };

  importState = (points) => {
    this.setState({ points: points });
  }

  reset = () => {
    this.setState({ submitted: false, points: [], angles: [], lengths: [] });
  }

  // move to animation class?? yes
  calculate = () => {
    if (this.state.points.length == 0) {
      alert("No data to parse");
    }
    else {
      // fills in gaps between recorded points with a minimum density of one point per l pixels
      // reduces the noise/errors and fills in last connection (unneccessary but better flow)
      const l = 4;
      let updatedPoints = [];
      for (let p = 0; p < this.state.points.length; p++) {
        let p2 = p + 1;
        if (p == this.state.points.length - 1) { p2 = 0 }; // last item loops to first
        let dx = this.state.points[p2][0] - this.state.points[p][0];
        let dy = this.state.points[p2][1] - this.state.points[p][1];
        let n = Math.floor(Math.sqrt((dx) ** 2 + (dy) ** 2) / l); // divide to closest + integer division lengths of l
        let np = Array.from(new Array(n), (val, index) =>
          [this.state.points[p][0] + (index + 1) * dx / (n + 1), this.state.points[p][1] + (index + 1) * dy / (n + 1)]);
        updatedPoints.push(this.state.points[p]);
        updatedPoints = updatedPoints.concat(np);
      }

      let dt = [];
      let angles = [];  // will alternate 1, -1, 2, -2, ...
      let magnitude = [];
      let prevAng = 0;
      for (let j = 0; j <= this.state.maxVectorCount; j++) {
        let n = Math.ceil(j / 2) * Math.pow(-1, j + 1); // this will allow for alternating between odds and even
        dt = Array.from(updatedPoints, (x, i) => complexCalc(x, n, i / (updatedPoints.length)))
        let LRAM = dt.reduce(function (a, b) { return a.add(b) }, Complex.ZERO).div(updatedPoints.length);

        magnitude.push(Math.sqrt(Math.pow(LRAM.re, 2) + Math.pow(LRAM.im, 2)));
        // Need to change angles to not be relative to previous vector !!!
        let curAng = Math.atan2(LRAM.im, LRAM.re);
        angles.push(curAng - prevAng); // function inputs are backwards (y,x)
        prevAng = curAng;
        dt = [];
      }

      this.setState({ submitted: true, angles: angles, magnitude: magnitude, points: updatedPoints });
    }
  }

  render() {
    return (
      <>
        {this.state.submitted
          ? <div>
            <Animation
              angle={this.state.angles}
              magnitude={this.state.magnitude}
              speed={this.state.speed}
              points={this.state.points}
              reset={this.reset}
              mvc={this.state.maxVectorCount}
            />
          </div>
          : <div>
            <Canvas
              importState={this.importState}
              calculate={this.calculate}
            />
          </div>
        }
      </>
    );
  };
}

function complexCalc(ft, n, t) { // array[2], int, float ... static declaration?
  let e = new Complex({ re: Math.cos(-n * 2 * Math.PI * t), im: Math.sin(-n * 2 * Math.PI * t) });
  let ftc = new Complex({ re: ft[0], im: ft[1] });
  let val = ftc.mul(e);
  return val
}

export default Home;
