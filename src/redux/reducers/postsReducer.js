const initialState = {
    list: {}
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'posts/get':
            return {...state, list: action.payload}
        case 'posts/single':
            return {...state, list: action.payload }
        default:
            return state;
    }

}

export default postsReducer