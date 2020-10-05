import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Styles";
import { ticketActions } from '../actions/ticket.actions';
import { connect } from 'react-redux';

import EmployeeListing from './TicketListing';
const TicketForm = (props)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    classes,
  } = props;
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      mobileno:'',
      ticketfare:''

    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Required"),
      name: Yup.string()
        .required("Required"),
      from: Yup.string()
        .required("Required"),
      to: Yup.string()
        .required("Required"),
      mobileno: Yup.string()
        .required("Required")
        .min(10, "Mobile no must be 10 digit")
        .max(10, "Mobile no must be 10 digit"),
      ticketfare: Yup.string()
        .required("Required"),
       
    }),
    onSubmit: values => {
      props.ticketRequest(values);
    },
  });

  return(
    <>
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <h1 className={classes.textCenter}>Ticket Reservation System</h1>
            <TextField
              id="name"
              label="Name"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.name}
              error={formik.errors.name?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email (eg:abc@test.com)"
              type="email"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.email}
              margin="dense"
              variant="outlined"
              error={formik.errors.email?true:false}
              fullWidth              
            />            
            <TextField
              id="mobileno"
              label="Mobile No (10 digits.)"
              type="number"
              maxLength={10}
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.mobileno}
              error={formik.errors.mobileno?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="from"
              label="From"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.from}
              error={formik.errors.from?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="to"
              label="To"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.to}
              error={formik.errors.to?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
             <TextField
              id="ticketfare"
              label="Ticket Fare"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.address}
              error={formik.errors.address?true:false}
              multiline
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardContent>
            {formik.touched.userEmail && formik.errors.userEmail ? (
                <div className={classes.errMessage}>{formik.errors.userEmail}</div>
              ) : null}
               {formik.touched.userPassword && formik.errors.userPassword ? (
              <div className={classes.errMessage}>{formik.errors.userPassword}</div>
            ) : null}
          </CardContent>         
          <CardActions className={classes.actions}>
            <Button type="button" color="primary" className={classes.subnitButton}  onClick={handleClickOpen} >
              View Bookings
            </Button>
            <Button type="submit" color="primary" className={classes.subnitButton}  >
              Book Now
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
    <EmployeeListing open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}></EmployeeListing>
    </>
  );
};

function mapState(state) {
	return {

	};
}

const actionCreators = {
    ticketRequest: ticketActions.ticketInfoRequest
};

export default connect(mapState, actionCreators)(withStyles(styles)(TicketForm));
