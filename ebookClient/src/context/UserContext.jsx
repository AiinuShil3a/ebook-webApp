import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})
const AuthContextProvider = ({children}) => {
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [user , setUser] = useState(null)
    useEffect(() => {
        const checkAuth = async () => {
          try {
            const token = document.cookie
              .split(';')
              .find(cookie => cookie.trim().startsWith("token="))
              ?.split('=')[1];
    
            if (token) {
              const response = await axios.get("http://localhost:3000/verifyToken", {
                headers: { Authorization: `Bearer ${token}` },
              });
              const userData = response.data;
              setUser(userData);
             
            }
        
          } catch (error) {
            console.log('Authentication Check failed: ', error);
          }
        };
    
        checkAuth();
      }, []);
const login = async (username , password) => {
    try {
        const response = await axios.post("http://localhost:3000/users/login", {username , password})
        //   const response = await axios.post("http://localhost:3000/jwt")
                     
        const {token , ...userData} = response.data
        setIsAuthenticated(true)
        setUser(userData)
        document.cookie = `token=${token}; path=/`
        console.log(token);
        console.log(userData);
    } catch (error) {
        console.log("login failed" , error);
    }
}
const register = async (username , password , confirmPassword) => {
    try {
       
        const response = await axios.post("http://localhost:3000/users/register", {username , password})
        const {token , ...userData} = response.data
        setIsAuthenticated(true)
        setUser(userData)
        document.cookie = `token=${token}; path=/`
    } catch (error) {
        if (error.response.status === 400) {
            alert("username already use!")
        }
        console.log("Register failed" , error);

    }
}
const logout = () => {
    setIsAuthenticated(false);
    setUser(null)
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
}
  return (
    <AuthContext.Provider value = {{login , isAuthenticated , user ,register ,logout}}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider