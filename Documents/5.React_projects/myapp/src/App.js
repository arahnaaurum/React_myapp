import './App.css';
import Message from './Message';

function App(props) {
  const msg = "Это сообщение передается в дочерний элемент. Ему заданы инлайн-стили"
  return (
    <div className="App">
      <header className="App-header">
        My First React App
      </header>
        <h3 className="App-greating">Hello, {props.name}!</h3>
        <Message message = {msg} />
      
    </div>
  );
 }
 
export default App;
