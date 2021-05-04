import { useEffect, useState } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

import InputText from './InputText';
import FieldBuilder from './FieldBuilder';

interface Field {
  name: string;
  type: string;
  required: boolean;
  options: string[];
}

const Form = ({
  fields,
  onSubmit,
}: {
  fields: string[] | Field[];
  onSubmit: any;
}) => {
  const [stateForm, setStateForm] = useState<any>({});

  useEffect(() => {
    fields.map((field: string | Field) => {
      let newState =
        typeof field === 'string'
          ? { [field]: '' }
          : field.type !== 'checkbox'
          ? { [field.name]: '' }
          : { [field.name]: false };

      setStateForm((prevState: any) => ({
        ...prevState,
        ...newState,
      }));
    });
  }, [fields]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isCheckbox = event.target.type === 'checkbox';
    const name = event.target.name;
    const value = isCheckbox ? !stateForm[name] : event.target.value;
    setStateForm((prevState: any) => ({ ...prevState, ...{ [name]: value } }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event, stateForm);
  };

  return (
    <Paper style={{ padding: 20 }}>
      <Grid container>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="flex-start" spacing={2}>
            {fields.map((field: string | Field) => {
              return typeof field === 'string' ? (
                <Grid item xs={12}>
                  <InputText
                    key={field}
                    id={field}
                    name={field}
                    value={stateForm[field]}
                    onChange={handleChange}
                    required={true}
                  />
                </Grid>
              ) : (
                <FieldBuilder
                  field={field}
                  value={stateForm[field.name]}
                  handleChange={handleChange}
                />
              );
            })}
            <Button
              style={{ marginTop: '2rem' }}
              type="submit"
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
};

export default Form;
