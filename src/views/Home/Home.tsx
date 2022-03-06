import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

import WalletCard from './components/WalletCard'
import ToogleCard from './components/ToogleCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const CardsOrigin = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

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
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 3;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 3;
    }
  }
`
const CustomCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const BigCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Home: React.FC = () => {
  const { t } = useTranslation()
  const { currentLotteryPrize } = useFetchLotteryForPromos()

  return (
    <>
      {/* <LotteryBanner currentLotteryPrize={currentLotteryPrize} /> */}
      <Page>
        <Cards>
          <WalletCard title="$SMN" val1="$11.25" val2={55} img='images/status1.jpg' />
          <WalletCard title="Total Smart Nodes" val1="6500" val2={-5} img='images/status2.jpg' />
          <WalletCard title="Your Total Claimed $SMN" val1="3587" val2={null} img='images/status3.jpg' />
          <ToogleCard title="Auto Compound" status={false} img1='images/status4.jpg' img2='images/status42.jpg' />
        </Cards>
        <BigCards>
            {/* <IncomeCard img='images/income.jpg' /> */}
            <CustomCards>
              {/* <RewardCard /> */}
              {/* <NewnodeCard /> */}
            </CustomCards>
          </BigCards>
          <BigCards>
            {/* <ZapperData /> */}
            {/* <PriceChart /> */}
          </BigCards>
        {/* <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="secondary">
            {t('PancakeSwap')}
          </Heading>
          <Text>{t('The #1 AMM and yield farm on Binance Smart Chain.')}</Text>
        </Hero> */}
        {/* <div>
          <Cards>
            <FarmStakingCard />
            <PredictionPromotionCard />
          </Cards>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} />
          </CTACards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div> */}
      </Page>
    </>
  )
}

export default Home
