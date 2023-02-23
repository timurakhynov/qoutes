import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import mainApi from "../../api/mainApi";
import './SubmitForm.css';

const SubmitForm = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        author: '',
        category: 'star_wars',
        text: ''
    })

    const changeCategory = (value) => {
        setState(prevState => {
            return {
                ...prevState, 'category': value
            }
        })
    }

    const change = (e) => {
        setState(prevState => {
            return {
                ...prevState, [e.target.name]: e.target.value
            }
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        await mainApi.createQuote(state)
        e.target[0].value = ''
        e.target[1].value = ''
        setState(prevState => {
            return {
                ...prevState, 'author': '', 'text': ''
            }
        })
        navigate(-1)
    }

    return (
        <div className="submitForm">
            <select onChange={(e) => changeCategory(e.target.value)}>
                <option value={'star_wars'}>Star Wars</option>
                <option value={'famous_people'}>Famous people</option>
                <option value={'saying'}>Saying</option>
                <option value={'humour'}>Humour</option>
                <option value={'motivational'}>Motivational</option>
            </select>
            <form className="form" onSubmit={submit}>
                <label>Author:</label>
                <input value={state?.author} name={'author'} onChange={change}/> 
                <label>Quote text:</label>
                <textarea value={state?.text} name={'text'} onChange={change} className={'textArea'}/> 
                <button>Save</button>
            </form>
        </div>
        
    )
}

export default SubmitForm