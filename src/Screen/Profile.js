import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let params=useParams()
    console.log(params,'params')
  return (
    <div>{params.parentID}</div>
  )
}

export default Profile