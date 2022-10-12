import { useState } from 'react';

import BrasilStates from '../brasil-states/brasil-states';
import BrasilCitys from '../brasil-cities/brasil-cities';

import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
    return;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputs = { phone: document.querySelector('#telefoneInput') };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '32px',
        border: '1px solid #15254d',
        borderRadius: '8px',
        margin: '16px auto',
        padding: '32px 0px',
        maxWidth: '450px',
        width: '100%',
      }}
    >
      <form
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '12px',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="name-input"
          label="Nome completo"
          helperText="Insira seu nome completo"
          name="name-register"
          type={'text'}
          required
          sx={{ width: '100%' }}
        />

        <Box sx={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
          <BrasilStates
            id="stateInput"
            name="stateRegister"
            onChange={handleInputChange}
          />
          <BrasilCitys
            id="cityInput"
            // state={formValues}
            name="cityRegister"
            onChange={handleInputChange}
          />
        </Box>

        <TextField
          id="outlined-phone-input"
          label="Phone number"
          autoComplete="phone-number"
          helperText="Insira seu número de telefone"
          required
          sx={{ width: '100%' }}
        />
        <TextField
          autoComplete="e-mail"
          id="outlined-email-input"
          label="E-mail"
          helperText="Insira seu endereço de e-mail"
          type="email"
          required
          sx={{ width: '100%' }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ width: '100%' }}
          type={'submit'}
        >
          Enivar
        </Button>
      </form>
    </Box>
  );
}

export default Register;
