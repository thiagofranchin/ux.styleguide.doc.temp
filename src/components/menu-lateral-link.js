import React, {Component} from 'react';

export default class MenuLateralLink extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { idMenu, 
      indexRef, 
      txtLinkMenu,
      txtLinkSubMenu,
      linkSubMenu,
      children } = this.props;

    return(
      <div>
        <div className="card">
          <div className="card-header" role="tab" id={`headingOne${idMenu}`}>
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${indexRef}`} aria-expanded="true" aria-controls={`collapse${indexRef}`}>
                {txtLinkMenu}
              </a>
            </h5>
          </div>

          <div id={`collapse${indexRef}`} className="collapse" role="tabpanel" aria-labelledby={`headingOne${idMenu}`}>
            <div className="card-block">
              <ul className="list-group">
                {children}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}