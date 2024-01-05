const QuoteForm = (handleQuoteTextChange, handleQuoteAuthorChange, handleSubmit) => {
    const handleQuoteTextChange = (e) => {
        handleQuoteTextChange(e)
    };
    const handleQuoteAuthorChange = (e) => {
        handleQuoteAuthorChange(e)
    };
    const handleSubmit = (e) => {
        handleSubmit(e)
    };
    return (
        <div className="quote-form">
            <input type="text" placeholder="Quote text" onChange={(e) => handleQuoteTextChange(e)} />
            <input type="text" placeholder="Author name" onChange={handleQuoteAuthorChange} />
            <button onClick={(e) => handleSubmit(e)}>Add</button>
        </div>
    )
}
export default QuoteForm