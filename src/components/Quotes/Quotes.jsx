import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainApi from "../../api/mainApi";
import Quote from "./Quote/Quote";
import './Quotes.css';

const Quotes = () => {
    const params = useParams()
    const [pageInfo, setPageInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const getPageInfo = async () => {
        setLoading(true)
        await mainApi.getQuote(params.pagename).then(data => {
            if(data) {
                const copy = []
                Object.keys(data).forEach(e => {
                    copy.push({'key': e, 'author': data[e].author, 'text': data[e].text})
                })
                return copy             
            }
            
        }).then(copy => {
            setPageInfo(copy)
        })
        setLoading(false)
    }

    useEffect(() => {
        getPageInfo()
    }, [params])

    const remove = async (key) => {
        setLoading(true)
        await mainApi.removeQuote(key)
        getPageInfo()
    }

    let display = []

    if (pageInfo.length) {
        display = <div>
            {pageInfo.map(el => {
            return <Quote
                id={el.key}
                key={el.key}
                text={el.text}
                author={el.author}
                remove={() => remove(el.key)}
            />
        })}
        </div>
    } else {
        display = <h1>There are no quotes for this category</h1>
    }

    let category = ''
    if (params.pagename.indexOf('_') < 0) {
        category = params.pagename
    } else if (params.pagename === 'famous_people') {
        category = 'Famous people'
    } else if (params.pagename === 'star_wars') {
        category = 'Star wars'
    }

    return (
        <>
            <div className="quotesDiv">
            <h3 className="quoteCategory">{category}</h3>
            {loading ? <h1>Loading...</h1> : display}
        </div>
        </>
    )
}

export default Quotes