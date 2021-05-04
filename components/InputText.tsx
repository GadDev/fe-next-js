import { InputLabel, Input } from '@material-ui/core';

interface InputTextProps {
  id: string;
  name: string;
  value: any;
  required?: boolean;
  onChange: any;
}

const InputText = ({
  id,
  name,
  value = '',
  required = false,
  onChange,
}: InputTextProps) => {
  return (
    <>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Input
        fullWidth={true}
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </>
  );
};

export default InputText;
