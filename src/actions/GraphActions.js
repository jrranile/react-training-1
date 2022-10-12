export const next = () => async dispatch => {
    dispatch({
        type: 'next',
        payload: []
    })
}

export const prev = () => async dispatch => {
    dispatch({
        type: 'prev',
        payload: []
    })
}