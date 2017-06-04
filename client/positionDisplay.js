import React from 'react';

export default class Sample extends React.Component {
  constructor(props){
    super(props)
  }

  getPositionFromName(){
    var filename = this.props.CorrectPhoto.src;
    var fileNameArray = filename.split('_');
    var xPosition = fileNameArray[1];
    var yPosition = fileNameArray[2];
    return [xPosition, yPosition]
  }

  render(){
    console.log('props', this.props)

    return(
      this.props.CorrectPhoto? <div className="alert alert-success" role="alert">
          <strong>Success!</strong><p>{`Emergency found here: ${this.getPositionFromName()}`}</p>
      </div> : null)


  }
}
