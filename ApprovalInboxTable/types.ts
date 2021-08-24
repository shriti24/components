export interface blockedRetail {
  blockCreateUserId: string;
  blockEndDate: string;
  blockReasonCd: string;
  blockReasonCdText: string;
  blockStartDate: string;
  clubNumber: number;
  currentRetail: number | string;
  effectiveDate: string;
  expirationDate: string;
  lastUpdateUserId: string;
  proposedRetail: number | string;
  retailActionId: number;
  retailCreateTs: string;
  retailCreateUserId: string;
  retailReason: string;
  retailReasonCodeTxt: string;
  retailType: string;
  retailTypeTxt: string;
  selected?: boolean;
  itemNbr?: number;
}

export interface PendingRetailInfo {
  categoryDesc: string;
  categoryNbr: number;
  itemDesc: string;
  itemNbr: number;
  blockedRetails: Array<blockedRetail>;
  selectedAll?: boolean;
}
