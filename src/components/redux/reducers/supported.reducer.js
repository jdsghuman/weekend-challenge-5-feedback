const supported = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SUPPORTED':
      return action.payload;
    case 'RESET_INFO':
      return [];
    default:
      return state;
  }
}

export default supported;