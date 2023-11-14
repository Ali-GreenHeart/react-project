import { Link } from "react-router-dom"

const UserCard = ({ style = {}, to, firstName, lastName, companyName, gender, image }) => {
    return (
        <Link to={to} style={{
            textDecoration: 'none', border: '1px solid gray', borderRadius: 10, display: 'block', padding: 20,
            width: 300,
            color: 'black',
            ...style,
        }}>
            <img src={image} style={{ width: '100%', height: 150, objectFit: 'contain' }} alt="" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>{firstName} {lastName}</h4 >
                <h5>@{companyName}</h5 >
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{gender === 'male' ? '👴' : '👵'}</div>
                <button>add friends</button>
            </div>
        </Link >
    )
}
export default UserCard
