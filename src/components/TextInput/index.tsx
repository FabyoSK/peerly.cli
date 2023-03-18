// @ts-nocheck
import { UncontrolledTextInput } from 'ink-text-input';
import React, { useState } from 'react';
import { render, Box, Text } from 'ink';
import BaseTextInput from 'ink-text-input';

const TextInput = ({
  placeholder,
  onSubmit
}) => {
  const [text, setText] = useState('')

  const handleChange = (newText) => {
    setText(newText);
  };

  const handleSubmit = (value) => {
    handleChange('')
    onSubmit(value)
  };

  return (
    <Box>
      <Box marginRight={1}>
        <Text>{placeholder}</Text>
      </Box>

      <BaseTextInput 
        onSubmit={handleSubmit} 
        value={text}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TextInput;