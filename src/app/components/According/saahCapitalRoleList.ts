export const saahCapitalRoleListings = [
    {
      uid: 'role001',
      title: 'Growing market with strong potential',
      description:
        'Saah Capital recognizes the potential for further growth in the Saudi market and provides local investors and traders with sophisticated financial tools to capitalize on these opportunities.',
    },
    {
      uid: 'role002',
      title: 'Expanding mutual fund market',
      description:
        'Saah Capital offers a range of mutual fund products tailored to the Saudi market, providing investors with diversified and professionally managed portfolios.        ',
    },
    {
      uid: 'role003',
      title: 'Flourishing market indices',
      description:
        'Saah Capital recognizes the potential for further growth in the Saudi market and provides local investors and traders with sophisticated financial tools to capitalize on these opportunities.',
    },
     {
      uid: 'role004',
      title: '44% annual increase in MENA IPOs',
      description:
        'Saah Capital actively participates in IPO investments, leveraging AI algorithms to identify lucrative opportunities and offering financial tools that enhance investor success.',
    }, {
      uid: 'role005',
      title: 'Oversubscribed IPOs in Saudi Arabia',
      description:
        'Saah Capital acts as a bridge between investors and oversubscribed IPOs, ensuring that clients can access these high-demand offerings efficiently.',
    },
    {
      uid: 'role006',
      title: 'VISION 2030 Attracted more foreign investment',
      description:
        'involves implementing reforms, modernizing infrastructure, and increasing transparency to create a more attractive and competitive marketplace for investors.',
    },
  
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type saahCapitalRoleList = ElementType<typeof saahCapitalRoleListings>