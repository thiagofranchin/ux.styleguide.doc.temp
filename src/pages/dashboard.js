import React, {Component} from 'react';
import MenuTop from '../../src/components/menu-top';
import MenuLateral from '../../src/components/menu-lateral';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">        
        <MenuTop />
        <div className="row">
          <div className="col-3">
            <MenuLateral />
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    );
  }
}