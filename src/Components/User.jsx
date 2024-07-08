import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'

const User = () => {

  const params=useParams();
  const naviagtion=useNavigate();
  console.log(params.id);
  return (
    <div className='User'>User
    <button onClick={()=>{
      naviagtion("/about")
    }}>CLICK ME</button>
    </div>
  )
}

export default User

//todo useParams: Hook from react-router-dom to access URL parameters in your components.
//todo useNavigate: Hook from react-router-dom to navigate programmatically within your React application.