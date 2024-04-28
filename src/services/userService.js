import axios from '../axios';
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-userss?id=${inputId}`);
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-userss', data)
}
const updateUserService = (data) => {
    console.log('check data from service', data)
    return axios.put('/api/edit-user', data)
}
const deleteUserService = (userId) => {
    console.log('check data from service', userId)
    // return axios.delete('/api/delete-user', { params: { id: userId } })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
export { handleLoginApi, getAllUsers, createNewUserService, updateUserService, deleteUserService }