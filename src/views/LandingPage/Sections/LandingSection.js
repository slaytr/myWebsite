import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.js";

const useStyles = makeStyles(styles);

export default function LandingSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>Hi, I'm Bill</h1>
          <h3 className={classes.title}>I like to build software.</h3>
          <h4 className={classes.description}>
            I’m a kiwi engineer from New Zealand.
            I’ve helped create software ranging from cutting-edge storage software used by global academic institutions
            through to SaaS platforms and tools used by over 10,000’s of businesses across the planet.
          </h4>
        </GridItem>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <img
              src={image}
              alt="..."
              className={classes.img}
          />
        </GridItem>
        <GridItem cs={12} sm={6} md={6}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
        </GridItem>
        <GridItem cs={12} sm={6} md={6}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}