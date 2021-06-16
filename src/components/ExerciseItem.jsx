import React from 'react'
import {Link} from 'react-router-dom'

function ExerciseItem({exercise, deleteExercise}) {
    return (
            <tr>
                <td>{exercise.date.substring(0,10)}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.username}</td>
                <td>
                   <Link to={`/edit/${exercise._id}`}>
                       <button className="btn btn-sm btn-primary">Edit</button>
                    </Link> 
                </td>
                <td>
                   <button className="btn btn-sm btn-danger" onClick={() => deleteExercise(exercise._id)}>Delete</button>
                </td>
            </tr>
    )
}

export default ExerciseItem
