import merge from 'lodash.merge';

const PHOTO_SET = [
  {
    src: 'https://images-na.ssl-images-amazon.com/images/I/61-DAJGy17L._SL1000_.jpg',
    srcset: [
      'https://images-na.ssl-images-amazon.com/images/I/61-DAJGy17L._SL1000_.jpg 1024w',
      'https://images-na.ssl-images-amazon.com/images/I/61-DAJGy17L._SL1000_.jpg 800w',
      'https://images-na.ssl-images-amazon.com/images/I/61-DAJGy17L._SL1000_.jpg 500w',
      'https://images-na.ssl-images-amazon.com/images/I/61-DAJGy17L._SL1000_.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Shipwreck_sis.png',
    srcset: [
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Shipwreck_sis.png 1024w',
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Shipwreck_sis.png 800w',
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Shipwreck_sis.png 500w',
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Shipwreck_sis.png 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
  }
];

export const reducer = (state=[], action) => {
  var newState = [];
  state.forEach(obj=>{newState.push(merge({}, obj))})

  switch(action.type){
    case "RECEIVE_PHOTO":
      newState.push(action.photo);
      return newState;
    case "DROP_ALL_PHOTOS":
      console.log('burn everything');
      newState = [];
      return newState;
    default:
      return newState;
  }
}
