import React from 'react';
import ReactDom from 'react-dom';

import Icon from '../../components/Icon';
import ContextMenuPanel from '../ContextMenuPanel/ContextMenuPanel';
import { Separator, RightMenuItem } from '../../components/Menu/Menu';

import ListPanelStyle from './ListPanel.module.css';

export default class ListPanel extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: [{
        title: '笔记1',
        type: 'f',
        time: '06-30',
        editable: false
      },{
        title: '笔记2',
        type: 'f',
        time: '06-30',
        editable: false
      },{
        title: '笔记3',
        type: 'd',
        time: '06-30',
        editable: false
      }]
    }
  }

  // 销毁右键菜单
  registryDestory() {
    function onClick(){
      window.removeEventListener('click', onClick);
      if (this.div) {
        ReactDom.unmountComponentAtNode(this.div);
        this.div.remove();
        this.div = null;
      }
    }

    window.addEventListener('click', onClick.bind(this));
  }

  // 重命名
  rename(note) {
    this.setState({
      notes: this.state.notes.map(n => n === note ? { ...note, editable: true } : n)
    })
  }

  // 删除
  remove(note) {
    this.setState({
      notes: this.state.notes.filter(n => n !== note)
    })
  }

  // 修改名称
  chageTitle(e, note) {
    if (!e.target.value && !note.title) {
      this.remove(note);
      return;
    }
    
    this.setState({
      notes: this.state.notes.map(n => n === note ? { ...note, title: e.target.value || note.title, editable: false } : n)
    })
  }

  // 新建笔记
  newNote() {
    this.setState({
      notes: [...this.state.notes, {title: '', time: '', editable: true}]
    })
  }

  // 新建文件夹
  newDirectory() {
    this.setState({
      notes: [...this.state.notes, {title: '', time: '', editable: true}]
    })
  }

  // 显示列表右键菜单
  showListMenu(e) {
    if (this.div) {
      this.div.remove();
      this.div = null;
    }
    this.div = document.createElement('div')
    document.body.appendChild(this.div)
    const rightMenu = <ContextMenuPanel left={e.clientX + 'px'} top={e.clientY + 'px'}>
      <RightMenuItem onClick={() => this.newNote()} >新建笔记</RightMenuItem>
      <RightMenuItem onClick={() => this.newDirectory()}>新建文件夹</RightMenuItem>
    </ContextMenuPanel>;
    ReactDom.render(rightMenu, this.div);
    this.registryDestory();
  }

  // 显示笔记右键菜单
  show(e, note) {
    e.stopPropagation();
    e.preventDefault();
    if (this.div) {
      this.div.remove();
      this.div = null;
    }
    this.div = document.createElement('div')
    document.body.appendChild(this.div)
    const rightMenu = <ContextMenuPanel left={e.clientX + 'px'} top={e.clientY + 'px'}>
      <RightMenuItem onClick={() => this.newNote()} >新建笔记</RightMenuItem>
      <RightMenuItem onClick={() => this.newDirectory()} >新建文件夹</RightMenuItem>
      <Separator />
      <RightMenuItem onClick={() => this.rename(note)}>重命名</RightMenuItem>
      <RightMenuItem onClick={() => this.remove(note)} >删除</RightMenuItem>
      <Separator />
      <RightMenuItem >移动到</RightMenuItem>
    </ContextMenuPanel>;
    ReactDom.render(rightMenu, this.div);
    this.registryDestory();
  }

  render() {
    
    const items = this.state.notes.map((note, i) => {
      return <ListItem editable={note.editable} title={note.title} time={note.time} onBlur={(e) => this.chageTitle(e, note)} onContextMenu={(e) => this.show(e, note)} key={i} />
    });

    return (
      <div className="list-panel" onContextMenu={(e) => this.showListMenu(e)}>
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
    this.props.onContextMenu(e);
  }

  onBlur(e) {
    this.props.onBlur(e);
  }


  render(){
    return (
      <li onContextMenu={(e) => this.contextMenuHandler(e)} className={ListPanelStyle.noteItem + ' ' + (this.props.editable ? ListPanelStyle.edit : '')}>
        <div className={ListPanelStyle.content}>
          <Icon type="file"></Icon>
          {
            this.props.editable ? <input type="text" autoFocus onBlur={(e) => this.onBlur(e)} placeholder={this.props.title}/> : <span>{this.props.title}</span>
          }
          <time>{this.props.time}</time>
        </div>
      </li>
    );
  }
}

