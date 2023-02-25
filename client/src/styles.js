import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  posts: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#2B3467',
    fontWeight: '600',
  },
  image: {
    marginLeft: '15px',
  },
}));
