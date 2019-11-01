import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import characters from './characters.json';

export default class Sidebar extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className="Sidebar">
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
        <Link>I'm a link</Link>
      </div>
    )
  }
}