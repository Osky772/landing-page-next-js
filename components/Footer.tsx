import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Link from './Link'

const Container = styled.footer`
    display: flex;
    align-items: flex-start;
    jusitfy-items: spece-between;
    flex: 0 0 100%;
    background-color: #fff;
`
export const FooterLinksContainer = styled.div`
    dispaly: flex;
    flex-direction: column;
    flex: 1;
`

function Footer() {
    return (
        <Container>
            <Logo />
            <FooterLinksContainer>
                <Link href="#">Company</Link>
                <Link href="#" dark>About us</Link>
                <Link href="#" dark>Jobs</Link>
                <Link href="#" dark>Press</Link>
                <Link href="#" dark>Blog</Link>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <Link href="#">Support</Link>
                <Link href="#" dark>Contact us</Link>
                <Link href="#" dark>Cookies</Link>
                <Link href="#" dark>Privacy &amp; Terms</Link>
                <Link href="#" dark>Sitemap</Link>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <Link href="#">Community</Link>
                <Link href="#" dark>Musicans</Link>
                <Link href="#" dark>Bands</Link>
                <Link href="#" dark>Forum</Link>
                <Link href="#" dark>Social Media</Link>
            </FooterLinksContainer>
        </Container>
    )
}

export default Footer
