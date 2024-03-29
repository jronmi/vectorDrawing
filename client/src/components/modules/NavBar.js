import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <nav className="p-1 bg-primary flex items-center justify-between">
            <Link to="/" className="text-black font-sans text-xl m-3">
              Home
            </Link>
            <div className="text-black font-sans text-lg flex items-center">
              <Link to="/drawing" className="m-3" >
                Drawing
              </Link>
              <Link to="" className="m-3" >
                Example 1
              </Link>
              <Link to="" className="m-3" >
                Example 2
              </Link>
              <a href="https://github.com/jronmi" target ="_blank" className="m-3" >
                <svg  _ngcontent-xvk-c0="" viewBox="0 0 28 28" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path _ngcontent-xvk-c0="" clipRule="evenodd" d="M14 0C6.27 0 0 6.43 0 14.36c0 6.34 4.01 11.72 9.57 13.62.7.13.96-.31.96-.69 0-.34-.01-1.24-.02-2.44-3.89.87-4.72-1.92-4.72-1.92-.64-1.66-1.55-2.1-1.55-2.1-1.27-.89.1-.87.1-.87 1.4.1 2.14 1.48 2.14 1.48 1.25 2.19 3.28 1.56 4.07 1.19.13-.93.49-1.56.89-1.92-3.11-.36-6.38-1.59-6.38-7.09 0-1.57.55-2.85 1.44-3.85-.14-.36-.62-1.82.14-3.8 0 0 1.18-.39 3.85 1.47a12.8 12.8 0 013.5-.48c1.19.01 2.39.16 3.5.48 2.67-1.86 3.85-1.47 3.85-1.47.76 1.98.28 3.44.14 3.8.9 1 1.44 2.28 1.44 3.85 0 5.51-3.27 6.73-6.39 7.08.5.44.95 1.32.95 2.66 0 1.92-.02 3.47-.02 3.94 0 .38.25.83.96.69C23.99 26.07 28 20.7 28 14.36 28 6.43 21.73 0 14 0z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
        </nav>     
      );
    };
  }
  
  export default NavBar;