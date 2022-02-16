import './App.css';
import React, { useEffect, useState } from 'react';
import { AUTHORS, BOTANSWERS } from './constants/common';



function App(props) {
  const [messageList, setList] = useState([]);
  const [value, setValue] = useState('');
   
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const updateList = () => {
    if (value !== '') {
      setList([...messageList, {
        text: value,
        author: AUTHORS.me
      }]);
    }
    setValue ('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateList();
    }
  }

  useEffect(()=>{
    let timer
    let botanswer = BOTANSWERS[Math.floor(Math.random() * BOTANSWERS.length)]
    if (messageList.length>0 && messageList[messageList.length-1].author === AUTHORS.me){
      timer = setInterval(() => {
        setList([...messageList, {
          text: botanswer,
          author: AUTHORS.bot
        }]);
      }, 1500)
    }
    return () => {clearInterval(timer);
      }
  }, [messageList])
  
  return (
    <div className="App">
      <header className="App-header">
        Chat Bot
      </header>
        <h3 className="App-greating">Hello, {props.name}!</h3>
        <ul className='message_list'>
          {messageList.map((item) => (
            <li className='message_box'>
              <div className='message_text'>{item.text}</div>
              <div className='message_author'>{item.author}</div>
            </li>
          ))}
        </ul>
            <input className='message_field' type="text" name="author" value={value} onChange={handleValue} onKeyDown={handleKeyDown}/>
            <button className='message_button' type="button" onClick={updateList}>Send</button>
    </div>
  );
 }
 
export default App;
