import React from 'react';

import FormControl from '../../components/FormControl/FormControl';
import Editor from '../../components/Editor/Editor';
import ContentPanelStyle from './ContentPanel.module.css';

export default class ContentPanel extends React.Component {
  render() {
    return (<div className="content-panel">
      <div className={ContentPanelStyle.top}>
        <input value="笔记1" />
        <FormControl style={{float:'right'}}></FormControl>
      </div>
      <div className={ContentPanelStyle.content}>
        <Editor></Editor>
      </div>
    </div>);
  }
}