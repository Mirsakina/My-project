import React, { useState } from 'react'
import { getSingleUser } from '../../services/user-service'

function SingleUser() {
  const {id} = useParams()
  const [user, setUser] = useState({})
  useEffect(()=>{
    getSingleUser(id)
    .thren(data=>setUser(data))
    .catch(err=>console.log(err))
  },[id])
  return (
    <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.address?.street}</p>
    <p>{user.address?.city}</p>
    <div className='flex gap-[10px] text-[#7331ec]'>
      <Link to={`/posts/${id}`}>Posts</Link>
      <Link to={`/todos/${id}`}>Todos</Link>
    </div>
    </div>
  )
}
export default SingleUser