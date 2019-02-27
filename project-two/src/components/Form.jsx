import React from 'react';

const Form = (props) => {

  const { input, handleChange, handleSubmit } = props;

  return (
    <form className='main-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='input'
        id='search'
        value={input.value}
        placeholder='Search photos'
        onChange={handleChange} />
      <input
        type='submit'
        id='submit-search'
        value='Search'/>
    </form>
  )
}
export default Form;
