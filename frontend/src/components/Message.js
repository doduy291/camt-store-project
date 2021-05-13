import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cookieAlert: {
    '& .MuiAlert-icon': {
      fontSize: 26,
    },
    '& .MuiAlert-message': {
      fontSize: 17,
    },
  },
});

const Message = (props) => {
  const classes = useStyles();
  return (
    <Alert variant="outlined" severity={props.severity} className={classes.cookieAlert}>
      {props.children}
    </Alert>
  );
};

export default Message;
