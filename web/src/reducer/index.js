export default (state = 1, action) => {
    if(action.type === 'SETINTERVAL'){
        state=action.payload;
        return state;
    }

    else if(action.type === 'SETFAVOURITES'){
        state=action.payload;
        return state;
    }
    return 1;
}
  