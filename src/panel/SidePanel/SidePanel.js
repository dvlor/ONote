import React from 'react';
import Icon from '../../components/Icon';

import SidePanelStyle from './SidePanel.module.css';

export default class SidePanel extends React.Component {
  render() {
    return (
      <div className="side-panel">
        <div className={SidePanelStyle.wraper}>
          <div className={SidePanelStyle.button}><Icon style={{fontSize: '12px', marginRight: '4px'}} type="plus"></Icon>新建</div>
          <ul className={SidePanelStyle.menus}>
            <li>
              <Icon type="folder-o"></Icon>我的
            </li>
            <li>
              <Icon type="recycle"></Icon>回收站
            </li>
            <li>
              <Icon type="cog"></Icon>设置
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

