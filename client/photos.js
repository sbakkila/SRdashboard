import React from 'react';
import Gallery from 'react-photo-gallery';
import axios from 'axios';

export default class Sample extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        selectedPhoto: null
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
      console.log('event: ', evt)
      this.setState({
        selectedPhoto: evt
      });
      console.log('props', this.props)
      console.log('props.photos', this.props.photos)

      console.log('hopefully the info for the photo you clicked: ', this.props.photos[evt]);
      // axios.post('/imageClick', this.props[evt])
    }

    render() {
      console.log('photos', this.props.photos)
    return (

        <Gallery photos={this.props.photos} onClickPhoto={this.handleClick}/>
    );
    }
}
