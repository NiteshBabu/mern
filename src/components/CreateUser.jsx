import React, {useState} from 'react'
import axios from 'axios'

export default function CreateUser() {
    const [username, setUsername] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        axios.post(`http://127.0.0.1:5000/users/new`,{username})
        .then(res => console.log(res.data))
        .catch( err => console.error(err))

        e.target.reset()
        window.location = '/'
    }

    return (
        <div className="col-md-6 text-white">
            <form className="form-group d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                <h1 className='text-center'>Create User</h1>
                <label>Username</label>
                <input 
                    className="form-control" 
                    type="text" 
                    onChange={e => setUsername(e.target.value)} 
                    required
                />
                <button className="btn btn-sm btn-success my-4">Submit</button>
            </form>
        </div>
    )
}
