import { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';
import { html } from '../../helpers';

// Импортируем тип IProps
import type { IProps } from './types.ts';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args: IProps) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">Подтвердить</UiButton>`,
  }),
};