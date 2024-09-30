interface ILicenseSelect {
  id: number,
  label: string,
  unit: string,
  property_address: string,
  lease_end_date: string,
}

interface ILicenseSelectItems {
  data: ILicenseSelect[],
}

export type { ILicenseSelect, ILicenseSelectItems };
