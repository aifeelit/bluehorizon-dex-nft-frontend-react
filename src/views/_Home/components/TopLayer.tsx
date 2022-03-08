import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { rightImg, HomeArtist, HomeTopDots, HomeTopVertical, CommonBtn } from '../../../components/Image'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '300px',
    borderBottom: '1px solid #243d5c',
    backgroundColor: '#3a3a3ca',
    width: '100%',
    [theme.breakpoints.down(400)]: {
      height: '450px',
    }
  },
  card: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(1300)]: {
      display: 'none',
    },
  },
  cardOverlay: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    padding: '0 35px',
  },
  wrapper: {
    width: 500,
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down(1300)]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }
  },
  rightImg: {
    width: 550,
    height: '100%',
    float: 'right'
  },
  stripe: {
    position: 'absolute',
    top: 0,
    right: 'calc(50% - 220px)',
    height: 3,
    width: 440,
    zIndex: 10,
  },
  topVertical: {
    display: 'none',
    [theme.breakpoints.between(768, 1300)]: {
      display: 'block',
      width: 200,
      zIndex: 1,
    }
  },
  leftNumber: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '45%',
    bottom: 0,
    fontFamily: 'RobotoRegular',
    fontSize: '14px',
    color: '#173655',
    lineHeight: '20px',
    marginBottom: 5,

    [theme.breakpoints.down(768)]: {
      display: 'none',
    }
  },
  box: {
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down(400)]: {
      flexDirection: 'column',
    }
  },
  artist: {
    height: 202,
    width: 133,
    marginRight: 50,
  },
  topDots: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
    [theme.breakpoints.down(400)]: {
      display: 'none',
    }
  },
  topMiddle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#ffffff',
    zIndex: 1,
    lineHeight: '20px',
    [theme.breakpoints.down(400)]: {
      marginTop: 20,
    }
  },
  topMiddleTitle: {
    fontFamily: 'Osiris !important',
    fontSize: 20,
  },
  middleBtn: {
    fontFamily: 'Osiris',
    background: 'none',
    border: 'none',
    marginLeft: '-8px',
    marginTop: 5,
    width: 180,
    height: 64,
  },
  btnName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontFamily: 'Osiris',
  },
  slide: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 10,
  },
  slideDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activedSlide: {
    border: '2px solid #2b2b2b',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#294769',
  },
  activedDot: {
    backgroundColor: '#2b2b2b',
  }
}));


const TopLayer = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className={`${classes.container} card`}>
      <div className={classes.card}>
        <img src={rightImg} className={classes.rightImg} alt="right-img" />
      </div>

      <div className="card-img-overlay p-0">
        <div className={classes.cardOverlay}>
          <div className="container">
            <div className="row h-100">
              <div className="col-sm-12 h-100">
                <div className={`${classes.wrapper} py-5`}>
                  <img className={classes.topDots} src={HomeTopDots} alt="" />
                  <div className={classes.box}>
                    <img className={classes.artist} src={HomeArtist} height="100%" alt="artist img" />
                    <div className={classes.topMiddle}>
                      <div className={classes.topMiddleTitle}>SmartNodesFinance</div>
                      <div>Checkout the new series of NFT.</div>

                      <div className={`${classes.middleBtn} card`}>
                        <img src={CommonBtn} alt="" />
                        <div className={`${classes.btnName} card-img-overlay`}>
                          BUY NOW
                        </div>
                      </div>

                      <div className={classes.slide}>
                        {[1, 2, 3, 4].map(data => (
                          <div className={`${classes.slideDot} ${activeSlide === data ? classes.activedSlide : ''}`} key={data}>
                            <div className={`${classes.dot} ${activeSlide === data ? classes.activedDot : ''}`}>{ }</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={classes.topVertical}>
                    <img src={HomeTopVertical} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.leftNumber}>
          <div>
            010011100 010100010 111010100
          </div>
          <div>
            111001000 111010100
          </div>
        </div>

        {/* <img className={classes.stripe} src={yellowStripe} alt="stripeImg" /> */}
      </div >
    </div>
  )
}

export default TopLayer
