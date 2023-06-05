import {useState} from 'react'
import axios from 'axios'

const useUserCrud = () => {

    const [users, setUsers] = useState();

    const url = "https://proyect2-nodejs.onrender.com/api/v1"

    //GET
    const getAllUsers = () => {
        axios.get(`${url}/users`)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }

    //POST 
    const createNewUser = data => {
        axios.post(`${url}/users`, data)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }

    //DELETE
    const deleteUserById = id => {
        const urlDelete = `${url}/users/${id}`

        axios.delete(urlDelete)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateUserById = (id, data) => {
        const urlUpdate = `${url}/users/${id}`

        axios.patch(urlUpdate, data)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }
    

    return {users ,getAllUsers, createNewUser, deleteUserById, updateUserById}
}

export default useUserCrud;