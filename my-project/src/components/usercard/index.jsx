import React from 'react'

function UserCard({ id, name, username, email, website }) {
  return (
    <div className='shadow-xl p-[20px] rounded-[9px]'>
      <Link to={`/user/${id}`}>
      <h2>{name}</h2>
      </Link>
      <p className='my-[15px]'>
        <b>username:</b>
        {username}
      </p>
      <p className='border-t-orange-950 border-t-2'>email;{email}</p>
      <a href={`https:www.${website}`} target='_blank'>{website}</a>
    </div>
  )
}

export default UserCard