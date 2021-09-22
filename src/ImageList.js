import React, { Component } from 'react'
import ImageItem from './ImageItem'
import images from './data'

export default class ImageList extends Component {
    render() {
        console.log(images, this.props.filteredList)
        return (
            <div className='creaturesContainer'>
         { (this.props.state.keyword === '0' && this.props.state.horns === 0) ?
           images.map(entry => {
            return <div>
                <ImageItem
                     title={entry.title}
                     url={entry.url}
                     description={entry.description}
                     horns={entry.horns}
                />
            </div> })
         :
         
         this.props.filteredList
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
        )
    }
}
