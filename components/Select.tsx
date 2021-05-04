import { InputLabel, MenuItem, Select } from '@material-ui/core';

interface SelectProps {
  name: string;
  onChange: any;
  options: string[];
  required: boolean;
  value: string;
}

const SelectComponent = ({
  name,
  onChange,
  options,
  required,
  value,
}: SelectProps) => {
  return (
    <>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Select
        fullWidth={true}
        name={name}
        id={name}
        required={required}
        value={value || ''}
        onChange={onChange}
      >
        {options.map((option: string) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default SelectComponent;
