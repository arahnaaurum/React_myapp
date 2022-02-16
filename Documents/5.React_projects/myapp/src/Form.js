function Form (props) {
    return (
        <div>
            <input type="text" name="author" value={props.value} onChange={props.handleChange} />
            <button type="button" onClick={props.handleClick}>Send</button>
        </div>
      )
    }

    export default Form;