import React from 'react';
import Icon from '../components/Icon';

export default class ListPanel extends React.Component {
  render() {
    return (
      <div className="list-panel">
        <div className="wraper" style={wraperStyle}>
          <input style={filterStyle} type="text"/>
          <ul className="note-list">
            <li>
              <Icon></Icon>
              <span>笔记1</span>
              <time>06-16</time>
            </li>
            <li>
              <span>笔记1</span>
              <time>06-16</time>
            </li>
            <li>
              <span>笔记1</span>
              <time>06-16</time>
            </li>
            <li>
              <span>笔记1</span>
              <time>06-16</time>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const wraperStyle = {
  width: '240px',
  margin: '0 auto',
  padding: '10px 0'
}

const filterStyle = {
  border: 'solid 1px #f1f1f1',
  lineHeight: '2.5em',
  fontSize: '14px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  padding: '0 .5em',
  marginBottom: '15px',
  color: '#999'
}