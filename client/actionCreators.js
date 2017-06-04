export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DROP_ALL_PHOTOS = 'DROP_ALL_PHOTOS';

export const receivePhoto = (fileName)=>{
  return {
    type: RECEIVE_PHOTO,
    photo: {
      src: 'http://0.0.0.0:3000/' + fileName,
      srcset: [
        'http://0.0.0.0:3000/' + fileName + ' 1024w',
        'http://0.0.0.0:3000/' + fileName + ' 800w',
        'http://0.0.0.0:3000/' + fileName + ' 500w',
        'http://0.0.0.0:3000/' + fileName + ' 320w',
      ],
      sizes:[
        '(min-width: 480px) 50vw',
        '(min-width: 1024px) 33.3vw',
        '100vw'
      ],
      width: 681,
      height: 1024,
      alt: 'you should see ' + fileName + '!',
    }
  }
}

export const dropAllPhotos = ()=>{
  return {
    type: DROP_ALL_PHOTOS
  }
}
