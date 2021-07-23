import React, { Component } from "react";
import Vector from "./Vector.js";

class Animation extends Component {
  constructor(props) {
      super(props);
      this.state = {
        path: [], 
        angle: props.angle,
        magnitude: props.magnitude,
        vectorCount: 50,
        speed: 1
      }
      this.x =  2/3*window.screen.width;
      this.y =  1/3*window.screen.width;
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }  
  
    
  handleChange = (e) => {
    const target = e.target;
    this.setState({
        [target.name]: target.value
    });
  }

    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    /* The only animation required is to update the angles of the points to represent
       spinning clockwise (-) and counter clockwise (+) vectors */
    updateAnimationState() {
        let angle = []; 
        for (let i = 0; i < this.state.angle.length; i++) {
          angle.push(this.state.angle[i] + i*Math.pow(-1,i) * this.state.speed/100) %(2*Math.PI);
        }  // will pow to a high power require more comp?
        let c = 0; 
        let a = 0;
        let b = 0;
        for (let i = 0; i <= this.state.vectorCount; i++) { 
          c += angle[i];
          a += Math.cos(c)*this.state.magnitude[i];
          b += Math.sin(c)*this.state.magnitude[i];
        }
        let path = this.state.path;
        path.push([a,b]);
        if (path.length > this.props.points.length*.5) {  // TODO: leave a hanging tail of x points
          path.shift();
        }
        this.setState({angle: angle, path: path});
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
  
    render() {
      return (
        <div className="container">
          <Vector 
            points={this.props.points}
            angle={this.state.angle} 
            magnitude={this.state.magnitude}
            path={this.state.path}
            vectorCount={this.state.vectorCount}
            x={this.x} 
            y={this.y} 
          />
          <div>
            <input name="vectorCount" type="range" min="1" max={this.props.mvc}  
            value={this.state.vectorCount} onChange={this.handleChange} className="sliders"/>
            <input name="speed" type="range" min="1" max="5"   
            value={this.state.speed} onChange={this.handleChange} className="sliders"/>
          </div>
          <div>
            <button onClick={this.props.reset} className="buttons">Reset</button>
          </div>
        </div>
      )};
}

export default Animation;