import { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';
import { html } from '../../helpers';
import type { IProps } from './types.ts';
import { ref, watch } from 'vue';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст...',
    isDisabled: false,
  },
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args: IProps) => ({
    components: { UiInput },
    setup() {
      const value = ref(args.modelValue);

      watch(() => args.modelValue, (newVal) => {
        value.value = newVal;
      });

      return {
        args,
        value,
      };
    },
    template: html`
      <UiInput
        v-bind="args"
        :modelValue="value"
        @update:modelValue="value = $event"
      />
    `,
  }),
};

export const Disabled: StoryObj<typeof UiInput> = {
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true,
    modelValue: 'Недоступно',
  },
};