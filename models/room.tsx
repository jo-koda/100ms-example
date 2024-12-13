export interface Room {
  id?: string;
  name?: string;
  enabled?: boolean;
  description?: string;
  customer_id?: string;
  recordingSourceTemplate?: boolean;
  templateId?: string;
  template?: string;
  region?: string;
  createdAt?: string;
  key?: string;
  updatedAt?: string;
  largeRoom?: boolean;
  maxDurationSeconds?: number;
}
