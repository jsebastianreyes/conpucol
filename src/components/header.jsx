import styled from 'styled-components'
import { listOfMonths} from '../utils/utils'
import Wrapper from './wrapper'

const HeaderStyled = styled.div`
 display: flex;
 gap: 1rem;
 flex-wrap: wrap;
 justify-content: center;
 padding-block-end: 2rem;
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
 
 .containerSearch{
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
 }

 .containerSearch svg{
    position: absolute;
    inset-inline-start: 12px;
    
 }

 .search{
    padding:.5rem 2.5rem;
    inline-size: 100%;
    
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
@media screen and (max-width: 700px){
    &{
        flex-direction: column;
        padding-block: 1.5rem;
        margin-block: 0;

    }
    }
`

function Header({setSearch, courses, setMonth, setCity, setCategory}) {
  
    const ciudades = [...new Set(courses?.map(curso => curso?.city.data.name).filter(city => city !== 'Colombia'))]
    const onChangeSearch = (e)=> {
        setSearch(e.target.value.toLowerCase())
    }

    const meses = listOfMonths(courses)

   

    return (
        <Wrapper>
            <HeaderStyled> 
                <div className="containerSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="19" height="19">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input className='search' 
                    type="search" 
                    placeholder='Buscar' 
                    onChange={onChangeSearch}
                    />
                </div>
                
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