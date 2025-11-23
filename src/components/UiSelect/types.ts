export interface IProps {
  /**
   * Текущее выбранное значение (v-model)
   */
  modelValue: string;

  /**
   * Отключено ли взаимодействие
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Список опций для выбора
   */
  options: string[];
}

export interface IEmit {
  (e: 'update:modelValue', value: string): void;
}