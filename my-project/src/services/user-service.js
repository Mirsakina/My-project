import { api } from "../api"

export const getAllUser = async() =>{
    const res = await api.get("/users")
    console.log(res.data);
    if(!res.data){
        throw new Error('No data')
    }
    return res.data
}
export const getSingleUser = async(id) =>{
    const res = await api.get(`/users/${id}`)
    console.log(res.data);
    if(!res.data){
        throw new Error('No data')
    }
    return res.data
}