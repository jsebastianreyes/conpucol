import styled from 'styled-components'
import { useState } from 'react'
import { getDate } from '../utils/utils'
import { formatPrice } from '../utils/utils'
import Form from './form'
import Category from './category'

const CourseStyled = styled.div`
     .img-curso{
        block-size: 250px;
        border-radius: .5rem;
        box-shadow: 1px 1px 5px #ccc;
        inline-size: 100%;
        object-fit: cover;
        object-position: center;
    }

   

    .titulo{
        font-weight: 400;
        color: #333333;
        font-size: .9rem;
        color: #333333;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif !important;

    }

    .description{
        font-weight: 300;
        font-size: .8rem;
        color: #333333;     
    }

    .description  div{
        text-align: left;
        margin-block-start: .5rem;
    }

    .detail{
        margin: .4rem 0;
        font-size: .85rem;
    }
    .precio, .payButton{
        border: 1px solid #273AA6;
        padding: .5rem;
        width: min-content;
        border-radius: 1.5rem;
        text-decoration: none;
        font-size: .8rem;
        color: #333333;  
        font-weight: 600;
    }

    .loadInfo{
        font-size: .8rem;
        color: #606062;
        cursor: pointer;
        margin-top: 1rem;
    }

    .infoExtra{
        font-size:.7rem;
        margin-block-end: 2rem;
    }

    .infoExtra p{
        margin: .4rem 0;
    }
`

function Course({course}) {
   
    const [infoVisible, setInfoVisible] = useState(false)

    return (
        <CourseStyled>
            <img className='img-curso' src={course.image} alt={course.title} height="250"  width="300"/>
           <Category  category={course.course_type.data.name}/>
           <h2 className='titulo'>{course.title}</h2>
           <p className='detail'><b>Fecha de Inicio: </b> {getDate(course.start_date)}</p>
           <p className='detail'><b>Horario:</b> {course.course_days ? course.course_days : '--'} </p>
           <p className='detail'><b>Duración:</b> {course.course_time ? course.course_time : '--'} </p>
           { infoVisible && 
           <div className='infoExtra'>
                <p className='description' dangerouslySetInnerHTML={{__html: course.description}}></p>
                <Form setInfoVisible={setInfoVisible}/>
                <a className='payButton' href={`https://intranet.conpucol.org/cursos/${course.id}`}>Realizar pago - {formatPrice(course.price)}</a>
          </div>
           }
           {infoVisible ? null : <p className='precio'>{formatPrice(course.price)}</p>}
           <p onClick={()=> setInfoVisible(!infoVisible)} className='loadInfo'>{infoVisible ? 'Menos información' : 'Más Información' }</p>
        </CourseStyled>
    )
}

export default Course
