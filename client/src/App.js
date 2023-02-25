import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid, AppBar } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import recollect from './images/recollect.png';
import useStyle  from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const  {classes}  = useStyle();
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h4' align='center'>
          Recollect
        </Typography>
        <img className={classes.image} src={recollect} alt='icon' height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify='space-between'
            alignItems='stretch'
            spacing={6}
          >
            <Grid className={classes.posts} item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
