const initialState = {
    id: 1
}

const GraphReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'graph/prev':

            return { ...state, id: --state.id}

        case 'graph/next':

            return { ...state, id: ++state.id}

        default:
            return state
    }
}

export default GraphReducer