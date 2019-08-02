import React, { Component } from 'react'
import Tab from './component/tab';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "name": "潘凯1",
          "tit": "大傻蛋"
        },
        {
          "name": "潘凯2",
          "tit": "二傻嘚"
        },
        {
          "name": "潘凯3",
          "tit": "小笨蛋"
        }
      ]
    }
  }
  render() {
    return (
      <>
          <Tab date={this.state.data}></Tab>
      </>
    )
  }
}

export default App
