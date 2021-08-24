import React, { FC, useEffect, useState } from 'react';
// Components
import styled from 'styled-components';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Stylesconst
import styles from './PercentageRule.module.css';

interface IPercentageRule {
  options: Array<{ value: string; label: string }>;
  typeValue: string;
  isError: boolean;
  helperText: string;
  value: string;
  onTypeChange(value: string);
  onValueChange(value: string);
  disabled: boolean;
  placeHolder: string;
  hidePercentage: boolean;
  units: string;
}
const Listbox = styled('ul')`
  margin: 2px 0 0;
  padding: 0;
  min-width: 350px;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px #F5F6F8;
  z-index: 1;
  font-size: 1rem;
  font-weight: 400;
  }
`;

const PercentageRule: FC<IPercentageRule> = (props: IPercentageRule) => {
  const [showTypes, setShowTypes] = useState(false);
  const percentageState = props.typeValue.length === 0 || props.typeValue === 'match';
  const [selectedType, setSelectedType] = useState('Select');

  useEffect(() => {
    if (props.typeValue) {
      props.options.map((m) => {
        if (m.value === props.typeValue) {
          setSelectedType(m.label);
        }
      });
    }
  }, [props.typeValue]);

  const populateType = () => {
    showTypes ? setShowTypes(false) : setShowTypes(true);
  };

  const _onClick = (option) => {
    setSelectedType(option.label);
    props.onTypeChange(option.value);
    setShowTypes(false);
  };

  const _optionsList = () => {
    return (
      <Listbox className={styles.listbox}>
        <li className={`${styles.selectItem}`}>
          <span>Select</span>
        </li>
        {Object.values(props.options).map((option) => (
          <li
            key={option.value}
            className={`${styles.optionItem}`}
            onClick={() => _onClick(option)}
          >
            <span>{option.label}</span>
          </li>
        ))}
      </Listbox>
    );
  };

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.percentlayout}>
          <p className={`${styles.helperText} ${props.isError ? styles.errorTxt : ''}`}>
            {props.helperText}
          </p>
          <div className={styles.inlineBlock}>
            <div className={`${styles.selectLayout}`} onClick={populateType}>
              <div className={`${styles.customSelect} ${styles.focusNone}`}>
                <input className={styles.ipType} value={selectedType} data-testid={'select-type'} />
              </div>
              <div className={styles.downArrow}>
                <span>
                  <ExpandMoreIcon />
                </span>
              </div>
            </div>
            <div className={styles.percentBox}>
              <div className={styles.percentageBorder}>
                <div
                  className={styles.percentOutline}
                  style={{
                    backgroundColor:
                      props.typeValue === '' || props.typeValue === 'match' ? '#F5F6F8' : '#FFFF'
                  }}
                >
                  {props.typeValue === 'negative' ? (
                    <div className={styles.typeBox}>
                      <span className={styles.percentData}>-</span>
                    </div>
                  ) : null}
                  <div
                    className={styles.focusNone}
                    style={{
                      paddingLeft: '20%',
                      width: '100%'
                    }}
                  >
                    <input
                      className={styles.ipVal}
                      style={{
                        backgroundColor:
                          props.typeValue === '' || props.typeValue === 'match'
                            ? '#F5F6F8'
                            : '#FFFF'
                      }}
                      disabled={props.typeValue === 'match'}
                      placeholder={
                        percentageState
                          ? props.typeValue === 'match'
                            ? '0.00'
                            : '--'
                          : props.value
                      }
                      value={
                        percentageState
                          ? props.typeValue === 'match'
                            ? '0.00'
                            : '--'
                          : props.value
                      }
                      onChange={(event) => props.onValueChange(event.target.value)}
                      data-testid={'val-type'}
                    />
                  </div>
                </div>
                <div
                  style={{
                    color:
                      selectedType === 'match' || selectedType === 'Select' ? '#8492A8' : 'black'
                  }}
                  className={styles.postcss}
                >
                  <span>{props.units}</span>
                </div>
              </div>
            </div>
          </div>
          {showTypes && _optionsList()}
        </div>
      </div>
    </>
  );
};

export default PercentageRule;
