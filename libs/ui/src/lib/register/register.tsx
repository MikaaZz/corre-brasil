import styles from './register.module.css';

import { useState } from 'react';

import BrasilStates from '../brasil-states/brasil-states';
import BrasilCitys from '../brasil-cities/brasil-cities';

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

  console.log(inputs);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nome completo:</label>
        <input type={'text'} id="nameInput" name="nameRegister" required />
        <label>Estado:</label>
        <BrasilStates
          id="stateInput"
          name="stateRegister"
          onChange={handleInputChange}
        />
        <label>Cidade:</label>
        <BrasilCitys
          id="cityInput"
          // state={formValues}
          name="cityRegister"
          onChange={handleInputChange}
        />
        <label>Telefone para contato:</label>
        <input
          type={'tel'}
          id="telefoneInput"
          name="telefoneRegister"
          maxLength={11}
          placeholder="(xx) xxxxx-xxxx"
          onChange={() => {}}
          required
        />
        <label>E-mail para contato:</label>
        <input type={'email'} id="emailInput" name="emailRegister" required />
      </form>
    </>
  );
}

export default Register;
