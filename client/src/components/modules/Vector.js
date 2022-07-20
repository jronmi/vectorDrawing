import React, { Component } from "react";

class Vector extends Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {
      const { angle, path, magnitude, x, y, points, vectorCount} = this.props;
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
    
      ctx.save();
      ctx.beginPath();   
      ctx.clearRect(0, 0, x, y); // clear old vectors

      // points from drawing 
      ctx.strokeStyle = '#ccdaff';
      ctx.lineWidth = 4;  
      for (let i = 0; i < points.length-1; i++) {
        ctx.arc(points[i][0], points[i][1], 2, 0, 2*Math.PI);
      }
      ctx.stroke()

      // travel path
      ctx.beginPath(); // keeps from redrawing points
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#396DFF';
      for (let i = 0; i < path.length-1; i++) {
        ctx.moveTo(path[i][0], path[i][1])
        ctx.lineTo(path[i+1][0], path[i+1][1])
      }

      // draw vectors
      for (let i = 0; i <= vectorCount; i++) {
        ctx.rotate(angle[i]);
        if (i!=0) {
          canvas_arrow(ctx, 0,0, magnitude[i], 0);
        }
        ctx.translate(magnitude[i], 0);
      }
      ctx.stroke();
      ctx.restore();
    }
  
    render() {
      return (
        <div className="">
          <canvas className="" width={this.props.x} height={this.props.y} ref={this.canvasRef}/>
        </div>
      );
    }
}

// https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
function canvas_arrow(context, fromx, fromy, tox, toy) {
  var headlen = 5; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  context.moveTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

export default Vector;