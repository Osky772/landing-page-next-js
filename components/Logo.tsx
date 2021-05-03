import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const LogoContainer = styled.div`
    display: flex;
    flex: 1;
`
const LogoText = styled.p`
    font-size: 28px;
    margin: 0 13px;
`

function Logo() {
    return (
        <LogoContainer>
            <Image
                src="/logo.svg"
                width="30"
                height="30"
            />
            <LogoText>Muse.ic</LogoText>
        </LogoContainer>
    )
}

export default Logo
