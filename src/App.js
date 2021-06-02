
import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User/User';

function App() {
  const [users,setUsers] = useState([])
  const [team, setTeam] = useState([])
  const addFriend = (fullName) => {
    setTeam([...team, fullName])
  }

  useEffect(()=> {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  return (
    <div >
      <ul>
        {
          team.map((user,idx) => <li key = {idx}>{user}</li>)
        }
      </ul>
      <h1>Team Builder</h1>
      {
        users.map(user => <User addFriend = {addFriend} user={user} key = {user.phone}></User>)
      }
        
    </div>
  );
}

export default App;
