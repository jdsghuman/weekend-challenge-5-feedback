const content = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CONTENT':
      return action.payload;
    case 'RESET_INFO':
      return [];
    default:
      return state;
  }
}

export default content;