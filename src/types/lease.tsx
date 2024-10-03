interface ILicense {
  id: number,
  label: string,
  unit: string,
  property_address: string,
  lease_end_date: string,
  balance: number | string,
  cta?: React.ReactNode,
}

interface ILicenseItems {
  data: ILicense[],
}

export type { ILicense, ILicenseItems };
