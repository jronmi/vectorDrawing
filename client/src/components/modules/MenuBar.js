import React, {Component} from "react";
import "./MenuBar.css"

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <>
                {this.state.clicked
                    ? <div className="menuBar" onClick={this.handleClick} style={{left: 1/6*window.screen.width}}> Icon</div>
                    : <div className="menuBar" onClick={this.handleClick} > list </div>
                }
            </>
        )};

}

export default MenuBar