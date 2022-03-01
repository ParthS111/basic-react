import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let params=useParams()
  return (
    <div>{params.clientId}</div>
  )
}

export default Profile