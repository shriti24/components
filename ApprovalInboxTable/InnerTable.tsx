import React from 'react';
import CheckBoxOutline from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
import Lock from '@material-ui/icons/Lock';
import styles from './InnerTable.module.css';
import { blockedRetail } from './types';
import { useTranslation } from 'react-i18next';

interface InnerTable {
  data: Array<blockedRetail>;
  selectedInnerRow(clubNumber: number, itemNumber: number, id: number): void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function InnerTable(props: InnerTable) {
  const { t } = useTranslation();
  const { data } = props;

  function selectedRow(item: blockedRetail) {
    props.selectedInnerRow(item.clubNumber, item.itemNbr, item.retailActionId);
  }

  function _innerHeader() {
    return (
      <div className={styles.inner_header_row}>
        <div></div>
        <div>Club number</div>
        <div>{t('inboxPage.blockedRetail')}</div>
        <div>Effective date</div>
        <div>Retail reason</div>
        <div>Created by</div>
        <div>Block type</div>
      </div>
    );
  }
  function _innerRow() {
    return (
      <>
        {data.map((d) => (
          <div key={d.retailActionId} className={`${styles.inner_body_row}`}>
            <div
              className={styles.inner_row}
              onClick={() => {
                selectedRow(d);
              }}
              style={{ justifyContent: 'center' }}
            >
              {d.selected ? (
                <CheckBox style={{ color: '#0071E9' }} data-testid="checked_club" />
              ) : (
                <CheckBoxOutline style={{ color: '#0071E9' }} data-testid="unchecked_club" />
              )}
            </div>
            <div className={styles.inner_row}>
              <div style={{ position: 'relative', left: '6px' }}>{d.clubNumber}</div>
            </div>
            <div className={`${styles.inner_row} ${styles.rightAlign}`}>
              <>{d.proposedRetail}</>
              <div style={{ fontSize: '12px', color: '#424242' }}>
                <Lock
                  style={{
                    width: '14px',
                    color: '#777',
                    padding: '0px',
                    position: 'relative',
                    top: '7px',
                    right: '3px'
                  }}
                />
                Current {d.currentRetail}
              </div>
            </div>
            <div className={styles.inner_row}>{d.effectiveDate ? d.effectiveDate : ''}</div>
            <div className={styles.inner_row}>
              {d.retailReasonCodeTxt ? d.retailReasonCodeTxt : ''}
            </div>
            <div className={styles.inner_row}>
              {d.retailCreateUserId ? d.retailCreateUserId : ''}
            </div>
            <div className={`${styles.inner_row} ${styles.rightAlign}`}>
              <div>{d.blockReasonCdText}</div>
              <div>{d.blockStartDate}</div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <div className={`${styles.blue_line}`} />
      <div className={styles.inner_table}>
        <div className={styles.inner_table_head}>{_innerHeader()}</div>
        <div className={styles.inner_table_body}>{_innerRow()}</div>
      </div>
    </>
  );
}

export default InnerTable;
