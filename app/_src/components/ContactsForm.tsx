'use client';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
export const ContactsFom = () => {
  const form = useForm({
    initialValues: {
      name: '',
      number: '',
      question: '',
      termsOfService: false,
    },
  });

  return (
    <Box sx={{ margin: '0px', width: '7000px' }} maw={700}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          size="xl"
          mb={20}
          placeholder="Ваше имя"
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          size="xl"
          mb={20}
          placeholder="Ваш номер телефона"
          {...form.getInputProps('number')}
        />
        <TextInput
          withAsterisk
          size="xl"
          mb={20}
          placeholder="Ваш вопос"
          {...form.getInputProps('question')}
        />
        <Button color="gray" radius="md" size="xl" sx={{ width: '100%' }}>
          Отправить заявку
        </Button>
      </form>
    </Box>
  );
};
