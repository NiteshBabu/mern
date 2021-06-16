import React from 'react'

function UserList(props) {
    return (
        <div>
            {props.users.map(user => <p>{user.username}</p>)}
        </div>
    )
}

export default UserList
