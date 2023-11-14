import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { userActions } from '../store/slices/userSlice'

const baseurl = 'https://dummyjson.com/users/'
const UserDetail = ({ }) => {
    const { id } = useParams()
    const { firstName, lastName, phone, email, university, image, eyeColor } = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(baseurl + id).then(({ data }) => {
            console.log(data)
            dispatch(userActions.getUser(data))
        })
    }, [id])

    return (
        <div>
            <Link style={{ position: 'fixed', border: '1px solid black', borderRadius: 5, right: 5, padding: 5 }} to="/users">geri donnnn, ele bu saat bu an :)</Link>
            <img style={{ width: 200, height: 200, borderRadius: "50%", border: '10px solid ' + eyeColor }} src={image} alt="" />
            <h2>Heyyy, I'm {firstName} {lastName}. I've studied at {university}</h2>
            <h3>Contact me: 📞 {phone}</h3>
            <h3>Write me: 📩 {email}</h3>

        </div>
    )
}
export default UserDetail
