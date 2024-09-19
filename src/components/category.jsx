import styled from 'styled-components'

const CategoryStyled = styled.p`
        font-weight: 400;
        font-size: 1rem;
        color: #333333;
        width: fit-content;
        padding: .4rem 1rem;
        border-radius: 2rem;
`

function Category({category}) {
    let color 
    switch(category){
        case 'Bienestar':
             color = "#FFCB00"
            break
        case 'Eventos':
            color = "#F3D17C"
            break
        case 'Talleres':
            color = "#CCDCEB"
            break
        default:
            color = "#f34949"
                
    }

    return (
        <CategoryStyled style={{backgroundColor: color}}>
            {category} 
        </CategoryStyled>
    )
}

export default Category
