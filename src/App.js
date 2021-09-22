import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import ImageItem from './ImageItem.js';
import images from './data.js';
import Dropdown from './Dropdown.js'




export default class App extends Component {
  state = {keyword: ''}

  handleStuff = (e) => {
    this.setState({keyword: e.target.value })
}
  
  render() {
    
  return (
    <div className="App">
      <header>
              <h1>Title</h1>
              <Dropdown 
                handlingShit={this.handleStuff}
                arrOfOptions={[
                  'narwhal', 'rhino', 'unicorn'
                ]}
              />
      </header>
      <div className='creaturesContainer'>
         {images
         .filter(entry => entry.keyword === this.state.keyword)
         .map(entry => {
             return <div>
                 <ImageItem
                      title={entry.title}
                      url={entry.url}
                      description={entry.description}
                      horns={entry.horns}
                 />
             </div>
         })}
      </div>
    </div>
  );}
}
