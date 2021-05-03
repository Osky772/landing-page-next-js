import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Logo from './Logo'
import Link from './Link'
import CTAButton from './CTAButton'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 15px 0;
    max-width: ${props => props.theme.sizes.header};
    `
const LeftSide = styled.div`
    display: flex;
    align-items: center;
`
const RightSide = styled.div``

const HeaderMenu = styled.ul`
    display: flex;
`

function Header() {
    return (
        <HeaderContainer>

            <LeftSide>

                <Logo />

                <nav>
                    <HeaderMenu>
                        <Link href="#">Features</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Library</Link>
                        <Link href="#">
                            Explore
                            <Image
                                src="/arrow-stroke.svg"
                                width="24"
                                height="8"
                            />
                        </Link>
                    </HeaderMenu>
                </nav>

            </LeftSide>

            <RightSide>
                <CTAButton>
                    Get Started
                </CTAButton>
            </RightSide>

        </HeaderContainer>
    )
}

export default Header
