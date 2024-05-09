import React, { useContext } from 'react'
import { AuthContext } from '../firebase/AuthContext/AuthProviders'

const useAuthHook = () => {
const auth=useContext(AuthContext)
return auth;
    
}

export default useAuthHook
