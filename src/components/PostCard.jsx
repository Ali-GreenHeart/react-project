import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const baseurl = 'https://dummyjson.com/users/'
const PostCard = ({ style = {}, to, body, reactions, tags, title, userId }) => {

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    // useEffect(() => {
    //     axios.get(baseurl + userId).then(({ data: { firstName, eyeColor } }) => {
    //         setUser({ firstName, eyeColor })
    //     })
    // }, [])

    return (
        <Link to={to} style={{
            backgroundColor: user.eyeColor,
            textDecoration: 'none',
            border: '1px solid gray',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 20,
            width: 300,
            color: 'black',
            ...style,
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>{title}</h4 >
            </div>
            <h4 style={{ color: '#1c8f8f' }} >#{tags.join(' #')}</h4 >
            <p>{body}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('sakam')
                    }}
                >🧡{reactions}</button>
                <p
                    onClick={(e) => {
                        e.preventDefault()
                        navigate(`/users/${userId}`)
                    }}
                >go to author's profile</p>
            </div>
        </Link >
    )
}
export default PostCard
