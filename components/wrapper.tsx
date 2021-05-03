import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 8px;
`

function Wrapper({ children }) {
    return (
        <StyledWrapper>
            { children }
        </StyledWrapper>
    )
}

export default Wrapper
