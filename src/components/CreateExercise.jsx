import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function CreateExercise() {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())

    useEffect(() =>{
        axios.get('http://localhost:5000/users')
        .then( res => {
            if( res.data.length > 0){
                console.log(res.data.length)
                console.log(res.data)
                setUsers(res.data, () => setUsername(users[0].username))
            }
        })
        .catch( err => console.error(err))
    }, [])
    
    const handleSubmit = e =>{
        e.preventDefault()
        const exercise = {username, description, duration, date}
        axios.post('http://localhost:5000/exercises/new', exercise)
        .then(res => console.log(res.data))
        .catch( err => console.error(err))

        // window.location = '/'
    }

    return (
       <form 
            className="form-group col-md-6 text-white d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
        >
           <label className="control-label"> Username :</label>
            <select 
                className="form-control"
                name="username"
                onChange={ e => setUsername(e.target.value)}
                required
            >
               {users.map(user => <option key={user._id}>{user.username}</option>)}
            </select>
           <label className="control-label">Description :</label>
           <input 
                className="form-control"
                type="text"
                name="description"
                value={description}
                onChange={ e => setDescription(e.target.value)}
                required
                />
           <label className="control-label">Duration (in min)</label>
           <input 
                className="form-control"
                type="number"
                name="duration"
                value={duration}
                onChange={ e => setDuration(e.target.value)}
                required
                />
           <label className="control-label">Date</label>
           <input 
                className="form-control"
                type="date"
                name="date"
                value={date}
                onChange={ e => setDate(e.target.value)}
                required
            />
            <button className="btn btn-sm btn-success my-5">Submit</button>
       </form>
    )
}
