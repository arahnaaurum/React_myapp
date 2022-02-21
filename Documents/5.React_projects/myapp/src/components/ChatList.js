import { useParams, Link } from 'react-router-dom';
import { List, ListItem} from '@mui/material';

export function ChatList(props) {

  const { id } = useParams();
  const {chats} = props;

    return <List>
            {Object.keys(chats).map((chatid, index) => (
              <ListItem key={index}>
                <Link className='link' to={`/chats/${chatid}`}>
                 <b style = {{ color: id === chatid ? "white":"grey" }}>
                 {chats[chatid].name}
                 </b>
                 </Link>
              </ListItem>
            ))}
      </List>
}