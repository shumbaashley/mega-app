import React, {useEffect, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import { getSingleProduct } from '../../actions/productActions.js';
import Loader from '../Loader.js';
import Header from './StoreHeader.js';
import StoreFooter from './StoreFooter.js';
import {Link} from 'react-router-dom'
import { addToCart } from '../../actions/cartActions.js';

const useStyles = makeStyles((theme) => ({
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
  }
}));


 const Product = ({match}) => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const singleProduct = useSelector(state => state.singleProduct)
  const {loading, error, product} = singleProduct
  useEffect(() => {
    dispatch(getSingleProduct(match.params.id))
  }, [dispatch, match])

  const addItemToCart = () => {
    dispatch(addToCart(match.params.id))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {loading ? <Loader/> : error ? <h3>{error}</h3> : (
            <Fragment>
              {/* Image */}
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                </Card>
              </Grid>
            {/* Details */}
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
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
                    <Button size="small">Review</Button>
                    <Button onClick={addItemToCart()} size="small">Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Cart List */}
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cart
                    </Typography>
                    <Typography>
                        Items
                    </Typography>
                    <Typography gutterTop variant="h5" component="h3">
                        Total
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to='/store'><Button size="small">Continue Shopping</Button></Link>
                    <Link to='/checkout'><Button size="small">Checkout</Button></Link>
                  </CardActions>
                </Card>
              </Grid>
              </Fragment>
        
            )
            
            }
            
          </Grid>



        </Container>
      </main>
        <StoreFooter/>
    </React.Fragment>
  );
}

export default Product