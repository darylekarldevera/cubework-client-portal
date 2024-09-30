export default interface IHomeActivityTable {
  id: number;
  type: string;
  date: string;
  charge: number;
  payments: number;
  balance: number;
  method: string;
}

export type InvoiceDetails = {
  RowNumber: number;
  InvoiceID: number;
  ClientID: number;
  VendorID: number;
  CustomerCode: string;
  InvoiceNumber: string;
  InvoiceDate: string;
  BillingPeriodStart: string;
  BillingPeriodEnd: string;
  InvoiceTotal: number;
  Status: string;
  VendorName: string;
  BilltoName: string;
  InvoiceStatus: string;
  InvoiceType: string;
  BillToID: number;
  BillToIDCustomerCode: string;
  ShipToID: number;
  Notes: string;
  InvoiceTypeID: number;
  BillingRuleSetID: number;
  ReferenceNumber: string;
  BatchNumber: string;
  SetServiceName: string;
  BillCodeCategoryVals: string;
  CreateBy: string;
  LastupdateBy: string;
  FacilityID: number;
  FacilityName: string;
  CreateDate: string;
  CloseStatusDate: string;
  LastSentDate: string;
  LastSentBy: string;
  CustomerPONumber: string;
  IsMerge: boolean;
  DueDate: string;
  Balance: number;
  DueDay: number;
  ProNumber: string;
  order_id: number;
  FutherStatus: string;
  PreviousInvoiceTotal: number;
};

export type InvoiceTotal = {
  Total: number;
};

export type InvoiceSummary = {
  TotalAmount: number;
  TotalOUTSTANDING: number;
  TotalPAST_DUE: number | null;
};

export interface IHomeRequestPayloadData {
  ThirdParty_Program: string;
  ThirdParty_CustomerID: string;
  ThirdParty_SiteID: string;
  ReferenceNumber: string;
  InvoiceDateStart: string;
  InvoiceDateEnd: string;
  Category: string;
  PeriodStart: string;
  PeriodEnd: string;
  CustomerPONumber: string;
  PageIndx: string;
  PageSize: string;
  DataSource: string;
  InvoiceNumber: string;
  ProNumber: string;
  InvoiceStatus: string;
  BilltoID: number;
  BilltoIDs: number[];
  BilltoCustomerCodes: string[];
}

export interface IHomeRequestPayload {
  UserID: number;
  Data: IHomeRequestPayloadData;
}

export interface IHomeResponsePayload {
  ds: InvoiceDetails[];
  ds1: InvoiceTotal[];
  ds2: InvoiceSummary[];
}