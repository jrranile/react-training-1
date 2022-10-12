export const next1 = () => async dispatch => {
  // API call


  dispatch({
      type: 'user/next',
      payload: []
  })
}

export const prev2 = () => async dispatch => {
  dispatch({
      type: 'user/prev',
      payload: []
  })
}

