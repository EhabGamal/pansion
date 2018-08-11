import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const DateInput = props => (
  <FormControl fullWidth error={props.error} aria-describedby={`${props.id}Error`}>
    <InputLabel htmlFor={props.id}>{props.title}</InputLabel>
    <Input id={props.id} type="date" value={props.value} onChange={props.onChange} />
    {props.error && <FormHelperText id={`${props.id}Error`}>Invalid date</FormHelperText>}
  </FormControl>
);

export default DateInput;
