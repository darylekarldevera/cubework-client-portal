import { ColumnDef } from "@tanstack/react-table";
import { InvoiceDetails } from '@/types/homeActivityTable';

export const HOME_ACTIVITY_TABLE_COLUMNS: ColumnDef<InvoiceDetails>[] = [
  {
    header: 'Row Number',
    accessorKey: 'RowNumber',
    size: 100,
  },
  {
    header: 'Invoice ID',
    accessorKey: 'InvoiceID',
    size: 200,
  },
  {
    header: 'Client ID',
    accessorKey: 'ClientID',
    size: 70,
  },
  {
    header: 'Vendor ID',
    accessorKey: 'VendorID',
    size: 125,
  },
  {
    header: 'Customer Code',
    accessorKey: 'CustomerCode',
    size: 125,
  },
  {
    header: 'Invoice Number',
    accessorKey: 'InvoiceNumber',
    size: 150,
  },
  {
    header: 'Invoice Date',
    accessorKey: 'InvoiceDate',
    size: 150,
  },
  {
    header: 'Billing Period Start',
    accessorKey: 'BillingPeriodStart',
    size: 150,
  },
  {
    header: 'Billing Period End',
    accessorKey: 'BillingPeriodEnd',
    size: 150,
  },
  {
    header: 'Invoice Total',
    accessorKey: 'InvoiceTotal',
    size: 150,
  },
  {
    header: 'Status',
    accessorKey: 'Status',
    size: 150,
  },
  {
    header: 'Vendor Name',
    accessorKey: 'VendorName',
    size: 150,
  },
  {
    header: 'Bill to Name',
    accessorKey: 'BilltoName',
    size: 150,
  },
  {
    header: 'Invoice Status',
    accessorKey: 'InvoiceStatus',
    size: 150,
  },
  {
    header: 'Invoice Type',
    accessorKey: 'InvoiceType',
    size: 150,
  },
  {
    header: 'Bill To ID',
    accessorKey: 'BillToID',
    size: 150,
  },
  {
    header: 'Bill To ID Customer Code',
    accessorKey: 'BillToIDCustomerCode',
    size: 150,
  },
  {
    header: 'Ship To ID',
    accessorKey: 'ShipToID',
    size: 150,
  },
  {
    header: 'Notes',
    accessorKey: 'Notes',
    size: 150,
  },
  {
    header: 'Invoice Type ID',
    accessorKey: 'InvoiceTypeID',
    size: 150,
  },
  {
    header: 'Billing Rule Set ID',
    accessorKey: 'BillingRuleSetID',
    size: 150,
  },
  {
    header: 'Reference Number',
    accessorKey: 'ReferenceNumber',
    size: 150,
  },
  {
    header: 'Batch Number',
    accessorKey: 'BatchNumber',
    size: 150,
  },
  {
    header: 'Set Service Name',
    accessorKey: 'SetServiceName',
    size: 150,
  },
  {
    header: 'Bill Code Category Vals',
    accessorKey: 'BillCodeCategoryVals',
    size: 150,
  },
  {
    header: 'Create By',
    accessorKey: 'CreateBy',
    size: 150,
  },
  {
    header: 'Last Update By',
    accessorKey: 'LastupdateBy',
    size: 150,
  },
  {
    header: 'Facility ID',
    accessorKey: 'FacilityID',
    size: 150,
  },
  {
    header: 'Facility Name',
    accessorKey: 'FacilityName',
    size: 150,
  },
  {
    header: 'Create Date',
    accessorKey: 'CreateDate',
    size: 150,
  },
  {
    header: 'Close Status Date',
    accessorKey: 'CloseStatusDate',
    size: 150,
  },
  {
    header: 'Last Sent Date',
    accessorKey: 'LastSentDate',
    size: 150,
  },
  {
    header: 'Last Sent By',
    accessorKey: 'LastSentBy',
    size: 150,
  },
  {
    header: 'Customer PO Number',
    accessorKey: 'CustomerPONumber',
    size: 150,
  },
  {
    header: 'Is Merge',
    accessorKey: 'IsMerge',
    size: 150,
  },
  {
    header: 'Due Date',
    accessorKey: 'DueDate',
    size: 150,
  },
  {
    header: 'Balance',
    accessorKey: 'Balance',
    size: 150,
  },
  {
    header: 'Due Day',
    accessorKey: 'DueDay',
    size: 150,
  },
  {
    header: 'Pro Number',
    accessorKey: 'ProNumber',
    size: 150,
  },
  {
    header: 'Order ID',
    accessorKey: 'order_id',
    size: 150,
  },
  {
    header: 'Further Status',
    accessorKey: 'FutherStatus',
    size: 150,
  },
  {
    header: 'Previous Invoice Total',
    accessorKey: 'PreviousInvoiceTotal',
    size: 150,
  }
];