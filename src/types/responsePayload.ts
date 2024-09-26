export type IResponsePayLoad<DataType> = {
  ErrorMsg: string;
  ErrorSeverity: number;
  ErrorSource: string;
  Page: number | null;
  Result: DataType;
  Status: boolean;
}
