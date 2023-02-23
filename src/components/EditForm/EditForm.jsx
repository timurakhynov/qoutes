import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import mainApi from "../../api/mainApi";
import './EditForm.css';

const EditForm = (props) => {
    const navigate = useNavigate()
    const [state, setState] = useState()
    const params = useParams(null)
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)


    const getInfo = async () => {
        setLoading(true)
        await mainApi.getQuote('all').then(data => {
            setState(data[params.quoteId])
            setValue(data[params.quoteId].category)  
        })
        setLoading(false)
    } 

    useEffect(() => {
        getInfo()
    }, [])

    const changeCategory = (value) => {
        setValue(value)
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

    const cancel = () => {
        navigate(-1)
    }

    const submit = async (e) => {
        e.preventDefault()
        await mainApi.changeQuote(params.quoteId, state)
        e.target[0].value = ''
        e.target[1].value = ''
        navigate(-1)
    }

    return (
        <div className="EditForm">
            {loading? <h1>Loading...</h1> :
            <>
                <select value={value} onChange={(e) => changeCategory(e.target.value)}>
                    <option value={'star_wars'}>Star Wars</option>
                    <option value={'famous_people'}>Famous people</option>
                    <option value={'saying'}>Saying</option>
                    <option value={'humour'}>Humour</option>
                    <option value={'motivational'}>Motivational</option>
                </select>
                <form className="EditForm_form" onSubmit={submit}>
                    <label>Author:</label>
                    <input value={state?.author} name={'author'} onChange={change}/> 
                    <label>Quote text:</label>
                    <textarea value={state?.text} name={'text'} onChange={change} className={'EditForm_textArea'}/> 
                    <button>Save</button>
                </form>
                <button onClick={cancel} className='cancelButton'>X</button>
            </>
        }
        </div>
        
    )
}

export default EditForm