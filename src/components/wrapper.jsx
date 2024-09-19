import styled from 'styled-components'

const WrapperStyled = styled.div`
    max-inline-size: 1240px;
    margin: auto;
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
