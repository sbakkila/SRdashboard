export const reducer = (state=[], action) => {
  switch(action.type){
    case "RECEIVE_PHOTO":
      state.push(action.photo);
      return state;
    default:
      return state;
  }
}
