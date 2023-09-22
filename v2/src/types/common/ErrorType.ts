export interface ErrorType {
  errors: FiledErrorDTO[];
  message: string[];
  status: number;
  time: string;
}

interface FiledErrorDTO {
  field: string;
  message: string;
}
