import React, { Component } from "react";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import SimpleCard from "../components/SimpleCard";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SimpleExpansionPanels from "../components/SimpleExpansionPanels";
import SimpleAppBar from "../components/SimpleAppBar";

class Pickup extends Component {

  render() {
    const { user, orders, total , isOrdered } = this.props;
    const contents = {
      padding: "70px 0px",
      justifyContent: "center",
      alignItems: "center"
    };
    // return user ? (
      return (
        isOrdered  ? (
          <div>
            <SimpleAppBar title={"주문목록"} />
  
            <div style={contents}>
              <SimpleCard orders={orders} user={user}/>
            </div>
            <LabelBottomNavigation orders={orders} />
          </div>
        ) : (
          <div>
            <SimpleAppBar title={"주문목록"} />
  
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh"
              }}
            >
              <Typography>주문이 없습니다!</Typography>
            </div>
            <LabelBottomNavigation orders={orders} />
          </div>
        )
      )
      
    // ) : (
    //   <Redirect to="/" />
    // );
  }
}

export default Pickup;
