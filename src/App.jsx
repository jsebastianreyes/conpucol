import ListCourses from './components/list-courses';
import Header from "./components/header";
import { useFetch } from './hooks/useFetch';
import Loading from "./components/loading";
import Error from './components/error';
import ListCategories from './components/list-categories';
import { Toaster } from 'react-hot-toast';
import { useState, useRef } from "react";
import { UseIframe } from './hooks/UseIframe';



function App() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Ciudad')
  const [month, setMonth] = useState('Seleccionar Mes')
  const [category, setCategory] = useState('Default')
  const {courses, fail, loading} = useFetch()
  const  observedDiv = useRef();
  const { height } = UseIframe(observedDiv)

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
