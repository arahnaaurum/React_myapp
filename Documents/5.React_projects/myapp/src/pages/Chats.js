import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { INITIALCHATS } from '../constants/common';
import FaceIcon from '@mui/icons-material/Face';
import AdbIcon from '@mui/icons-material/Adb';
import { Nopage } from './Nopage';
import { ChatList } from '../components/ChatList';
import { ControlPanel } from '../components/ControlPanel';


export function Chats() {
    const [chats, setChats] = useState(INITIALCHATS)
    const { id } = useParams()

    if (!chats[id]) {
      return <Nopage/>
    }
    
    return (
      <div className="chat_container">
        <ChatList chats={chats} />

        <ul className='message_list'>
          {chats[id].messages?.map((item, index) => (
            <li className='message_box' key={index}>
              <div className='message_text'>{item.text}</div>
              <div className='message_author'>
                {item.author === "me"? <FaceIcon color = "secondary" /> : <AdbIcon color = "secondary" />}
              </div>
            </li>
          ))}
        </ul>

        {/* <ControlPanel chats={chats} setChats={(chats) => setChats(chats)}/> */}
      </div>
    )
}