interface ILicense {
  id: number,
  label: string,
  unit: string,
  property_address: string,
  lease_end_date: string,
  amount: number,
  cta?: React.ReactNode,
}

interface ILicenseItems {
  data: ILicense[],
}

export type { ILicense, ILicenseItems };
