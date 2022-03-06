import React, { useState } from 'react'
// import styled from 'styled-components'
// import { usehistory}

import { useHistory } from 'react-router-dom'
import { useWalletModal, Text } from 'toolkit/uikit'
import useAuth from 'hooks/useAuth'
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import {
  connect, swap, trade, generate, HomeBottomDots,
  Card1Btn, Card2Btn, Card3Btn, Card4Btn,
  // Card11Btn, Card21Btn, Card31Btn, Card41Btn,
} from '../../../components/Image' 

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: '100%',
    border: 'none',
    background: 'none',
  },
  Wrapper: {
    padding: '50px 35px 20px',
    position: 'relative',
  },
  homeBottomDots: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  cardImgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '75% 16% 15%',
  },
  cardBtn: {
    position: 'relative',
    bottom: 0,
    marginTop: '5px',
    width: '100%'
  },
  btnTxt: {
    position: 'absolute',
    width: '100px',
    left: '50px',
    bottom: '60px',
  },
  cardTxt: {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    fontSize: '16px',
    color: 'white',
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  cardTitle: {
    fontSize: '20px',
    fontFamily: 'Osiris',
  },
  cardBody: {
    lineHeight: 1.3,
    minHeight: '60px',
    fontSize: '18px',
    fontFamily: 'RobotoRegular',
    margin: '5px',
  },
  buttonBody: {
    fontFamily: 'Osiris',
    position: 'absolute',
    top: '-3px',
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  }
}));

export default function BottomLayer() {
  const { login, logout } = useAuth()
  const  history   = useHistory()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const classes = useStyles();
  const cards = [
    {
      backgroundImage: '/images/home/1.png',
      buttonImage:'/images/home/button1.png',
      buttonText:'CONNECT',
      buttonUrl:'/connect',
      bodyTitle:'CONNECT',
      bodyText:'Connect to the Bluehorizon using the wallet',
      buttonTextColor: '#70d3dc'
    },
    {
      backgroundImage: '/images/home/2.png',
      buttonImage:'/images/home/button2.png',
      buttonText:'SWAP',
      buttonUrl:'/swap',
      bodyTitle:'SWAP',
      bodyText:'Swap coins just like the competition',
      buttonTextColor: '#78a272'
    },
    {
      backgroundImage: '/images/home/3.png',
      buttonImage:'/images/home/button3.png',
      buttonText:'TRADE',
      buttonUrl:'/collectibles',
      bodyTitle:'NFT',
      bodyText:'Earn BlueHorizon. Space Shuttle, Alien in NFTs',
      buttonTextColor: '#e2b716  '
    },
    {
      backgroundImage: '/images/home/4.png',
      buttonImage:'/images/home/button4.png',
      buttonText:'GENERATE',
      buttonUrl:'/farms',
      bodyTitle:'FARMING',
      bodyText:'Earn up to 758.75% BlueHorizon in Farms',
      buttonTextColor: '#fa3195'
    }
  ];

  const buttonClick = (url: string) => {
    if(url!=='/connect') history.push(url)
    else onPresentConnectModal()
  }
  return (
    <div className={classes.Wrapper}>
      <div className={classes.homeBottomDots}>
        <img src={HomeBottomDots} width="200" height="200" alt="" />
      </div>
      <div className="container">
        <div className="row">
          {cards.map((card, i) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mb-3 mb-lg-0" id="imageWrapper" key={card.buttonText}>
                <div className={`card text-white ${classes.cardWrapper}`}>
                  <img className="card-img" src={card.backgroundImage} width='100%' alt="CardImg" />
                  <div className={classes.cardImgOverlay}>
                    <div className={classes.cardTxt}>
                      <div className={classes.cardTitle}>
                        {card.bodyTitle}
                      </div>
                      <div className={classes.cardBody}>
                        {card.bodyText}
                      </div>
                      <div className={classes.cardBtn} role="button" aria-hidden="true"
                           onClick={()=>buttonClick(card.buttonUrl)}
                      >
                        <img
                          alt={`${card.buttonText} btn`}
                          src={card.buttonImage} width='100%'
                        />
                        <div className={classes.buttonBody} style={{color: `${card.buttonTextColor}`}}>
                          {card.buttonText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  )
}
