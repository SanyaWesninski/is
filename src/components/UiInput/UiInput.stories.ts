import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    modelValue: {
      control: { type: 'text' },
      description: 'Текущее значение инпута',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Отключить инпут',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Плейсхолдер',
    },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст',
  },
};

export default meta;

type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
};

export const WithValue: Story = {
  args: {
    modelValue: 'Привет, мир!',
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 'Заблокировано',
    isDisabled: true,
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
};
