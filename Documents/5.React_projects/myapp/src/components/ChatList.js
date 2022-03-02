import { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, Dialog, TextField, Button } from '@mui/material';
import { addChat, deleteChat } from '../store/chats/actions'
import { Delete } from "@mui/icons-material";

export function ChatList(props) {
  const [visible, setVisible] = useState(false)
  const [chatName, setChatName] = useState('')

  const chats = useSelector(state => state.chats.chatList);
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleOpen = () => setVisible(true)

  const handleChange = (event) => setChatName(event.target.value)
  
  const onAddChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
    setVisible(false)
  }

  const onDeleteChat = (index) => {
    dispatch(deleteChat(index));
  }

    return (
      <>

      <List>
            {chats?.map((chat, index) => (
              <ListItem key={index}>
                <Link className='link' to={`/chats/${chat.id}`}>
                  <b style = {{ color: chat.id === chatId ? "white":"grey" }}>
                  {chat.name}
                  </b>
                  <Button onClick = {()=> onDeleteChat(index)}><Delete /></Button>
                 </Link>
              </ListItem>
            ))}
      </List>
      <Button onClick = {handleOpen}>Add Chat</Button>
      <Dialog open={visible} onClose={() => setVisible(false)}>
        <TextField value={chatName} onChange={handleChange} />
        <Button onClick = {onAddChat}>ADD</Button>
      </Dialog>
      </>
    );
}