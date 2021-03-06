import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter } from 'react-router-dom';

class AlertDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    const {orders} = this.props;
    if(orders.length === 0) return;
    // if(orders.length !== 1) return; // 주문이 한개일때만 들어가도록 함. 악의적으로 여러 주문넣는거 막기 
    // handleSubmit();

    this.setState({ open: true });
  };

  handleSubmitAndClose = () => {
    const {handleSubmit,handleRenewOrders,orders, history} = this.props;
    // console.log(history)
    handleSubmit();

    this.setState({ open: false }, () => {
      history.push('/pickup');
      handleRenewOrders();
    });
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          style={{
            backgroundColor: "#FFCD00",
            color: "#1E1E1E",
            "&:hover": {
              backgroundColor: "#ffd62b",
              color: "#1E1E1E"
            }
          }
          }
          // className={classes.paymentButton}
        >
          카카오페이로 결제
        </Button>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"진짜 주문하시는거죠?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              데모데이에 오신 여러분들께는 음료를 무료로 제공해드려요 +_+
              (한번에 너무 많이 주문하신건... 아니시죠..?)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              돌아가기
            </Button>
            <Button onClick={this.handleSubmitAndClose} color="default" autoFocus>
              주문하기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(AlertDialog);
