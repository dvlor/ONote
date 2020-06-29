import React from 'react';
import { RightMenu, RightMenuItem, Separator } from '../components/Menu';
import RightMenuService from '../service/RightMenuService'
import ContextMenuPanelStyle from './ContextMenuPanel.module.css';

export default class ContextMenuPanel extends React.Component{
  
  constructor(){
    super();
    this.state = {
      x: 0,
      y: 0,
      context: null
    }
    RightMenuService.onShow((x, y, context) => {
      this.setState({
        x: x,
        y: y,
        context: context
      })
    })
  }

  render(){
    return (
      <div className={ContextMenuPanelStyle.container}>
        <RightMenu>
          <RightMenuItem></RightMenuItem>
        </RightMenu>
        <Separator />
        <RightMenu>
          <RightMenuItem></RightMenuItem>
        </RightMenu>
      </div>
    );
  }
}
