import styled from 'styled-components'
import Wrapper from './wrapper'
import Course from './course'


const ListCoursesStyled = styled.main`
    .gridResults{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(360px, 1fr));
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

    @media screen and (max-width: 762px) {
        .gridResults{
          grid-template-columns: repeat( auto-fill, minmax(300px, 1fr));
        }
    }

`

function ListCourses({search, courses, city, month, category}) {
    console.log(category)
    let listCourses = courses?.data

    if(search !== "" || city !== "Ciudad" || month !== "Seleccionar Mes" || category !== 'Default'){
        const data = listCourses?.filter(curso => {
          return curso.title.toLowerCase().includes(search) &&
          (city === 'Ciudad' || curso.city.data.name === city) &&
          (category === 'Default' || curso.course_type.data.name === category ) &&
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
