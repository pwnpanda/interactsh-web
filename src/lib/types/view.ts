export const views = ['request', 'response', 'up_and_down', 'side_by_side'] as const;
export type View = (typeof views)[number];

export const View = {
  eq: {
    equals: (a: View, b: View) => a === b,
  },
};

export default View;
