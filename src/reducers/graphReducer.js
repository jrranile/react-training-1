const initialState = {
    id: 1
}

const GraphReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'prev':
            
            return { ...state, id: --state.id}

        case 'next':
        
            return { ...state, id: ++state.id}            
    
        default:
            return state
    }
}

export default GraphReducer