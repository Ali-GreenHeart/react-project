import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { postActions } from '../store/slices/postSlice'

const baseurl = 'https://dummyjson.com/posts/'
const PostDetail = ({ }) => {
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams()
    const { body, reactions, tags, title } = useSelector((state) => state.post.value)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(baseurl + id)
            .then(({ data }) => {
                dispatch(postActions.getPost(data))
                return data.userId
            })
            .then((userId) => {
                axios.get('https://dummyjson.com/users/' + userId).then(({ data: { firstName, image } }) => {
                    setUser({ firstName, image })
                })
            })
            .then(() => {
                axios.get(`https://dummyjson.com/comments?limit=340`).then(({ data }) => {
                    const postsComments = data.comments.filter(({ postId }) => postId == id)
                    setComments(postsComments)
                })
            })
    }, [id])

    return (
        <div>
            <Link style={{ position: 'fixed', border: '1px solid black', borderRadius: 5, right: 5, padding: 5 }} to="/posts">posts-a geri donnnn, ele bu saat bu an :)</Link>
            <h2>{title}</h2>
            <h2>Author: {user.firstName} <img src={user.image} style={{ borderRadius: "50%", width: 60, height: 60, objectFit: 'contain' }} alt="" /> </h2>
            <h3>#{tags?.join(' #')}</h3>
            <p>{body}</p>
            <button onClick={() => {
                dispatch(postActions.likeIt())
            }}>🧡 {reactions}</button>

            <h2>What people think about: </h2>
            {
                comments.map(({ id, body, user: { username } }) => {
                    return (
                        <div style={{ border: '1px solid gray', borderRadius: 5, padding: 5, margin: '5px 10' }} key={id}>
                            <h3 style={{ margin: '0 0 3px' }}>{username}</h3>
                            <p style={{ margin: 0 }}>{body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PostDetail
