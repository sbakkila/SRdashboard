import merge from 'lodash.merge';

export const reducer = (state=[], action) => {
  var newState = [];
  state.forEach(obj=>{newState.push(merge({}, obj))})

  switch(action.type){
    case "RECEIVE_PHOTO":
      newState.push(action.photo);
      return newState;
    case "DROP_ALL_PHOTOS":
      newState = [];
      return newState;
    default:
      return newState;
  }
}
