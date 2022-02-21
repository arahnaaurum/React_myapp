import { ChatList } from '../components/ChatList';
import { INITIALCHATS } from '../constants/common';

export function Nopage(){
    return <div className='nopage'>
        Please select the chat:
        
        <ChatList chats={INITIALCHATS} />
        
        </div>
}
