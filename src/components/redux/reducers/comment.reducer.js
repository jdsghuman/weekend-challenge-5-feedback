const comment = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return action.payload;
    case 'RESET_INFO':
      return [];
    default:
      return state;
  }
}

export default comment;