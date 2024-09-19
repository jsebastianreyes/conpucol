import styled from 'styled-components'
import { listOfMonths} from '../utils/utils'
import Wrapper from './wrapper'

const HeaderStyled = styled.div`
 display: flex;
 gap: 1rem;
 flex-wrap: wrap;
 justify-content: center;
 padding: 2rem 0;
 font-family: "Roboto", sans-serif;
 margin: auto;
 margin-block: 3rem;

 .search, .select{

    font-size: .85rem;
    color: #999999;
    outline: 0;
    border-radius: .5rem;
    border-color: #999999;
    border: 0;
    border: 1px solid  #999999;
    cursor: pointer;
   

 }
 .search{
    padding:.5rem 2.5rem;
    flex: 1;
 }

 .search::placeholder{
    color: #999999;
 }

 .select{
    padding:.5rem 1.5rem;
 }

 select::-ms-expand {
    display: none;
}
`

function Header({setSearch, courses, setMonth, setCity, setCategory}) {
  
    const ciudades = [...new Set(courses?.map(curso => curso?.city.data.name).filter(city => city !== 'Colombia'))]
    const onChangeSearch = (e)=> {
        setSearch(e.target.value.toLowerCase())
    }

    const meses = listOfMonths(courses)

    console.log(courses)

    return (
        <Wrapper>
             {courses?.map(course =>  {
                console.log(course.course_type.data.name)
                })}
            <HeaderStyled> 
                <input className='search' 
                type="search" 
                placeholder='Buscar' 
                onChange={onChangeSearch}
                />
                <select className='select' name="" id="" onChange={(e)=> setCity(e.target.value) }>
                    <option value="Ciudad">Ciudad</option>
                    {ciudades?.map(ciudad => {
                    return( <option  key={ciudad} value={ciudad}>{ciudad}</option> ) 
                    })}
                    {/* <option value="all">Seleccionar Ciudad</option>
                    <option value="ibague">Ibagué</option> */}
                </select>
                
                <select className='select' name="" id="" onChange={(e)=> setMonth(e.target.value) }>
                    <option value="Seleccionar Mes">Seleccionar Mes</option>
                    {meses?.map((mes, index) => {
                    return( <option  key={index} value={mes.date}>{mes.month}</option> ) 
                    })}
                </select>
        </HeaderStyled>
        </Wrapper>
      
    )
}

export default Header