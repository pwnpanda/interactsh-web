export interface Tab {
  correlationId: string;
  'unique-id': string;
  name: string;
  note: string;
  url: string;
}

export const Tab = {
  eq: {
    equals: (a: Tab, b: Tab) => a['unique-id'] === b['unique-id'],
  },
};

export default Tab;
