import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LeftLink, BottomRightCorner, Links } from '../../../components/Image'

const useStyles = makeStyles((theme) => ({
  termsAndService: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  wrapper: {
    padding: '0 8%',
  },
  text: {
    fontSize: '12px',
    // marginTop: '3px',
  },
  service_padding: {
    padding: '0px !important',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'RobotoRegular'
  },
  linkWrapper: {
    width: 320,
    display: 'flex',
    [theme.breakpoints.down(768)]: {
      width: 150,
    }
  },
  stripe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(768)]: {
      display: 'none',
    }
  },
  footerLink: {
    width: 142,
    height: 66,
    display: 'flex'
  },
  linkImg: {
    height: '100%',
    width: '100%',
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className="col-md-6 d-flex align-items-center mb-4 mb-md-0 text-light">
        <div className="container">
          <div className={`${classes.termsAndService} row`}>
            {['Docs', 'Terms of Service', 'Privacy Policy'].map((text) => (
              <div className={`${classes.service_padding} my-1 mr-4`}
                key={text} aria-hidden="true"
                onClick={() => {
                  let url = '';
                  if (text === 'Docs') url = 'docs';
                  else if (text === 'Terms of Service') url = 'termsOfService';
                  else url = 'privacyPolicy';
                  window.open(`http://localhost:3000/${url}`, '_blank');
                }}
                onKeyDown={() => console.log('key pressed')}
                style={{ cursor: 'pointer' }}>
                <img src={LeftLink} alt={`${text} icon`} height={24} />
                <span className={classes.text}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 align-items-center">
        <div className="d-flex justify-content-sm-start justify-content-md-end">
          <div className={classes.linkWrapper}>
            <div className={classes.stripe}>
              <img width="178" src={BottomRightCorner} alt="" height="10" />
            </div>
            <div className={classes.footerLink}>
              <img src={Links} useMap="#image-map" alt="link img" className={classes.linkImg} />
              <map name="image-map">
                <area target="_blank" alt="blog" title="blog" href="https://www.blogger.com" coords="19,7,10,22,18,37,37,37,45,22,38,7" shape="poly" />
                <area target="_blank" alt="github" title="github" href="https://github.com" coords="107,23,98,37,106,53,124,53,132,38,123,23" shape="poly" />
                <area target="_blank" alt="twitter" title="twitter" href="https://twitter.com" coords="48,23,40,38,49,53,66,53,74,38,66,23" shape="poly" />
                <area target="_blank" alt="telegram" title="telegram" href="https://www.telegram.com" coords="78,7,69,21,77,37,95,37,103,22,94,7" shape="poly" />
              </map>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;