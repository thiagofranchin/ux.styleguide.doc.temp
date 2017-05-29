import React, {Component} from 'react';
import MenuLateralLink from '../../src/components/menu-lateral-link';
import MenuLateralSubMenuLinks from '../../src/components/menu-lateral-sub-menu-links';

export default class MenuLateral extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="accordion" role="tablist" aria-multiselectable="true">
        <MenuLateralLink
          txtLinkMenu="Colors"
          idMenu="a" 
          indexRef="aa" 
        >          
          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Classe de Cores" 
            linkSubMenu="http://www.gmail.com.br"
          />
          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Cores das Marcas" 
            linkSubMenu="http://www.gmail.com.br"
          />

        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Borders"         
          idMenu="b"
          indexRef="bb"
        >
          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />
        </MenuLateralLink>
      </div>
    )
  }
}