import axios from 'axios';
import receivePhoto from './actionCreators'
import store from './store'

setInterval(()=>{
  axios.get('/photos')
  .then( (photos) => {
    // if
    // photos.forEach( (photo)=>{
    //   receivePhoto(photo)
    // })
  })
  .catch(err)
}, 3000)
