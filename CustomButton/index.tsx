import React, { FC } from 'react';
// Styles
import styles from './CustomButton.module.css';
// Types
import { ButtonTypes, ButtonVariantTypes } from './types';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ICustomButton {
  /**
   * Boolean for disable button
   */
  disabled: boolean;
  /**
   * Button type
   */
  type: ButtonTypes;
  /**
   * Click handler
   */
  onClick(): void;
  /**
   * Variant for button
   */
  variant?: ButtonVariantTypes;

  actionButtonColors?: React.CSSProperties;

  loading?: boolean;
}
const CustomButton: FC<ICustomButton> = ({
  disabled,
  type,
  onClick,
  children,
  variant,
  actionButtonColors,
  loading = false
}) => {
  const setStyles = () => {
    if (disabled) {
      if (variant === 'contained') {
        return styles.disabledContainedButton;
      } else if (variant === 'outlined') {
        return styles.disabledOutlinedButton;
      } else if (variant === 'textVariant') {
        return styles.disabledTextButton;
      } else {
        return styles.disabledButton;
      }
    } else {
      if (type === 'primary') {
        if (variant === 'outlined') return styles.primaryOutlinedButton;
        else return styles.primaryButton;
      } else if (type === 'secondary') {
        return styles.secondaryButton;
      } else if (type === 'text') {
        return styles.textButton;
      } else {
        return styles.customButton;
      }
    }
  };
  return (
    <button
      className={setStyles()}
      style={actionButtonColors}
      onClick={!loading ? onClick : null}
      data-testid={children}
    >
      {loading ? <CircularProgress className={styles.loader} /> : children}
    </button>
  );
};

export default CustomButton;
