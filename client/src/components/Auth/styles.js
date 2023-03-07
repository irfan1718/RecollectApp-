import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2, 3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
}));
