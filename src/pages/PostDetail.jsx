import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { postActions } from '../store/slices/postSlice'

const baseurl = 'https://dummyjson.com/posts/'
const PostDetail = ({ }) => {
    const [user, setUser] = useState({})
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
        </div>
    )
}
export default PostDetail
