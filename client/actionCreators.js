export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhoto = (fileName)=>{
  return {
    type: RECEIVE_PHOTO,
    photo: {
      src: fileName,
      srcset: [
        fileName + ' 1024w',
        fileName + ' 800w',
        fileName + ' 500w',
        fileName + ' 320w',
      ],
      sizes:[
        '(min-width: 480px) 50vw',
        '(min-width: 1024px) 33.3vw',
        '100vw'
      ],
      width: 681,
      height: 1024,
      alt: 'oops I should be a beautiful photo',
    }
  }
}
