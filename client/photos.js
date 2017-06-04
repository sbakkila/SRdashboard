import React from 'react';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import PositionDisplay from './positionDisplay';

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
        selectedPhoto: this.props.photos[evt]
      });
      console.log('hopefully the info for the photo you clicked: ', this.props.photos[evt]);
    }

    render() {
      console.log('photos', this.props.photos)
    return (
        <div>
          <Gallery photos={this.props.photos} onClickPhoto={this.handleClick}/>
          <PositionDisplay CorrectPhoto={this.state.selectedPhoto} />
        </div>
    );
    }
}
