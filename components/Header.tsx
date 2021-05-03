import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import StyledMenuItem from './MenuItem'
import CTAButton from './CTAButton'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 15px;
    max-width: ${props => props.theme.sizes.header};
    `
const LeftSide = styled.div`
    display: flex;
    align-items: center;
`
const RightSide = styled.div``
const LogoContainer = styled.div`
    display: flex;
`
const LogoText = styled.p`
    font-size: 28px;
    margin: 0 13px;
`
const HeaderMenu = styled.ul`
    display: flex;
`

function Header() {
    return (
        <HeaderContainer>

            <LeftSide>

                <LogoContainer>
                    <Image
                        src="/logo.svg"
                        width="30"
                        height="30"
                    />
                    <LogoText>Muse.ic</LogoText>
                </LogoContainer>

                <nav>
                    <HeaderMenu>
                        <StyledMenuItem href="#">Features</StyledMenuItem>
                        <StyledMenuItem href="#">Pricing</StyledMenuItem>
                        <StyledMenuItem href="#">Library</StyledMenuItem>
                        <StyledMenuItem href="#">
                            Explore
                            <Image
                                src="/arrow-stroke.svg"
                                width="24"
                                height="8"
                            />
                        </StyledMenuItem>
                    </HeaderMenu>
                </nav>

            </LeftSide>

            <RightSide>
                <CTAButton />
            </RightSide>

        </HeaderContainer>
    )
}

export default Header
