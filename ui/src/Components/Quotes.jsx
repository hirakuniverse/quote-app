import React, { useState, useEffect } from "react"
import QuoteService from "../Services/Quotes"

const Quotes = () => {
    const [quoteText, setQuoteText] = useState("")
    const [quoteAuthor, setQuoteAuthor] = useState("")
    const [quotes, setQuotes] = useState([])
    const [updateQuoteText, setUpdateQuoteText] = useState("")
    const [updateQuoteAuthor, setUpdateQuoteAuthor] = useState("")

    const handleQuoteTextChange = (e) => {
        setQuoteText(e.target.value)
    }
    const handleQuoteAuthorChange = (e) => {
        setQuoteAuthor(e.target.value)
    }
    const handleUpdateQuoteTextChange = (e) => {
        setUpdateQuoteText(e.target.value)
    }
    const handleUpdateQuoteAuthorChange = (e) => {
        setUpdateQuoteAuthor(e.target.value)
    }
    const getQuotes = async () => {
        try {
            const result = await QuoteService.getQuotes()
            setQuotes(result.quotes)
        } catch (error) {
            setQuotes([])
            throw new Error(error)
        }
    }

    const handleAdd = async () => {
        try {
            const newQuote = {
                text: quoteText,
                author: quoteAuthor,
                isEditable: false
            }
            const result = await QuoteService.addQuote(newQuote)
            setQuotes([...quotes, result.quote])
            setQuoteText("")
            setQuoteAuthor("")
        } catch (error) {
            throw new Error(error)
        }
    }
    const handleEdit = (id) => {
        let tempQuotes = [...quotes];
        const existQuote = tempQuotes.find(item => item._id === id)
        if (existQuote) {
            const quote = { ...existQuote, isEditable: true }
            tempQuotes = tempQuotes.map(item => item._id === id ? quote : item);
            setUpdateQuoteText(existQuote.text)
            setUpdateQuoteAuthor(existQuote.author)
            setQuotes(tempQuotes)
        }
    }
    const handleUpdate = async (id) => {
        let tempQuotes = [...quotes];
        try {
            const updateQuote = {
                _id:id,
                text: updateQuoteText,
                author: updateQuoteAuthor,
                isEditable: false
            }
            await QuoteService.updateQuote(id, updateQuote)
            tempQuotes = tempQuotes.map(item => item._id === id ? updateQuote : item);
            setQuotes(tempQuotes)
            setUpdateQuoteText("")
            setUpdateQuoteAuthor("")
        } catch (error) {
            throw new Error(error)
        }
    }
    const handleDelete = async (id) => {
        const tempQuotes = [...quotes];
        try {
            await QuoteService.deleteQuote(id)
            const quotes = tempQuotes.filter(item => item._id !== id)
            setQuotes(quotes)
        } catch (error) {
            setQuotes(tempQuotes)
            throw new Error(error)
        }
    }
    useEffect(() => {
        getQuotes()
    }, [])
    return (
        <>
            <h1>Quote List</h1>
            <div className="quote-form">
                <input type="text" placeholder="Quote text" value={quoteText} onChange={handleQuoteTextChange} />
                <input type="text" placeholder="Author name" value={quoteAuthor} onChange={handleQuoteAuthorChange} />
                <button onClick={handleAdd}>Add</button>
            </div>
            {quotes && <ul className="quote-list">
                {quotes.map((item) => <li key={item._id} className="quote-item">
                    {!item.isEditable ? (<div className="quote-item-wrapper">"<span className="item-label">{item.text}</span>"-<span className="item-author">{item.author}</span><span className="item-actions"><button onClick={() => handleEdit(item._id)}>Edit</button><button onClick={() => handleDelete(item._id)}>Delete</button></span></div>) : (<div className="quote-form"><input type="text" value={updateQuoteText} onChange={handleUpdateQuoteTextChange} />
                        <input type="text" value={updateQuoteAuthor} onChange={handleUpdateQuoteAuthorChange} />
                        <button onClick={() => handleUpdate(item._id)}>Update</button></div>)}                    </li>)}
            </ul>
            }
        </>
    )
}
export default Quotes