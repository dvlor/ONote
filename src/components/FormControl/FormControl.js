// 最大化 最小化 关闭工具栏
import React from 'react';
import Icon from '../Icon';
import FormControlStyle from './FormControl.module.css';
// window-maximize

export default class FormControl extends React.Component{
  render() {
    return (
      <div className={FormControlStyle.control} style={{...this.props.style}}>
        <Icon type="window-minimize"></Icon>
        <Icon type="window-restore"></Icon>
        <Icon type="window-close-o"></Icon>
      </div>
    )
  }
}