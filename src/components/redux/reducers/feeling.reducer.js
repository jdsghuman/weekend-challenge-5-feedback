const feeling = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FEELING':
      return action.payload;
    case 'RESET_INFO':
      return [];
    default:
      return state;
  }
  
}

export default feeling;