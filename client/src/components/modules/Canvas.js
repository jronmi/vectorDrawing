import React, { Component } from "react";
import "./Canvas.css";

// Note to self, the offsetX and Y are relative to the origin since the listeners are attatched to the Canvas element


class Canvas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            keyPressed: false,
            points: [],
        }
        this.x =  2/3*window.screen.width;
        this.y =  1/3*window.screen.width;
        this.canvasRef = React.createRef();
    }

    clear() {
        // TODO: decide whether to keep modular or incorporate into handleMouseDown
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, this.x, this.y);
    }

    drawPic(x1, y1, x2, y2) {
        // going to drawPic a line between points
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = '#396DFF'; // stroke = border; fill
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke()
        ctx.closePath();
    };
    
    //TODO: decide whether to make function to handle setState to consolidate
    handleMouseDown(e) {
        this.clear()
        this.setState({keyPressed: true, points: [[e.offsetX, e.offsetY]]});
    }

    handleMouseUp(e) {
        if (this.state.keyPressed) {
            this.drawPic(e.offsetX, e.offsetY, this.state.points[0][0], this.state.points[0][1]); //closing line seg
            this.setState(prevstate => ({keyPressed: false, points: prevstate.points.concat([[e.offsetX, e.offsetY]])}));
            this.props.importState(this.state.points);
        }
    }

    handleMouseMove(e) {
        // TODO: change to accomodate not just moves but position over time ... probably not
        if (this.state.keyPressed) {
            this.drawPic(this.state.points[this.state.points.length - 1][0], this.state.points[this.state.points.length - 1][1], e.offsetX, e.offsetY);
            this.setState(prevstate => ({points: prevstate.points.concat([[e.offsetX, e.offsetY]])}));
        }
    }

    render()  {
        return (
            <>
                <div className="canvas-container">
                    <canvas className="canvas"
                        ref={this.canvasRef} 
                        width={this.x}
                        height={this.y}
                        onMouseDown={(e) => this.handleMouseDown(e.nativeEvent)}
                        onMouseMove={(e) => this.handleMouseMove(e.nativeEvent)}
                        onMouseUp={(e) => this.handleMouseUp(e.nativeEvent)}
                    />
                </div>
                <button onClick={this.props.calculate} className="buttons">Submit</button>
            </>
        );
    };
}

export default Canvas;