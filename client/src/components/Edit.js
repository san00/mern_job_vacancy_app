import React from 'react'
import useForm from './useForm'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Edit(props) {

    const update = (e) => {
        e.preventDefault();

        const listing = {
            jobTitle: jobTitle,
            salary: salary,
            description: description
        }

        axios.put(`/api/items/${props.match.params.id}`, listing)
            .then(res => {
                console.log(res)
            })
    }

    const { handleChange, handleSubmit, values } = useForm(update)
    const { jobTitle, salary, description } = values

    return (
        <div className='content__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__header'>Edit vacancy</h2>
                <input className='form__input' name='jobTitle'
                    type='jobTitle'
                    id='job title'
                    placeholder='job title'
                    onChange={handleChange}
                    value={jobTitle}
                    required></input>
                <label className='form__label' htmlFor='job title'>Job title:</label>

                <input className='form__input' name='salary'
                    type='salary'
                    id='salary'
                    placeholder='salary'
                    onChange={handleChange}
                    value={salary}
                    required></input>
                <label className='form__label' htmlFor='salary'>Salary:</label>

                <input className='form__input' name='description'
                    type='description'
                    id='description'
                    placeholder='description'
                    onChange={handleChange}
                    value={description}
                    required></input>
                <label className='form__label form__label--description' htmlFor='description'>Description: </label>
                <div className='form__button'>
                    <button className='button' type='submit' onClick={(e) => update(e)}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Edit)
