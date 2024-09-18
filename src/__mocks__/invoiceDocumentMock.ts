
import { IFile } from "@/types/invoiceDocuments";
import { faker } from "@faker-js/faker";
import { Buffer } from "buffer";

const INVOICE_DOCUMENT: IFile = {
  buffer: Buffer.from(faker.system.filePath()),
  mimetype: 'application/pdf',
  originalname: faker.system.fileName(),
  size: Buffer.byteLength(faker.system.filePath()),
  filename: faker.system.fileName(),
  destination: faker.system.directoryPath(),
  fieldname: '',
  encoding: '',
  path: faker.system.filePath(),
};

export { INVOICE_DOCUMENT };