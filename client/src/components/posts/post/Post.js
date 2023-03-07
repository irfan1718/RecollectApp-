import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

import { useDispatch } from 'react-redux';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MorHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

import { deletePost, likePost } from '../../../actions/posts';

import useStyles from './style';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize='small' />
        &nbsp;Like
      </>
    );
  };

  const dispatch = useDispatch();

  const { classes } = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {user?.result?._id === post?.creator && (
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => setCurrentId(post._id)}
          >
            <MorHorizIcon fontSize='default' />
          </Button>
        )}
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='secondary'>
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography variant='h5' className={classes.title}>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {user?.result?._id === post?.creator && (
          <Button
            size='small'
            color='error'
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize='small' /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
