export interface IProps {
  /**
   * Текущее значение инпута (v-model)
   */
  modelValue: string;

  /**
   * Отключено ли взаимодействие
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Текст-подсказка
   * @default ''
   */
  placeholder?: string;
}

export interface IEmit {
  (e: 'update:modelValue', value: string): void;
}