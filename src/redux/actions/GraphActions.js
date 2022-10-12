export const next = () => async dispatch => {
    // API call


    dispatch({
        type: 'graph/next',
        payload: []
    })
}

export const prev = () => async dispatch => {
    dispatch({
        type: 'graph/prev',
        payload: []
    })
}