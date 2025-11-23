import { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';
import { html } from '../../helpers';

// Импортируем тип IProps
import type { IProps } from './types.ts';

const options = ['Пункт 1', 'Пункт 2', 'Пункт 3'];

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: options[0],
    options,
    isDisabled: false,
  },
  argTypes: {
    modelValue: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default meta; // ✅ Обязательная строка!

export const Default: StoryObj<typeof UiSelect> = {
  render: (args: IProps) => ({
    components: { UiSelect },
    setup() {
      return {
        args,
        value: args.modelValue,
      };
    },
    template: html`
      <UiSelect
        v-bind="args"
        :modelValue="value"
        @update:modelValue="value = $event"
      />
    `,
  }),
};

export const Disabled: StoryObj<typeof UiSelect> = {
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true,
  },
};