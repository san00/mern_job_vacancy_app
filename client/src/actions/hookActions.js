import axios from 'axios'

export const mockAxiosCall = async (setVacancy) => {
    const response = await axios.get('/api/items')
    setVacancy(response.data)
}

export const mockDeleteAxiosCall = async (setRemove) => {
    const response = await axios.delete('/api/items/:id')
    setRemove(response.data)
}

export const mockEditAxiosCall = async (setValues) => {
    const response = await axios.put('/api/items/:id')
    setValues(response.data)
}

export const mockCreateAxiosCall = async (setValues) => {
    const response = await axios.post('/api/items')
    setValues(response.data)
}

// default export for mocking convenience
export default {
    mockAxiosCall, mockDeleteAxiosCall, mockEditAxiosCall
}