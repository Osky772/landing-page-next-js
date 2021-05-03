import React from 'react'
import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
    background: props.colored ? props.theme.colors.primary : '#ffffff',
    color: props.colored ? '#ffffff' : props.theme.colors.primary
}))`
    width: 180px;
    height: 72px;
    background: #FFFFFF;
    border-radius: 20px;
    color: ${props => props.color};
    background: ${props => props.background};
    border: none;
    font-size: ${props => props.theme.fontSizes.links};
    cursor: pointer;
`

type CTAButtonT = {
    colored?: boolean;
    children: string;
}

function CTAButton({ colored, children }: CTAButtonT) {
    return (
        <Button colored={colored}>
            { children }
        </Button>
    )
}

export default CTAButton
