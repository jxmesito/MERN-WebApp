// Home page should have 3 tabs Home...Forum...Login. 
// After logging in have 3 tabs Home...Forum...Profile.

import { useEffect } from "react"
import { usePostsContext } from "../hooks/usePostsContext"

// components
import PostDetails from '../components/postDetails'
import PostForm from "../components/postForm"

const Home = () => {

  const { posts, dispatch } = usePostsContext()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post.routes')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_POSTS', payload: json })
      }
    }

    fetchPosts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="posts">
        {posts && posts.map(post => (
          <PostDetails key={post._id} post={post} />
        ))}
      </div>
      <PostForm />
    </div>
  )
}

export default Home