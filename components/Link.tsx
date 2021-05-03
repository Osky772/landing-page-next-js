import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

const MenuLink = styled.a`
    list-style-type: none;
    margin-right: 55px;
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
    display: flex;
    align-items: center;
`

type MenuItemT = {
    children: string | Array<string | JSX.Element>;
    href: string;
}

function Link({ children, href }: MenuItemT) {
    return (
        <NextLink href={href}><MenuLink>{ children }</MenuLink></NextLink>
    )
}

export default Link
