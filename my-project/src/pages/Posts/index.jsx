import React, { useEffect, useState } from 'react'
import { getUserPosts } from '../../services/posts-services'

function Posts() {
  const { id } = useParams()
  const[posts, setPosts] = useState([])
  useEffect(() => {
    getUserPosts(id)
    .then(data =>setPosts(data))
    .catch(err=>console.log(err))
  }, [id])
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.id}{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts