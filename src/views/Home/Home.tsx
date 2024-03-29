import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'kebabfinance-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import FarmStakingCard from './components/FarmStakingCard'
import NewsCard from './components/NewsCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  margin: 32px auto;
  max-width: 904px;
  padding-top: 128px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    margin-top: 48px;
    padding-top: 0;
  }
`

const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`

const Subtitle = styled(Text)`
  font-weight: 400;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div>
          <Title as="h1">{TranslateString(576, 'Bitbet Finance')}</Title>
          <Subtitle>{TranslateString(578, 'The Yield Leveraging  & AMM-Dex protocol on Binance Smart Chain.')}</Subtitle>
        </div>
      </Hero>
      <Container>
        <Cards>
          <FarmStakingCard />
          <NewsCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </Container>
    </Page>
  )
}

export default Home
