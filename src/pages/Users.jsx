import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { usersActions } from '../store/slices/usersSlice'
import UserCard from '../components/UserCard'

const url = 'https://dummyjson.com/users?limit=100'
const Users = () => {
    const users = useSelector((state) => state.users.value)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            console.log(data)
            dispatch(usersActions.getUsers(data.users))
        })
    }, [])


    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {
                    users.map(({ id, firstName, lastName, company, gender, image }) => {
                        return (
                            <UserCard
                                // style={{ flexGrow: '1' }}
                                key={id}
                                image={image}
                                to={`/users/${id}`}
                                companyName={company.name}
                                firstName={firstName}
                                lastName={lastName}
                                gender={gender}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Users
