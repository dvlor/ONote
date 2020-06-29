import React from 'react';

export default class Icon extends React.Component{
  render(){
    return <i style={{...this.props.style}} className={'fa fa-' + this.props.type}></i>
  }
}