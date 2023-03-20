import React from "react";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import Body from "./Body/Body";
const MainContainer = (props) => {
  // console.log(props)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container />
      <Body
       carouselImg={props.carouselImg}
       titleTrending={props.titleTrending}
       dataTrending={props.dataTrending}
       dataMoreNike={props.dataMoreNike}
       merchMenu={props.merchMenu}
      />
    </React.Fragment>
  );
};
export default MainContainer;
