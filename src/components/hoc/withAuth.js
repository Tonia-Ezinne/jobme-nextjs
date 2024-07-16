import React from 'react'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const withAuth = (WrappedComponent) => {
    //eslint-disable-next-line react/display-name
  return (props) =>{
    const router = useRouter()
    const [loading, setLoading] = useState (true);
    const [isAuhenticated, setisAuthenticated] = useState(false)

    useEffect(()=>{
        const token = Cookies.get('token');
        if(!token){
            router.push('/login')
        }else{
            setisAuthenticated(true)
        }
        setLoading(false)

    }, [router])
    if (loading){
        return <div>loading....</div>

    }
    return isAuhenticated ? <WrappedComponent {...props}/> : null;


  }

 
}

export default withAuth