import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'

const PostForm = () => {

    const { dispatch } = usePostsContext()

    const [postMessage, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [emptyField, setEmptyField] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = { postMessage }

        const response = await fetch('/api/post.routes', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyField(json.emptyField)
        }
        if (response.ok) {
            setEmptyField([])
            setError(null)
            setMessage('')
            dispatch({type: 'CREATE_POST', payload: json})
        }

    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Post your mind: </h3>

            <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={postMessage}
                className={emptyField.includes('postMessage') ? 'error' : ''}
            />

            <button>Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PostForm