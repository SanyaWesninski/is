/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from '../UiInput/UiInput.vue';
import UiField from './UiField.vue';

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Текст метки',
    },
  },
  args: {
    label: 'E-mail',
  },
};

type Story = StoryObj<typeof UiField>;

export const WithLabel: Story = {
  args: {
    label: 'E-mail',
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="user@example.com" />
      </UiField>
    `,
  }),
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="Без метки" />
      </UiField>
    `,
  }),
};

export default meta;
