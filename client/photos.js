import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
    return (
        <Gallery photos={this.props.photos} onClickPhoto={this.openLightbox}/>
    );
    }
}
