import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    background-color: ${props => props.theme.colors.darkBackground};
    width: 100%;
`

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
    
    return (
        <Container>
            Hello
        </Container>
    )
}

export default Albums
