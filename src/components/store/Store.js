import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../../actions/productActions.js';
import Loader from '../Loader.js';
import Header from './StoreHeader.js';
import StoreFooter from './StoreFooter.js';
import ProductCard from './ProductCard'
import StoreHero from './StoreHero.js';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


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
          <StoreHero/>
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              loading ? <Loader/> : error ? <h3>{error}</h3> : (
                products.map((product) => <ProductCard key={product._id} product={product}/>)
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