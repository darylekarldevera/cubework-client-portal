import { Buffer } from "buffer";

interface IDocument {
  id: number;
  file: IFile;
  date: Date;
}

interface IFile {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
  filename: string;
  destination: string;
  fieldname: string;
  encoding: string;
  path: string;
};

export type { IDocument, IFile };