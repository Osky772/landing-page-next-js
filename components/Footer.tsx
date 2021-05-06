import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import MainContainer from './Container'
import Logo from './Logo'
import Link from './Link'

const FooterContainer = styled.footer`
    display: flex;
    align-items: flex-start;
    jusitfy-items: spece-between;
    flex: 0 0 100%;
    margin: 80px 0 60px 0;
`
export const FooterLinksContainer = styled.div`
    dispaly: flex;
    flex-direction: column;
    flex: 1;
`

function Footer() {
    return (
        <MainContainer>
            <FooterContainer>
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
            </FooterContainer>
        </MainContainer>
    )
}

export default Footer
