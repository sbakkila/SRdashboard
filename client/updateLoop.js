import axios from 'axios';
import { receivePhoto, dropAllPhotos } from './actionCreators'
import store from './store'

export const loop = setInterval(()=>{
  axios.get('/photos')
  .then( (photoNames) => {
    store.dispatch(dropAllPhotos())
    photoNames.data.forEach( (photoName)=>{
      store.dispatch(receivePhoto(photoName))
    })
  })
  .catch(function (error) {
    console.log(error);
  })
}, 5000)
