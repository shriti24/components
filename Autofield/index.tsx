import React, { FC, useState } from 'react';
// Components
import styles from './AutoField.module.css';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
// import class from './AutoField.module.css';

interface IAutoField {
  /**
   * Placeholder value
   */
  helperText: string;
  /**
   * Input value
   */
  value: Array<Number>;
  /**
   * Function for change handling
   */
  onChange(name: string, val: Array<String>): void;
  /**
   * Boolean to hide/disable the component for Role-Based Components
   */
  focused?: boolean;
  notFoundItems: Array<Number>;
  options: Array<{ id: number; details: string }>; // the group of valid club items.
  placeholderText: string;
  onDelete(index: number);
  updateSuggestions(event: Event);
  onClear();
}

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-weight: 500;
  color: #212121;
  font-family: roboto;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  ${({ error }) =>
    error
      ? `
      color: #C43A13
  `
      : ''}
`;

const InputWrapper = styled('div')`
  border: solid 1px #8192aa;
  background-color: #fff;
  border-radius: 2px;
  padding: 1px;
  padding-right: 32px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &.error {
    border-color: #c43a13;
    box-shadow: none;
  }

  & input {
    font-size: 16px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Clear = styled(({ onClear, ...props }) => (
  <div {...props}>
    <CloseIcon onClick={onClear} />
  </div>
))`
  top: calc(50% - 12px);
  right: 9px;
  position: absolute;
  height: 100%;

  & svg {
    cursor: pointer;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #0071e9;
  border: solid 1px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  border-radius: 4px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  font-size: 16px;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 16px;
    cursor: pointer;
    padding: 4px;
  }
  &.invalid {
    background-color: #c43a13;
  }
`;

const Listbox = styled('ul')`
  width: 580px;
  min-width: 30px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

const AutoField: FC<IAutoField> = ({
  helperText,
  value = [],
  onChange,
  focused = false,
  notFoundItems,
  placeholderText,
  options,
  onDelete,
  updateSuggestions,
  onClear
}) => {
  const [ipvalue, setIpValue] = useState('');
  const showError = !!notFoundItems.length;

  const handlePaste = (event) => {
    event.preventDefault();
    const str = event.clipboardData.getData('Text').trim();
    const reStr = str.replace(/[\n\r]+[\s]/g, ',');
    const val = reStr.split(',').map((item) => {
      return item.trim();
    });
    const valid = [];
    for (let i = 0; i < val.length; i++) {
      if (/^[0-9]/.test(val[i]) && val[i] !== '' && value.indexOf(val[i]) === -1) {
        valid.push(val[i]);
      }
    }
    if (valid.length !== 0) {
      onChange(null, [...value, ...valid]);
    }
  };

  const upadateVal = (event) => {
    const val = event.target.value;

    if (/^[0-9]*$/.test(val)) {
      if (event.key === 'Enter') {
        if (value.indexOf(val) === -1) {
          event.preventDefault();
          onChange(null, [...value, val]);
        }
        setIpValue('');
      }
      options = [];
      if (updateSuggestions && event.target.value.length > 1) {
        updateSuggestions(event);
      }
      if (event.key === 'Backspace' && ipvalue === '') {
        onDelete(value.length - 1);
      }
    }
  };

  const handleChange = (event) => {
    if (/^[0-9]*$/.test(event.target.value)) {
      setIpValue(event.target.value);
    }
  };

  const sentenceCase = (str) => {
    if (str.length > 0)
      return str.toLowerCase().replace(/(^|\s)(\w)/g, (event) => event.toUpperCase());
    else return null;
  };
  const _onClick = (option) => {
    if (value.indexOf(option.id) === -1) {
      onChange(null, [...value, option]);
      setIpValue('');
    }
  };
  const _optionsList = () => {
    //if (options.length > 0) {
    return (
      <Listbox>
        {options.map((option, index) => {
          return (
            <li key={index} className={`${styles.optionItem}`} onClick={() => _onClick(option)}>
              <span>
                {option.id} - {sentenceCase(option.details)}
              </span>
              <CheckIcon fontSize="small" />
            </li>
          );
        })}
      </Listbox>
    );
  };

  return (
    <div>
      <Label error={showError}>
        {helperText} {value.length ? <span>({value.length})</span> : null}
      </Label>
      <InputWrapper className={`${focused ? 'focused' : ''} ${showError ? 'error' : ''}`}>
        {value.map((option, index) => {
          let error = false;
          if (notFoundItems.indexOf(option) > -1) {
            error = true;
          }
          return (
            <Tag
              key={index}
              error={error.toString()}
              onDelete={() => onDelete(index)}
              label={option}
              className={error ? 'invalid' : ''}
            />
          );
        })}
        <input
          placeholder={!value.length ? placeholderText : null}
          onKeyDown={upadateVal}
          onPaste={handlePaste}
          value={ipvalue}
          onChange={handleChange}
          data-testid="input"
        />
        {value.length ? <Clear onClear={() => onClear()} /> : null}
      </InputWrapper>
      {options.length > 0 && ipvalue.length > 2 ? _optionsList() : null}
    </div>
  );
};
export default AutoField;
