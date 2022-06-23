import React from 'react';
import MoToDo from '../models/MoTodo';

const Login:React.FC = ()=>{


    const _login = ()=>{
        MoToDo._instance.update({
            userInfo:{
                fullName:'Harris'
            }
        })
    }
    
    return(
        <div>
            <a onClick={_login}>Login</a>
        </div>
    )
}

export default Login 