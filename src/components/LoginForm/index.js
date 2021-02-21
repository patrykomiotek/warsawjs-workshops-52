import React from 'react';
import {
  Button, Stack, FormControl, FormLabel, Input, FormErrorMessage
} from '@chakra-ui/react';
import { useForm }  from 'react-hook-form';

function LoginForm() {
  const { register, errors, handleSubmit, formState } = useForm();

  const submitForm = (values) => {
    // console.log('form values: ', values)
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 3000);
    // })
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Stack spacing={3}>
        <FormControl isRequired isInvalid={Boolean(errors.email)}>
          <FormLabel>E-mail</FormLabel>
          <Input
            name="email"
            ref={register}
            placeholder="test@test.com"
            size="lg"
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={Boolean(errors.password)}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            ref={register}
            placeholder="*********"
            size="lg"
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.password && errors.email.password}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
