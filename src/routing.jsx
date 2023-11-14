import { Routes, Route } from 'react-router'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Posts from './pages/Posts'

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </>
    )
}
export default WebRouting
