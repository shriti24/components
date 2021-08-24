import React, { FC } from 'react';
// Styles
import styles from './ClubField.module.css';
// Constants
const CLUBFIELD_TYPES: Object = {
  margin: {
    typeName: 'margin',
    decoration: '',
    regex: new RegExp(/^\$?[0-9]+\.?[0-9]?[0-9]?$/),
    placeholder: '0.00'
  },
  retail: {
    typeName: 'retail',
    decoration: '$',
    regex: new RegExp(/^\$?[0-9]+\.?[0-9]?[0-9]?$/),
    placeholder: ''
  },
  number: {
    typeName: 'number',
    decoration: '',
    regex: new RegExp(/^[0-9]*$/),
    placeholder: '0'
  }
};

interface IClubField {
  /**
   * Placeholder value
   */
  helperText: string;
  /**
   * Type of ClubField
   */
  type: string;
  /**
   * Input value
   */
  value: string;
  /**
   * Function for change handling
   */
  onChange(): void;
  /**
   * Boolean to hide/disable the component for Role-Based Components
   */
  isAuth?: boolean;
}

const ClubField: FC<IClubField> = ({ helperText, type, value, onChange, isAuth = true }) => {
  // Hide component depending on User Roles
  if (!isAuth) return null;

  const handleTrailing = (func: any) => (event: any) => {
    if (event.target.value > 0) {
      event.target.value = Number(event.target.value).toFixed(2);
      func(event);
    }
  };

  const handleChange = (type: string, func: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (CLUBFIELD_TYPES[type].regex.test(value) || value === '') {
      func(event);
    }
  };
  return (
    <div>
      <div className={styles.helperText}>{helperText}</div>
      <div className={styles.inputContainer}>
        <div className={styles.inputAdornment}>{CLUBFIELD_TYPES[type].decoration}</div>
        <input
          data-testid="ClubFieldInput"
          className={styles.input}
          value={value}
          placeholder={CLUBFIELD_TYPES[type].placeholder}
          onChange={handleChange(type, onChange)}
          onBlur={type === 'retail' ? handleTrailing(onChange) : null}
        />
      </div>
    </div>
  );
};

export default ClubField;
