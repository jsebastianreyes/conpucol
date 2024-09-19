import ListCourses from './components/list-courses';
import Header from "./components/header";
import { useFetch } from './hooks/useFetch';
import Loading from "./components/loading";
import { useState } from "react";
import Error from './components/error';

function App() {

  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Ciudad')
  const [month, setMonth] = useState('Seleccionar Mes')
  const [category, setCategory] = useState('Default')
  const {courses, fail, loading} = useFetch()

 
  return (
    <> 
    <Header setSearch={setSearch} 
    courses={courses.data} 
    setMonth={setMonth}
    setCity={setCity}
    setCategory={setCategory}/> 
    
      {fail &&  <Error/> }
      {loading && <Loading /> }
      {!fail && !loading > 0 && <ListCourses search={search} courses={courses} month={month} city={city} /> }
    </>
  )
}

export default App
