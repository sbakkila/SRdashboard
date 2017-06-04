import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      console.log('photos', this.props.photos)
    return (
        <Gallery photos={this.props.photos} onClickPhoto={this.openLightbox}/>
    );
    }
}
