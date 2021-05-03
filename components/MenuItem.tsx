import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const MenuLink = styled.a`
    list-style-type: none;
    margin-right: 55px;
    color: ${props => props.theme.colors.links.primary};
    cursor: pointer;
`

type MenuItemT = {
    children: string | Array<string | JSX.Element>;
    href: string;
}

function MenuItem({ children, href }: MenuItemT) {
    return (
        <Link href={href}><MenuLink>{ children }</MenuLink></Link>
    )
}

export default MenuItem
