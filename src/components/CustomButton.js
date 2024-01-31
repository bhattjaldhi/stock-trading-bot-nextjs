// CustomButton.js
'use client'
import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

const CustomButton = withStyles({
  root: {
    backgroundColor: props => props.backgroundColor || '#000000',
    color: props => props.textColor || '#ffffff',
    textTransform: props => props.textTransform || 'capitalize',
    borderRadius: props => props.borderRadius || 0,
    width: props => props.width,
    height: props => props.height,
    '&:hover': {
      backgroundColor: props => props.textColor || '#ffffff',
      color: props => props.backgroundColor || '#000000',
    },
  },
})(Button);

export default CustomButton;