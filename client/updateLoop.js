import axios from 'axios';
import { receivePhoto, dropAllPhotos } from './actionCreators'
import store from './store'

export const loop = setInterval(()=>{
  console.log('set interval is firing')
  axios.get('/photos')
  .then( (photoNames) => {
    store.dispatch(dropAllPhotos())
    // console.log('photoNames: ', photoNames)
    photoNames.data.forEach( (photoName)=>{
      store.dispatch(receivePhoto(photoName))
    })
  })
  .catch(function (error) {
    console.log(error);
  })
}, 5000)
