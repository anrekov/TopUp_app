import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';

const Deposit = ({ match }) => {
  const history = useHistory();
  const operator = match.params.operator;

  const phoneRegExp = /^\+?[78]\s?[-\\(]?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}$/; // +7 (953) 092-93-17

  const validationSchemaDeposit = yup.object().shape({
    customOperator: yup.string(),

    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Please, fill the field'),

    sum: yup
      .number()
      .typeError('Its must be a number! ')
      .min(1, 'The number must be greater than 1')
      .max(1000, 'The number must be less than 1000')
      .required('Please, fill the field'),
  });

  const handleSubmit = (values) => {
    const random = +new Date();

    setTimeout(() => {
      if (random % 2 === 0) {
        alert('successful transaction');
        history.push('/');
      } else {
        alert('failed transaction');
      }
    }, 1000);
  };

  return (
    <div className='deposit'>
      <h1>Deposit page</h1>

      <p>
        Top up <b>{operator !== 'Custom' ? operator : 'Any operator'}:</b>
      </p>

      <Formik
        initialValues={{
          customOperator: '',
          phoneNumber: '',
          sum: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchemaDeposit}
      >
        {({ isValid, dirty }) => (
          <Form className='form'>
            {operator === 'Custom' && (
              <p>
                <label htmlFor='customOperator'>Enter the operator:</label>
                <ErrorMessage name='customOperator' component='span' className='error' />
                <Field name='customOperator'>
                  {({ field }) => (
                    <input
                      className='input'
                      {...field}
                      type='text'
                      placeholder='Yota'
                    />
                  )}
                </Field>
              </p>
            )}
            <p>
              <label htmlFor='phoneNumber'>Enter your phone:</label>
              <ErrorMessage
                name='phoneNumber'
                component='span'
                className='error'
              />
              <Field name='phoneNumber'>
                {({ field }) => (
                  <MaskedInput
                    className='input'
                    {...field}
                    type='text'
                    placeholder='+7 (956) 314-15-92'
                    mask={[
                      '+',
                      /7/,
                      ' ',
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                    ]}
                  />
                )}
              </Field>
            </p>

            <p>
              <label htmlFor='sum'>Enter the value:</label>
              <ErrorMessage name='sum' component='span' className='error' />
              <Field name='sum'>
                {({ field }) => (
                  <input
                    className='input'
                    {...field}
                    type='number'
                    placeholder='1 - 1000'
                  />
                )}
              </Field>
            </p>

            <button
              className='sendBtn'
              disabled={!isValid && !dirty}
              type='submit'
            >
              Send
            </button>
            <button
              className='sendBtn'
              type='button'
              onClick={() => {
                history.push('/');
              }}
            >
              Back to Main
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Deposit;
