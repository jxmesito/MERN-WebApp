import { usePostsContext } from '../hooks/usePostsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'

const PostDetails = ({ post }) => {

  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    const response = await fetch('/api/post.routes/' + post._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_POST', payload: json })
    }
  }

  return (
    <div className="post-details">
      <p>{post.postMessage}</p>
      <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
      {user && (
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      )}
        <input type="Text" placeholder='add a comment' />
    </div>
  )
}

export default PostDetails