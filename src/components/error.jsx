import styled from 'styled-components'
import Wrapper from './wrapper'
const ErrorStyled = styled.div`
    h1{
        font-family: "Roboto", sans-serif;
        text-align: center;
        font-weight: 200;
        text-transform: uppercase;
        margin-top: 8rem;
        font-size: 1.5rem;
    }

`

function Error() {
    return (
        <Wrapper>
             <ErrorStyled>
                <h1>Tenemos problemas encontrando los cursos, regresa en un rato</h1>
            </ErrorStyled>
        </Wrapper>
       
    )
}

export default Error
