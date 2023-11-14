import { Routes, Route } from 'react-router'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
        </>
    )
}
export default WebRouting
