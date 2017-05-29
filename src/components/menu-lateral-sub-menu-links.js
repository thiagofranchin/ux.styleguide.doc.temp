import React, {Component} from 'react';

export default class MenuLateralSubMenuLinks extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {
      txtLinkSubMenu,
      linkSubMenu } = this.props;

    return(
     <li className="list-group-item"><a href={linkSubMenu}>{txtLinkSubMenu}</a></li>
    )
  }
}