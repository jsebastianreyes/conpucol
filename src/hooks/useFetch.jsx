import { useState, useEffect } from 'react'

export function useFetch(){
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [fail, setFail] = useState(false)

    useEffect(()=>{
        fetch("https://intranet.conpucol.org/api/courses?active=1")
        .then(res => res.json())
        .then(data => setCourses(data) )
        .catch(error => setFail(true))
        .finally(()=> setLoading(false))
    },[])

    return {courses, fail, loading}

    
}