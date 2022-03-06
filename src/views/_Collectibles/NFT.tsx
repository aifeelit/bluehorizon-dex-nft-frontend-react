import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { HomeBottomDots, nftSoldier, HomeArtist, nftBtnSideIcon } from '../../components/Image';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    [theme.breakpoints.down(500)]: {
      flexDirection: 'column',
    }
  },
  filter: {
    width: 220,
    display: 'flex',
    '&.collapse': {
      display: 'flex',
    },
    flexDirection: 'column',
    fontFamily: 'RobotoRegular',
    padding: '30px 20px',
    color: 'white',
    fontSize: 16,
    [theme.breakpoints.down(500)]: {
      width: '100%',
      padding: '20px 50px',
      '&.collapse': {
        display: 'none',
      }
    }
  },
  filterMenuForMobile: {
    display: 'none',
    color: 'white',
    
    [theme.breakpoints.down(500)]: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '30px 50px 0',
    }
  },
  category: {
    position: 'relative',
    width: 180,
    marginBottom: 32,
    [theme.breakpoints.down(500)]: {
      width: '100%',
    }
  },
  card: {
    position: 'relative',
    height: 40,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 20,
    display: 'none',
    '&.active, &:hover': {
      display: 'block',
    },
  },
  cate: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'none',
    borderRadius: 10,
    '&.active, &:hover': {
      backgroundImage: `linear-gradient(23deg,#8593a7 10%, #ffffff 100%);`,
      boxShadow: '0px 0px 3px black',
      color: '#2b2b2b',
    },
    display: 'flex',
    padding: '0 16px',
    alignItems: 'center',
  },
  artistGroup: {
    position: 'relative',
    width: 180,
    [theme.breakpoints.down(500)]: {
      width: '100%',
    }
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 180,
    height: 40,
    backgroundColor: '#0d2f52',
    boxShadow: '0 0 2px black',
    [theme.breakpoints.down(500)]: {
      width: '100%',
    }
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: 'white',
  },
  searchIconButton: {
    padding: 8,
    color: 'white',
  },
  artists: {
    marginTop: 16
  },
  artist: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: 5,
  },
  artistAvatar: {
    marginRight: 10,
    height: '100%',
  },
  body: {
    borderLeft: '1px solid #243d5c',
    position: 'relative',
    width: '100%',
  },
  upperLeftImg: {
    position: 'absolute',
    top: 10,
    left: 10,
    height: 200,
  },
  box: {
    padding: '50px 35px',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  searchbar: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#0d2f52',
    boxShadow: '0 0 2px black',
    marginBottom: '50px',
  },
  bigScreen: {
    [theme.breakpoints.up(1440)]: {
      flex: '0 0 20%',
      maxWidth: '20%',
    },
    [theme.breakpoints.up(1600)]: {
      flex: '0 0 16.666667%',
      maxWidth: '16.666667%',
    },
  }
}))

type AppProps = { data: any; title: string };

const CustomComponent = ({ data, title }: AppProps) => {
  const classes = useStyles();
  const [activeCate, setActiveCate] = useState(0);
  const [activeCollection, setActiveCollection] = useState(0);

  const activeComponent = (i: number) => {
    if (title === 'CATEGORY') {
      setActiveCate(i);
    }
    else {
      setActiveCollection(i);
    }
  }

  return (
    <div className={classes.category}>
      <div className="mb-3">{title}</div>
      {data.map((d: any, i: number) => {
        let active = '';
        if ((title === 'CATEGORY' && i === activeCate) ||
          (title === 'COLLECTIONS' && i === activeCollection)) active = 'active';

        return (
          <div key={d.id} className={classes.card}
            role="button" aria-hidden="true"
            onClick={() => activeComponent(i)}
          >
            <div className={`${classes.cate} ${active}`} key={d.id}>{d.name}</div>
            <img className={`${classes.btn} ${active}`} src={nftBtnSideIcon} alt="" />
          </div>
        )
      })}
    </div>
  )
};

const NFT = () => {
  const classes = useStyles();
  const categories = [
    { id: 0, name: 'Sci-Fi', key: 'sci_fi' },
    { id: 1, name: 'Fantasy', key: 'fantasy' },
  ];
  const collections = [
    { id: 0, name: 'Sci-Fi Woman', key: 'woman' },
    { id: 1, name: 'Sci-Fi Spaceship', key: 'spaceship' },
    { id: 2, name: 'Fantasy Characters', key: 'fantasy_char' },
  ]
  const [isExpand, setIsExpand] = useState(false)

  return (
    <div className={classes.wrapper}>
      <div className={classes.filterMenuForMobile}>
        <div className="mr-3">Filter Menu</div>
        <div role="button" aria-hidden="true" onClick={() => setIsExpand(!isExpand)}>
          {isExpand ?
            <div><ExpandLessIcon /></div> :
            <div><ExpandMoreIcon /></div>}
        </div>
      </div>
      <div className={`${classes.filter} ${isExpand? '': 'collapse'}`}>
        <CustomComponent data={categories} title="CATEGORY" />
        <CustomComponent data={collections} title="COLLECTIONS" />

        <div className={classes.artistGroup}>
          <div className="mb-3">ARTISTS</div>
          <Paper component="form" className={classes.search}>
            <InputBase
              className={classes.searchInput}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className={classes.artists}>
            {[1, 2, 3, 4, 5, 6].map((data) => (
              <div className={classes.artist} key={data}
                role="button" aria-hidden="true"
                onClick={() => console.log('Artist ', data)}
              >
                <img className={classes.artistAvatar} src={nftSoldier} alt="" />
                <span>Artist {data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <img className={classes.upperLeftImg} src={HomeBottomDots} alt="" />
        <div className={classes.box}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Paper component="form" className={classes.searchbar}>
                  <InputBase
                    className={classes.searchInput}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <IconButton type="button" className={classes.searchIconButton} aria-label="filter">
                    <FilterListIcon />
                  </IconButton>
                  <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
                <div className={`col-sm-6 col-lg-4 col-xl-3 ${classes.bigScreen} mb-4`} key={data}>
                  <img src={HomeArtist} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT;
