import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

import Link from './Link'
import MainContainer from './Container'

const OuterWrapper = styled.section`
    background-color: ${props => props.theme.colors.darkBackground};
    width: 100%;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0 ;
`
const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fonts.primary};
  margin-bottom: 45px;
  color: #ffffff;
`
const Title = styled.p`
  margin: 0;
  font-size: 80px;
  flex: 0 0 70%;
`
const TitleBoost = styled.p`
  flex: 0 0 30%;
  font-size: 20px;
`
const Subtitle = styled.p`
  flex: 0 0 70%;
  font-family: ${props => props.theme.fontSizes.description};
  opacity: 0.5;
`
const CaruselContainer = styled.div`
  display: flex;
`
const CaruselStatus = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 30%;
  align-items: center;
  justify-content: center;
`
const CaruselStatusCount = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 14px;
  color: #ffffff;
`
const StatusCountTotal = styled.span`
  color: rgba(255,255,255, .3);
`
const CaruselSlideButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CaruselSlideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 30px 8px;
  padding: 0;
  border: ${props => props.colored ? 'transparent' : '1px solid #ffffff'};
  color: #ffffff;
  background: ${props => props.colored ? props.theme.colors.primary : 'transparent'};
  cursor: pointer;
`
const CaruselWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
`
const BlurEffect = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  z-index: 999;
`
export const CaruselItemContainer = styled.div`
  max-width: 300px;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 0;
  font-family: ${props => props.theme.fonts.primary};
  color: #ffffff;
`
const ImageWrapper = styled.div`
  max-width: 242px;
  margin-bottom: 24px;
`
const AlbumTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.albumTitle};
  margin: 0;
  line-height: 32px;
`
const AlbumArtist = styled.p`
  font-size: ${props => props.theme.fontSizes.albumTitle};
  color: #F24822;
  margin: 0;
  line-height: 32px;
`
const AlbumGenre = styled.p`
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
  line-height: 24px;
`
const AlbumDescription = styled.p`
  font-size: 16px;
  max-height: 20px;
  overflow:hidden;
  text-overflow: ellipsis;
  opacity: 0.5;
`
const AlbumReadMoreLink = styled

export interface AlbumsResult {
  resultCount: number;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId?: number | null;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  collectionExplicitness: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;
  contentAdvisoryRating?: string | null;
}

type AlbumsProps = {
  albums: {
    total: number;
    results: ResultsEntity[]
  } | null
}

function Albums({ albums }: AlbumsProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [autoPlay, setAutoPlay] = React.useState(true);

  const totalAlbums = albums?.total;

  // reset autoplay counter and start counting from 0
  const restartAutoPlay = () => {
    setAutoPlay(() => false)
    setTimeout(() => {
      setAutoPlay(() => true)
    }, 0);
  }

  const updateCurrentSlide = (index) => {
    restartAutoPlay()
    setCurrentSlide(index);
  };

  const next = () => {
    if (totalAlbums && currentSlide < totalAlbums - 1) {
      restartAutoPlay()
      setCurrentSlide(prevSlide => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  
  const prev = () => {
    if (!totalAlbums) {
      return;
    }

    if (currentSlide >= 1) {
      restartAutoPlay()
      setCurrentSlide(prevSlide => prevSlide - 1);
    } else {
      setCurrentSlide(totalAlbums - 1);
    }
  };

  return (
    <OuterWrapper>
      <MainContainer>
        <InnerContainer>

          <TitleContainer>
            <TitleBoost>
              Top notch sound
            </TitleBoost>
            <Title>
              The world’s best quality audio ever.
            </Title>
            <Subtitle>Over 100 years of research has led us to develop new quality, which is 100x times better than FLAC.</Subtitle>
          </TitleContainer>

          <CaruselContainer>

            <CaruselStatus>
              <CaruselStatusCount>
                0{currentSlide + 1}
                <Image
                  src="/carusel-status-count-separator.svg"
                  width="75"
                  height="1"
                />
                <StatusCountTotal>0{totalAlbums}</StatusCountTotal>
              </CaruselStatusCount>
              <CaruselSlideButtonContainer>
                <CaruselSlideButton onClick={prev}>
                  <Image
                    src="/arrow-carusel-left.svg"
                    width="15"
                    height="15"
                  />
                </CaruselSlideButton>
                <CaruselSlideButton colored onClick={next}>
                  <Image
                    src="/arrow-carusel-right.svg"
                    width="15"
                    height="15"
                  />
                </CaruselSlideButton>
              </CaruselSlideButtonContainer>
            </CaruselStatus>

            <CaruselWrapper>
              <Carousel
                stopOnHover={false}
                interval={10000}
                autoPlay={autoPlay}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                selectedItem={currentSlide}
                onClickItem={restartAutoPlay}
                onChange={updateCurrentSlide}
                centerMode
                centerSlidePercentage={45}
                renderItem={(item: React.ReactNode, options?: { isSelected: boolean }) => {
                  return item;
                }}
              >
                {albums?.results.map(album => {
                  return (
                    <CaruselItemContainer key={album.artistId}>
                      <ImageWrapper>
                        <img
                          src={album.artworkUrl100}
                          width="100%"
                          height="auto"
                          style={{
                            borderRadius: 20,
                            filter: 'drop-shadow(0px 25px 60px #18181D)'
                          }}
                        />
                      </ImageWrapper>
                      <AlbumTitle>{album.collectionName}</AlbumTitle>
                      <AlbumArtist>{album.artistName}</AlbumArtist>
                      <AlbumGenre>{album.primaryGenreName} - {new Date(album.releaseDate).getFullYear()}</AlbumGenre>
                      <AlbumDescription>{album.copyright}</AlbumDescription>
                      <Link href="#">Find out more</Link>
                    </CaruselItemContainer>
                  )
                })}
              </Carousel>
            </CaruselWrapper>

          </CaruselContainer>

        </InnerContainer>
      </MainContainer>
    </OuterWrapper>
  )
}

export default Albums
