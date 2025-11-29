import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Тип кнопки',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
      description: 'HTML тип кнопки',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Отключить кнопку',
    },
  },
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
};

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    layout: 'primary',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Primary Button</UiButton>',
  }),
};

export const Secondary: Story = {
  args: {
    layout: 'secondary',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Secondary Button</UiButton>',
  }),
};

export const Outline: Story = {
  args: {
    layout: 'outline',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Outline Button</UiButton>',
  }),
};

export const Disabled: Story = {
  args: {
    layout: 'primary',
    isDisabled: true,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Disabled Button</UiButton>',
  }),
};

export default meta;
