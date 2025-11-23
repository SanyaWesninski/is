export interface IProps {
  /**
   * Вариант оформления кнопки
   * @default 'primary'
   */
  layout?: 'primary' | 'secondary';

  /**
   * Тип кнопки (HTML attribute)
   * @default 'button'
   */
  type?: 'submit' | 'button';

  /**
   * Отключено ли взаимодействие
   * @default false
   */
  isDisabled?: boolean;
}