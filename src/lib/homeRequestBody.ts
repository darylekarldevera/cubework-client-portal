import { IHomeRequestPayload, IHomeRequestPayloadData } from "@/types/homeActivityTable";

const homeQueryRequestBody = (body: Partial<IHomeRequestPayloadData>): IHomeRequestPayload => {
  return {
    UserID: 16405,
    Data: {
      ThirdParty_Program: body?.ThirdParty_Program ?? 'Yardi',
      ThirdParty_CustomerID: body?.ThirdParty_CustomerID ?? '',
      ThirdParty_SiteID: body?.ThirdParty_SiteID ?? '',
      ReferenceNumber: body?.ReferenceNumber ?? '',
      InvoiceDateStart: body?.InvoiceDateStart ?? '',
      InvoiceDateEnd: body?.InvoiceDateEnd ?? '',
      Category: body?.Category ?? '',
      PeriodStart: body?.PeriodStart ?? '',
      PeriodEnd: body?.PeriodEnd ?? '',
      CustomerPONumber: body?.CustomerPONumber ?? '',
      PageIndx: body?.PageIndx?.toString() ?? '1',
      PageSize: body?.PageSize?.toString() ?? '10',
      DataSource: body?.DataSource ?? 'Tenant Portal',
      InvoiceNumber: body?.InvoiceNumber ?? 'CW00',
      ProNumber: body?.ProNumber ?? '',
      InvoiceStatus: body?.InvoiceStatus ?? '13',

      BilltoID: body?.BilltoID ?? -1,
      BilltoIDs: body?.BilltoIDs ?? [],
      BilltoCustomerCodes: body?.BilltoCustomerCodes ?? ['T0002526', 't0000001'],
    },
  };
};

export default homeQueryRequestBody;