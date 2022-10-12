import { exampleApi } from "../../api"

export const FetchPosts = () => async dispatch => {
    
    const result = await exampleApi.get('/posts')

    let mutatedResult = {}

    result.data.forEach(element => {
        mutatedResult = {...mutatedResult, [element.id]:element}
        
    });
    dispatch({
        type: 'posts/get',
        payload: mutatedResult
    })
}

export const FetchSinglePosts = (id) => async dispatch => {
    
    const result = await exampleApi.get(`/posts/${id}`)

    dispatch({
        type: 'posts/single',
        payload: result.data
    })
}