// 菜单栏
import React from 'react';
import MenuStyle from './Menu.module.css';

export class RightMenu extends React.Component{
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class RightMenuItem extends React.Component{
  render() {
    return <div onClick={() => this.props.onClick && this.props.onClick()} className={MenuStyle.menuItem}>
      {this.props.children}
    </div>;
  }
}

export class Separator extends React.Component{
  render() {
    return <div style={{height: '1px', backgroundColor: '#666'}}></div>;
  }
}