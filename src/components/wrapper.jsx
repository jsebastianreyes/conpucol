import styled from 'styled-components'

const WrapperStyled = styled.div`
  
  
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
