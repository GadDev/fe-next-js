import InputText from './InputText';
import SelectComponent from './Select';
import CheckBox from './CheckBox';

interface FormBuilderProps {
  field: any;
  value: any;
  handleChange: any;
}

const FieldBuilder = ({ field, value, handleChange }: FormBuilderProps) => {
  const FieldElement: any = {
    select: (
      <SelectComponent
        key={field.name}
        name={field.name}
        required={field.required}
        options={field.options}
        value={value}
        onChange={handleChange}
      />
    ),
    checkbox: (
      <CheckBox
        key={field.name}
        name={field.name}
        value={value}
        onChange={handleChange}
        required={field.required}
      />
    ),
    text: (
      <InputText
        key={field.name}
        id={field.name}
        name={field.name}
        value={value}
        onChange={handleChange}
        required={field.required}
      />
    ),
  };

  return FieldElement[field.type];
};

export default FieldBuilder;
