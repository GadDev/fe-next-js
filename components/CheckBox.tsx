import { Checkbox, FormControlLabel } from '@material-ui/core';

interface CheckboxProps {
  name: string;
  required?: boolean;
  onChange: any;
  value: any;
}

const CheckBox = ({
  name,
  required = false,
  onChange,
  value,
}: CheckboxProps) => (
  <>
    <FormControlLabel
      value={name}
      control={
        <Checkbox
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      }
      label="Container"
      labelPlacement="start"
    />
  </>
);

export default CheckBox;
