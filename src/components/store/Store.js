import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
import Copyright from '../footer/Copyright.js'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../../actions/productActions.js';
import Loader from '../Loader.js';
import Header from './StoreHeader.js';
import StoreFooter from './StoreFooter.js';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 const Store = () => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Mega Store
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">Main call to action</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {loading ? <Loader/> : error ? <h3>{error}</h3> : (
            
            products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                    <Typography gutterTop variant="h5" component="h3">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`store/product/${product._id}`}><Button size="small">View</Button></Link>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
            )
            
            }
            
          </Grid>
        </Container>
      </main>
      <StoreFooter/>
    </React.Fragment>
  );
}

export default Store