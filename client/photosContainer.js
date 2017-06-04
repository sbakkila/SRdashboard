import photos from './photos';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    photos: state
  };
};

const PhotosContainer = connect(mapStateToProps)(photos);

export default PhotosContainer;
