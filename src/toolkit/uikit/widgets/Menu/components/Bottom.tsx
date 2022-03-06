import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import { Theme } from '@material-ui/core';

import {
  HomeIcon, ConnectIcon, FarmIcon, NFTIcon, SwapIcon,
  SidebarConnect, SidebarConnectBtn, SidebarMoon, 
  Logo, Avatar, LangEN, defaultLogo,
  sidebarBalanceLeft, sidebarDots, bottomLeftIcon, sidebarEllipse,
} from '../../../../../components/Image'


const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
  },
  accountInfo: {
    height: '30px',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    }
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  logoBtn: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  hide: {
    display: "none"
  },
  drawerClose: {
    color: 'white',
    fontFamily: 'RobotoRegular',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.down("sm")]: {
      // width: theme.spacing(9) + 1
      width: 0,
    },
    backgroundColor: '#2b2b2b',
    borderRight: '1px solid #243d5c',
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    // marginTop: theme.spacing(1),
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    // [theme.breakpoints.down("sm")]: {
    //   width: '100%',
    //   // marginLeft: ({open}) => open? '-220px' : 0,
    //   marginLeft: '-220px',
    // },
  },
  grow: {
    flexGrow: 1
  },
  userName: {
    fontSize: 14,
    marginRight: 10,
    fontFamily: 'RobotoRegular !important',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  sidebarImgWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  sidebarConnectWrapper: {
    position: 'relative',
    backgroundImage: `linear-gradient(68deg,#08223c 10%, #0d3053 100%);`,
    boxShadow: '0px 0px 3px black',
    padding: 24,
    borderRadius: 15,
    height: 200,
  },
  sidebarMoon: {
    position: 'absolute',
    top: -38,
    left: 14,
    width: 70,
  },
  sidebarConnectBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
  },
  sidebarConnectTopRight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Osiris !important',
    marginBottom: 8,
  },
  sidebarConnectContent: {
    fontSize: 14,
    fontFamily: 'RobotoRegular',
    lineHeight: '20px',
  },
  sidebarOpenImg: {
    width: '100%',
  },
  sidebarBalance: {
    borderRadius: 15,
    backgroundImage: `linear-gradient(68deg,#08223c 10%, #0d3053 100%);`,
    height: '40px',
    boxShadow: '0px 0px 3px black',
  },
  balanceWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px !important',
  },
  balanceLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 38,
  },
  balanceRight: {
    position: 'absolute',
    top: 3,
    right: 0,
  },
  balance: {
    fontFamily: 'Osiris !important',
    marginLeft: 10,
  },
  avatar: {
    borderRadius: '50%',
    height: 36,
    marginRight: 10,
    cursor: 'pointer',
  },
  languageWrapper: {
    height: 36,
    marginRight: 50,
    border: '1px solid #243d5c',
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-around',
    width: 80,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    }
  },
  language: {
    fontSize: 12,
    fontFamily: 'Osiris !important',
  },
  // container: {
  //   height: 'calc(100vh - 64px)',
  // },
  // row: {
  //   height: '100%',
  // },
}));

const Bottom: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="d-flex flex-column" style={{padding:"10px"}}>
      <div className={classes.sidebarConnectWrapper}>
        <img className={classes.sidebarMoon} src={defaultLogo} alt="" style={{width:"100px", marginTop:"-10px"}}/>
        <img className={classes.sidebarConnectBottomLeft} src={bottomLeftIcon} alt="" />
        <img className={classes.sidebarConnectTopRight} src={sidebarEllipse} alt="" />

        <div className="mt-3 mb-2" style={{color:"white"}}>
          <div className={classes.title}>WallEt</div>
          <div className={classes.sidebarConnectContent}>Connect to the Blue</div>
          <div className={classes.sidebarConnectContent}>Horizon using the</div>
          <div className={classes.sidebarConnectContent}>wallet of your choice.</div>
        </div>

        <div role="button" aria-hidden="true">
          <img src={SidebarConnectBtn} alt="connect img" />
        </div>
      </div>

      <div className={`${classes.sidebarBalance} card mt-4 w-100`}>
        <img className={classes.balanceLeft} src={sidebarBalanceLeft} alt="balance left" />
        <img className={classes.balanceRight} src={sidebarDots} alt="balance dots" />
        <div className={`card-img-overlay ${classes.balanceWrapper}`}>
          <img src={defaultLogo} alt="" width="50px"/>
          <div className={classes.balance} style={{color: 'white'}}>$15.310</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Bottom)
