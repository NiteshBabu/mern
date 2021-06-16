import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import Navbar from './components/Navbar'
import ExerciseList from './components/ExerciseList'
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'
import CreateExercise from './components/CreateExercise'
import EditExercise from './components/EditExercise'

const TrackMe = () =>{

    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/users')
        .then( res => {
            if( res.data.length > 0){
                setUsers(res.data)
            }
        })
        .catch( err => console.error(err))
    }, [])
    
    return(
        <Router>
            <div className='container'>
                <Navbar />
                <Route path='/' exact component={ExerciseList}/>
                <Route path='/users' exact component={UserList} users={users}/>
                <Route path='/edit/:id' exact component={EditExercise}/>
                <Route path='/create' exact component={CreateExercise}/>
                <Route path='/users/new' exact component={CreateUser}/>
            </div>
        </Router>
    )
}

export default TrackMe