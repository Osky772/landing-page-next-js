import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import MainContainer from './Container'
import CTAButton from './CTAButton'
import Link from './Link'

const HeroContainer = styled.div`
    display: flex;
    margin: 50px 0;
`
const HeroTextContainer = styled.div`
    display: flex;
    flex: 40%;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontSizes.h1};
    font-family: ${props => props.theme.fonts.primary};
    margin: 0;
    letter-spacing: -2px;
    line-height: 1;
`
const TitleDot = styled.span`
    color: ${props => props.theme.colors.primary};
`
const Description = styled.p`
    font-size: ${props => props.theme.fontSizes.description};
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 35px;
`
const HeroImageWrapper = styled.div`
    display: flex;
    position: relative;
    flex: 60%;
`
const CirceImageWrapper = styled.div`
    position: absolute;
    top: -50px;
    right: -100px;
    width: 950px;
    height: 950px;
    z-index: -1;
`

function Hero() {
    return (
        <MainContainer>
            <HeroContainer>
                <HeroTextContainer>
                    <Title>
                        Listen Like Never Before<TitleDot>.</TitleDot>
                    </Title>
                    <Description>
                        We offer music in 100x better quality than our competitors. Say good bye to FLAC 👋
                    </Description>
                    <CTAButton colored>
                        Get Started
                    </CTAButton>
                    <Link href="#">
                        <Image
                            src="/see-in-action.svg"
                            height="12"
                            width="40"
                        />
                            See in action
                    </Link>
                </HeroTextContainer>

                <HeroImageWrapper>
                    <Image
                        src="/hero.png"
                        layout="fill"
                        objectFit="contain"
                        />
                </HeroImageWrapper>

                <CirceImageWrapper>
                    <Image
                        src="/circle.svg"
                        layout="fill"
                    />
                </CirceImageWrapper>
            </HeroContainer>
        </MainContainer>
    )
}

export default Hero
