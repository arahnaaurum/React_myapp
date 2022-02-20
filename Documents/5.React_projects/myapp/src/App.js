import './App.css';
import React, { useEffect, useState } from 'react';
import { AUTHORS, BOTANSWERS, CHATLIST } from './constants/common';
import { TextField, Fab, List, ListItem, ListItemText } from "@mui/material";
import { Send } from "@mui/icons-material";
import FaceIcon from '@mui/icons-material/Face';
import AdbIcon from '@mui/icons-material/Adb';

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
        <div className="chat_container">

          <List sx={{ width: 100, borderRadius: 10, bgcolor: 'background.paper' }}>
            {CHATLIST.map((value) => (
              <ListItem key={value.id}>
                <ListItemText primary={`${value.name}`} />
              </ListItem>
            ))}
          </List>

        <ul className='message_list'>
          {messageList.map((item, index) => (
            <li className='message_box' key={index}>
              <div className='message_text'>{item.text}</div>
              <div className='message_author'>
                {item.author === "me"? <FaceIcon color = "secondary" /> : <AdbIcon color = "secondary" />}
              </div>
            </li>
          ))}
        </ul>
        </div>

        <div className = "message-input">
          <TextField autoFocus
            style={{ margin: "20px", backgroundColor: 'white' }}
            id = "outlined-basic"
            label = "Message"
            variant = "outlined"
            className='message_field' type="text" name="author" value={value} onChange={handleValue} onKeyDown={handleKeyDown}/>
          <Fab
            style={{  margin: "20px" }}
            color = "primary" className='message_button' onClick={updateList}> 
          <Send/>
          </Fab>
        </div>
    </div>
  );
 }
 
export default App;
