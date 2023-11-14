import { Routes, Route } from 'react-router'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </>
    )
}
export default WebRouting
