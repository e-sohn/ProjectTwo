import React from 'react';

const Form = (props) => {

  const { input, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='input'
        value={input.value}
        placeholder='What image type'
        onChange={handleChange} />
      <input
        type='submit' />
    </form>
  )
}
export default Form;
