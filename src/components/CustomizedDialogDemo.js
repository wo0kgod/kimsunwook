import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'


import Grid from '@material-ui/core/Grid';
import SimpleSnackbar from './SimpleSnackbar';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton arial-label="Add" onClick={this.handleClickOpen}>
          <AddCircleIcon/>
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            아이스 아메리카노
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
            <Grid container spacing={24}>
            
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={3}>
              <Button  color="secondary">HOT</Button>
              </Grid>
              <Grid item xs={3}>
              <Button  color="primary">ICE</Button>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
            </Typography>
            <Typography gutterBottom>
            주문목록 HOT 2EA ICE 1EA
            </Typography>
            <Typography gutterBottom>
            총액 W9900
            </Typography>
          </DialogContent>
          <DialogActions>
          <IconButton arial-label="Minus">
            <RemoveCircleIcon/>
          </IconButton>
          <Typography gutterBottom>
            3
            </Typography>
          <IconButton arial-label="Add">
            <AddCircleIcon/>
          </IconButton>
          </DialogActions>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.handleClose} >
              바로결제 
            </Button>
            {/* <Button variant="contained" color="primary" onClick={this.handleClose} >
              장바구니  
            </Button> */}
            <SimpleSnackbar/>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;