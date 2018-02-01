import React from 'react';

export function fetchData(item){
    const URL = "https://jsonplaceholder.typicode.com/"+item;
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}
export default function fetchDataWithRedux(item, action){
    const { dataRequest,dataSuccess,dataError } = action;
    return (dispatch) => {
        dispatch(dataRequest());
        return fetchData(item).then(([response, json]) =>{
            if(response.status === 200){
                dispatch(dataSuccess(json))
            }
            else{
                dispatch(dataError())
            }
        })
    }
}
