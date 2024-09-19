import styled from 'styled-components'
import Wrapper from './wrapper'
import Course from './course'


const ListCoursesStyled = styled.div`
    .gridResults{
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(361px, 1fr));
        gap: 2rem;
    }
    

        font-family: "Roboto", sans-serif;
        margin: auto;

    .textNoResults{
        font-family: "Roboto", sans-serif;
        text-align: center;
        font-weight: 200;
        text-transform: uppercase;
        margin-top: 8rem;
    }

`

function ListCourses({search, courses, city, month}) {
       
    let listCourses = courses?.data

    if(search !== "" || city !== "Ciudad" || month !== "Seleccionar Mes"){
        const data = listCourses?.filter(curso => {
          console.log(new Date(curso.start_date).getMonth())
          return curso.title.toLowerCase().includes(search) &&
          (city === 'Ciudad' || curso.city.data.name === city) &&
          // (month === 'Seleccionar Mes' || curso.start_date === month)
          (month === 'Seleccionar Mes' || new Date(curso.start_date).getMonth() ===  new Date(month).getMonth())
      })
      listCourses = data
    }

    

    return (
        <Wrapper>
           <ListCoursesStyled>
            {listCourses.length > 0  ? <div className='gridResults'>{listCourses?.map(data => {
                    return <Course key={data.id} course={data}/>
                }) }</div> : <h1 className="textNoResults"><b>UPPPPS!</b> No tenemos resultados para tu búsqueda 😔</h1>}
            {}
           </ListCoursesStyled>
        </Wrapper>
       
    )
}

export default ListCourses
