import store from './store'
import { receivePhoto } from './actionCreators'

const socket = io.connect('http://localhost:3000')

socket.on('connect', function() {
})

socket.on('sendPhoto', function(fileName) {
  store.dispatch(receivePhoto(fileName))
})

export default socket;
