/* eslint-disable no-unused-vars */
enum ButtonTypesEnum {
  primary = 'primary',
  secondary = 'secondary',
  text = 'text'
}
export type ButtonTypes = keyof typeof ButtonTypesEnum;

enum ButtonVariantTypesEnum {
  contained = 'contained',
  outlined = 'outlined',
  default = 'default',
  textVariant = 'textVariant'
}
export type ButtonVariantTypes = keyof typeof ButtonVariantTypesEnum;
