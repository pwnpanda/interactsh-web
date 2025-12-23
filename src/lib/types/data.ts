import { Protocol } from './protocol';

export type DNSRecordType = 'A' | 'AAAA' | 'ALIAS' | 'CNAME' | 'MX' | 'NS' | 'PTR' | 'SOA' | 'TXT';

export interface Data {
  id: string;
  'full-id': string;
  protocol: Protocol;
  'raw-request': string;
  'remote-address': string;
  timestamp: string;
  'unique-id': string;
  'raw-response'?: string;
  'q-type'?: DNSRecordType;
  'smtp-from'?: string;
}

export const Data = {
  eq: {
    equals: (a: Data, b: Data) => a.id === b.id,
  },
};

export const filterByProtocols = (ps: Protocol[]) => (data: Data[]): Data[] =>
  data.filter((d) => ps.includes(d.protocol));

export default Data;

