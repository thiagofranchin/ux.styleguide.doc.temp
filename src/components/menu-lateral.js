import React, {Component} from 'react';
import MenuLateralLink from '../../src/components/menu-lateral-link';
import MenuLateralSubMenuLinks from '../../src/components/menu-lateral-sub-menu-links';

export default class MenuLateral extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="accordion" className="menu-lateral" role="tablist" aria-multiselectable="true">
        <MenuLateralLink
          txtLinkMenu="Spinner"
          idMenu="a" 
          indexRef="aa" >

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
          txtLinkMenu="Cores"         
          idMenu="b"
          indexRef="bb" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />
        </MenuLateralLink>
        
        <MenuLateralLink
          txtLinkMenu="Icons"         
          idMenu="c"
          indexRef="cc" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Select Control"         
          idMenu="d"
          indexRef="dd" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Checkbox Switch"
            linkSubMenu="http://www.google.com.br"
          />          
          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Checkbox Custom"
            linkSubMenu="http://www.google.com.br"
          />
          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Radio button"
            linkSubMenu="http://www.google.com.br"
          />
        </MenuLateralLink>
        
        <MenuLateralLink
          txtLinkMenu="Buttons"         
          idMenu="e"
          indexRef="ee" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Logos"         
          idMenu="f"
          indexRef="ff" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Illustration"         
          idMenu="g"
          indexRef="gg" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Popover"         
          idMenu="h"
          indexRef="hh" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>

        <MenuLateralLink
          txtLinkMenu="Borders"         
          idMenu="i"
          indexRef="ii" >

          <MenuLateralSubMenuLinks
            txtLinkSubMenu="Sub b"
            linkSubMenu="http://www.google.com.br"
          />          
        </MenuLateralLink>
      </div>
    )
  }
}