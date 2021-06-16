import React, {useState, useEffect} from 'react'
import ExerciseItem from './ExerciseItem'
import axios from 'axios'

function ExerciseList(props) {

    const [exercises, setExercises] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:5000/exercises/`)
        .then(res => setExercises(res.data))
    }, [])

    const deleteExercise = id =>{
        console.log(id)
        axios.delete(`http://localhost:5000/exercises/delete/${id}`)
        .then(res => console.log(res.data), setExercises(exercises.filter(exercise =>exercise._id !== id )))
        .catch( err => console.error(err))
    }

    return (
        <div>
           <table className="table table-striped table-hover text-white">
               <thead className="table-head">
                   <tr>
                       <td>Date</td>
                       <td>Exercise</td>
                       <td>Duration</td>
                       <td>Username</td>
                   </tr>
               </thead>
               <tbody>
                   {exercises.map(exercise => <ExerciseItem exercise={exercise} deleteExercise={deleteExercise} key={exercise._id}/>)}
               </tbody>
           </table>
        </div>
    )
}

export default ExerciseList
