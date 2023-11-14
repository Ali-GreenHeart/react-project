import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { postsActions } from '../store/slices/postsSlice'
import PostCard from '../components/PostCard'

const url = 'https://dummyjson.com/posts?limit=150'
const Posts = () => {
    const posts = useSelector((state) => state.posts.value)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch(postsActions.getPosts(data.posts))
        })
    }, [])


    return (
        <>
            <a href="/users">wanna see users ;)</a>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {
                    posts.map((post) => {
                        return (
                            <PostCard
                                key={post.id}
                                to={'/posts/' + post.id}
                                {...post}
                            >

                            </PostCard>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Posts
