import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 180px;
    height: 72px;
    background: #FFFFFF;
    border-radius: 20px;
    color: ${props => props.theme.colors.primary};
    border: none;
    font-size: ${props => props.theme.fontSizes.links};
    cursor: pointer;
`

function CTAButton() {
    return (
        <Button>
            Get Started
        </Button>
    )
}

export default CTAButton
