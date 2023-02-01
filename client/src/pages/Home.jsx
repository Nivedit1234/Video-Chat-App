import React from 'react'
import { useSocket} from '../providers/Socket'
const Home = () => {
  const {socket}=useSocket();
  socket.emit('join-room',{emailId:'abc@gmail.com', roomId:'1'})
  return (
    <div className='home-container'>

    <div className='input-container'>
        
        <input type='email' placeholder='Enter your email'/> 
        <input type='text' placeholder='Enter your room code'/>
        <button>Enter room</button>
    </div>


    </div>
  )
}

export default Home