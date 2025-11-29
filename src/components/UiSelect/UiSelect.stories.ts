import type { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  argTypes: {
    modelValue: {
      control: { type: 'select' },
      options: ['Опция 1', 'Опция 2', 'Опция 3'],
      description: 'Выбранное значение',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Отключить селект',
    },
    options: {
      control: { type: 'object' },
      description: 'Массив опций',
    },
  },
  args: {
    modelValue: 'Опция 1',
    isDisabled: false,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
};

export default meta;

type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
  args: {
    modelValue: 'Опция 1',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    template: '<UiSelect v-bind="args" />',
  }),
};

export const WithSelected: Story = {
  args: {
    modelValue: 'Опция 2',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    template: '<UiSelect v-bind="args" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 'Опция 1',
    isDisabled: true,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    template: '<UiSelect v-bind="args" />',
  }),
};
