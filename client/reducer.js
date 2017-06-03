
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

export const reducer = (state=PHOTO_SET, action) => {
  switch(action.type){
    case "RECEIVE_PHOTO":
      state.push(action.photo);
      return state;
    default:
      return state;
  }
}
