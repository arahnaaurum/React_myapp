// import { TextField, Fab } from "@mui/material";
// import { Send } from "@mui/icons-material";
// import React, { useEffect, useState } from 'react';
// import { AUTHORS, BOTANSWERS, CHATLIST } from '../constants/common';

// export function ControlPanel(props) {
//   const { chats, setChats } = props;
//   const [value, setValue] = useState('');
//   const { id } = useParams()

//   const handleValue = (event) => {
//     setValue(event.target.value);
//   }

//   const updateList = () => {
//     if (value !== '') {
//       setChats([...chats[id].messages, {
//         text: value,
//         author: AUTHORS.me
//       }]);
//     }
//     setValue ('')
//   }

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       updateList();
//     }
//   }

//   useEffect(()=>{
//     let timer
//     let botanswer = BOTANSWERS[Math.floor(Math.random() * BOTANSWERS.length)]
//     if (messageList.length>0 && messageList[messageList.length-1].author === AUTHORS.me){
//       timer = setInterval(() => {
//         setList([...messageList, {
//           text: botanswer,
//           author: AUTHORS.bot
//         }]);
//       }, 1500)
//     }
//     return () => {clearInterval(timer);
//       }
//   }, [messageList])
  

//     return <div className = "message-input">
//     <TextField autoFocus
//       style={{ margin: "20px", backgroundColor: 'white' }}
//       id = "outlined-basic"
//       label = "Message"
//       variant = "outlined"
//       className='message_field' type="text" name="author" value={value} onChange={handleValue} onKeyDown={handleKeyDown}/>
//     <Fab
//       style={{  margin: "20px" }}
//       color = "primary" className='message_button' onClick={updateList}> 
//     <Send/>
//     </Fab>
//   </div>
//   }