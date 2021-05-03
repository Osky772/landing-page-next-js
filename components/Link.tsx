import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import { FooterLinksContainer } from './Footer';

const MenuLink = styled.a.attrs(props => ({
    color: props.dark ? props.theme.colors.darkText : props.theme.colors.secondary
}))`
    list-style-type: none;
    margin-right: 55px;
    color: ${props => props.color};
    cursor: pointer;
    display: flex;
    align-items: center;

    ${FooterLinksContainer} &:first-child {
        margin-bottom: 40px;
    }
    ${FooterLinksContainer} & {
        margin-bottom: 15px;
    }
`

type MenuItemT = {
    children: string | Array<string | JSX.Element>;
    href: string;
    dark?: boolean;
}

function Link({ children, href, dark }: MenuItemT) {
    return (
        <NextLink href={href}><MenuLink dark={dark}>{ children }</MenuLink></NextLink>
    )
}

export default Link
