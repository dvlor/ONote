import React from 'react';
import Icon from '../components/Icon';
import ListPanelStyle from './ListPanel.module.css';
import RightMenuService from '../service/RightMenuService'

export default class ListPanel extends React.Component {
  render() {

    const items = [1,2,3,4,5,6,7,8,9,10,11,12].map(function (i) {
      return <ListItem key={i} />
    });

    return (
      <div className="list-panel">
        <div className={ListPanelStyle.wraper}>
          <input className={ListPanelStyle.filter} type="text"/>
          <ul className={ListPanelStyle.noteList}>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

class ListItem extends React.Component{

  contextMenuHandler(e) {
    RightMenuService.show(e.clientX, e.clientY, this);
  }


  render(){
    return (
      <li onContextMenu={(e) => this.contextMenuHandler(e)} className={ListPanelStyle.noteItem}>
        <Icon type="file"></Icon>
        <span>笔记1</span>
        <time>06-16</time>
      </li>
    );
  }
}

