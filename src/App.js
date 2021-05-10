import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // {username:'Moahn', message:'Hi'},
    // {username:'Sowrab', message:'Ssup'},
  ])
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
    })
  }, [])
  
  useEffect(()=>{
    setUsername(prompt('Enter your username!'))
  }, [])
  
  const sendMessage = (event) => {
    event.preventDefault();

    if(input !== ''){
      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
    }
    
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Messenger-Clone</h1>
      <h2>Hello {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a massage...</InputLabel> */}
          <Input className="app__inputField" placeholder="Enter a message..." value={input} onChange={(event) => setInput(event.target.value)} />

          <IconButton
            className="app__iconButton"
            variant="contained" color="primary" type='submit' onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
      
      <FlipMove>
        {
          messages.map( ({message, id}) =>(
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
