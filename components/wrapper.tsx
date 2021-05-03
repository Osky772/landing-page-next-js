import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 8px;
    max-width: ${props => props.theme.sizes.wrapper};
    margin: 0 auto;
`

function Wrapper({ children }) {
    return (
        <StyledWrapper>
            { children }
        </StyledWrapper>
    )
}

export default Wrapper
