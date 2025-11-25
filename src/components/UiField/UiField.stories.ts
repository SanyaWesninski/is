import { Meta, StoryObj } from '@storybook/vue3';
import { UiField, UiInput, UiSelect } from '../';
import { html } from '../../helpers';
import type { IProps } from './types.ts'; // ✅ Импорт типа

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Email адрес',
  },
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: (args: IProps) => ({ // ✅ Явный тип args
    components: { UiField, UiInput },
    setup() {
      return {
        args,
        value: '',
      };
    },
    template: html`
      <UiField v-bind="args">
        <UiInput v-model="value" placeholder="user@example.com" />
      </UiField>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: (args: IProps) => ({ // ✅ Явный тип args
    components: { UiField, UiSelect },
    setup() {
      const options = ['Админ', 'Редактор', 'Гость'];
      return {
        args: { ...args, label: 'Роль' },
        value: options[0],
        options,
      };
    },
    template: html`
      <UiField v-bind="args">
        <UiSelect v-model="value" :options="options" />
      </UiField>
    `,
  }),
};