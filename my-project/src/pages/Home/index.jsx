import React from 'react'
import UserCard from '../../components/usercard'

function Home() {
    const[users, setUsers] = useState([])
    userEffect(()=>{
        getAllUser().then(data => setUsers(data)).catch(err=>console.log(err))
    },{})
  return (
    <div className='grid'>
        {
            users.map(user =><UserCard {...user} key={user.id}/>)
        }
    </div>
  )
}

export default Home