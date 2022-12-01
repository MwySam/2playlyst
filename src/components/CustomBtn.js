import React from 'react'
import {Button, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'



const StyledButton = withStyles(
  {
    root: {
      display: "flex",
      size: "large",
      alignItems: "center",
      justifyContent: "center",
      height: "44px",
      padding: "0 25px",
      boxSizing: "border-box",
      borderRadius: 6, 
      background: "#72d9b6",
      color: "#000000",
      transform: "none",
      boxShadow: "2px 2px 0 0 #c7d8ed",
      transition: "background .3s,border-color .3s,color .3s",
      "&:hover": {
          backgroundColor:  "#fffff00"
        },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


function CustomBtn(props) {
  return(
    <Grid container justify= "center">
    <StyledButton size ="large" variant="contained">{props.txt}</StyledButton>
  </Grid>
  )
}

export default CustomBtn