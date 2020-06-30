import React from 'react';
import ContextMenuPanelStyle from './ContextMenuPanel.module.css';

export default class ContextMenuPanel extends React.Component{

  render(){
    return (
      <div className={ContextMenuPanelStyle.container} style={{left: this.props.left, top: this.props.top}}>
        {this.props.children}
      </div>
    );
  }
}
