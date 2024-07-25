import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>
      User : {userid}
    </div>
  )
}

export default User

// http://localhost:5173/user/101 isme se jo 101 hai ya koi name jo bhi pass hoga url me agar vaha se user : ke baad show karna hai to we will use 
//like that jaise yaha pe kiya hai hamne same like that