import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Button, Grid, Paper, Typography } from '@material-ui/core';

import useSWR from 'swr';

import Form from '../components/Form';


const fetcher = async (url: any) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const LenderNamePage: NextPage = () => {
  const [formResult, setFormResult] = useState<{ decision: string } | null>(
    null,
  );
  const { query } = useRouter();
  const lenderSlug = query.lenderName?.toString();

  const { data, error } = useSWR(`/api/lenders/${lenderSlug}`, fetcher);

  if (error) return <div>{error?.message}</div>;
  if (!data) return <div>Loading...</div>;

  const handleSubmit = async (event: any, stateForm: any) => {
    event.preventDefault();
    const res = await fetch(`/api/lenders/${lenderSlug}`, {
      body: JSON.stringify(stateForm),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    setFormResult(result);
  };

  const resetForm = (): void => {
    setFormResult(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          {data?.name}
        </Typography>
      </Grid>

      {formResult?.decision ? (
        <Paper style={{ padding: 20 }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {formResult?.decision}
            </Typography>
            <Button onClick={resetForm}>Reset demand</Button>
          </Grid>
        </Paper>
      ) : (
        <Form fields={data?.fields} onSubmit={handleSubmit} />
      )}
    </Grid>
  );
};

export default LenderNamePage;
