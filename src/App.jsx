import ListCourses from './components/list-courses';
import Header from "./components/header";
import { useFetch } from './hooks/useFetch';
import Loading from "./components/loading";
import Error from './components/error';
import ListCategories from './components/list-categories';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";



function App() {

  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Ciudad')
  const [month, setMonth] = useState('Seleccionar Mes')
  const [category, setCategory] = useState('Default')
  const {courses, fail, loading} = useFetch()

  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      window.parent.postMessage(windowSize, "*");
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);


 
  return (

    <> 
    <div><Toaster /></div>
    {console.log(windowSize)}
    <ListCategories setCategory={setCategory}/>
    <Header setSearch={setSearch} 
    courses={courses.data} 
    setMonth={setMonth}
    setCity={setCity}
    /> 
    
      {fail &&  <Error/> }
      {loading && <Loading /> }
      {!fail && !loading > 0 && <ListCourses search={search} courses={courses} month={month} city={city} category={category} /> } 
    </>
  )
}

export default App
