import ListCourses from './components/list-courses';
import Header from "./components/header";
import { useFetch } from './hooks/useFetch';
import Loading from "./components/loading";
import Error from './components/error';
import ListCategories from './components/list-categories';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect, useRef } from "react";



function App() {

  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Ciudad')
  const [month, setMonth] = useState('Seleccionar Mes')
  const [category, setCategory] = useState('Default')
  const {courses, fail, loading} = useFetch()
  const  observedDiv = useRef();
  const [height, setHeight] = useState(800);

  useEffect(()=> {
    if (!observedDiv.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
     
      if(observedDiv.current.offsetHeight !== height) {

        setHeight(observedDiv.current.offsetHeight);
        // observedDiv.current.contentWindow.postMessage(height, origin);
          window.parent.postMessage(height, "*");

      }
    });
  
    resizeObserver.observe(observedDiv.current);

    return function cleanup() {
      resizeObserver.disconnect();
    }
  }, [observedDiv.current])


  console.log(height)
 
  return (

    <div ref={observedDiv}> 
    <div><Toaster /></div>
    <ListCategories setCategory={setCategory}/>
    <Header setSearch={setSearch} 
    courses={courses.data} 
    setMonth={setMonth}
    setCity={setCity}
    /> 
    
      {fail &&  <Error/> }
      {loading && <Loading /> }
      {!fail && !loading > 0 && <ListCourses search={search} courses={courses} month={month} city={city} category={category} /> } 
    </div>
  )
}

export default App
