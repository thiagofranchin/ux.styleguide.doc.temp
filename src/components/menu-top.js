import React, {Component} from "react";


export default class MenuTop extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Style Guide <small>v1.0.0</small></a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Components <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              {/*<a className="nav-link" href="#">Link</a>*/}
            </li>
            <li className="nav-item">
              {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }
}