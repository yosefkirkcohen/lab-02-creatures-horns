import React, { Component } from 'react'
import images from './data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (<div className='creaturesContainer'>
           {images.map(entry => {
               return <div>
                   <ImageItem
                        title={entry.title}
                        url={entry.url}
                        description={entry.description}
                        horns={entry.horns}
                   />
               </div>
           })}
        </div>)
    }
}
