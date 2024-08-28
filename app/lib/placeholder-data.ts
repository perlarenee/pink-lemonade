// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User1',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    name: 'User2',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const contributors = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

//status: pending|approved|declined
const refreshments = [
  {
    contributor_id: contributors[0].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a1',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'capuchino',
    status: 'pending',
    date: '2022-12-06',
  },
  {
  contributor_id: contributors[1].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a2',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'pink-lemonade',
    status: 'approved',
    date: '2022-11-14',
  },
  {
      contributor_id: contributors[4].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a3',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'flavored-latte',
    status: 'approved',
    date: '2022-10-29',
  },
  {
    contributor_id: contributors[3].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a4',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'hot-tea',
    status: 'approved',
    date: '2023-09-10',
  },
  {
      contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a5',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'lite-beer, pink-lemonade',
    status: 'pending',
    date: '2023-08-05',
  },
  {
      contributor_id: contributors[2].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a6',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'capuchino',
    status: 'pending',
    date: '2023-07-16',
  },
  {
      contributor_id: contributors[0].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a7',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'pink-lemonde, lite-beer',
    status: 'pending',
    date: '2023-06-27',
  },
  {
      contributor_id: contributors[3].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a8',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'capuchino',
    status: 'approved',
    date: '2023-06-09',
  },
  {
      contributor_id: contributors[4].id,
    id: '410544b2-4001-4271-9855-fec4b6a234a9',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'capuchino, hot-tea',
    status: 'approved',
    date: '2023-06-17',
  },
  {
    contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a23a10',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'capuchino',
    status: 'declined',
    date: '2023-06-07',
  },
  {
    contributor_id: contributors[1].id,
    id: '410544b2-4001-4271-9855-fec4b6a23a11',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'pink-lemonade',
    status: 'approved',
    date: '2023-08-19',
  },
  {
    contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a23a12',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'pink-lemonade',
    status: 'approved',
    date: '2023-06-03',
  },
  {
    contributor_id: contributors[2].id,
    id: '410544b2-4001-4271-9855-fec4b6a23a13',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    tags: 'pink-lemonade',
    status: 'approved',
    date: '2022-06-05',
  },
];

//Ingredient types or tags
const tags = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a23414',
    slug: 'pink-lemonade',
    name: 'Pink Lemonade',
    desc: 'A cold, refreshing beverage made of bright yellow lemons, fresh crimson straberries, sliced and crushed with sugar crystals. Served in a chilled glass over ice cubes, droplets of water beading on the outside.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23415',
    slug: 'hot-tea',
    name: 'Hot Tea',
    desc: 'Deliciously hot and steamy, with a rich, herbal aroma. Served in a large tea cup big enough for you to hold with both hands.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23415',
    slug: 'lite-beer',
    name: 'Lite Beer',
    desc: 'Cold and refreshing, but with a bite that creeps up on you, this refreshment is great for sitting out on the porch and watching the sunset after a long, hot, day of work. Served fresh out of the can.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23416',
    slug: 'flavored-latte',
    name: 'Flavored Latte',
    desc: 'Aromatic, hot and steamy, comfortable, with a kick of caffeine. For days when you need to treat yourself, but still have to get shit done. Served in a to-go cup with a christmas tree on the front, and your name badly spelled.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23417',
    slug: 'capuchino',
    name: 'Capuchiono',
    desc: 'The perfect refreshment for sitting down with friends in a tiny cafe with people all around, soft natural lighting, and retro pop music playing quietly enough not to disrupt conversations. Served in a beautiful capuchino cup with an elaborate design swirled in the foam on top, and just a tiny bit of cinnamon.'
  }

]

//user selections
const selections = [
  {
    user_id:'410544b2-4001-4271-9855-fec4b6a6442a',
    frequency: '2',
    0: {
      time: '9:00am',
      serving: '5m',
      types: 'pink-lemonade',
      formats: 'meme, short-stories'
    },
    1: {
      time: '6:00pm',
      serving: '15m',
      types: 'capuchino',
      formats: 'meme, poetry'
    },
  },
  {
    user_id:'410544b2-4001-4271-9855-fec4b6a6442b',
    frequency: '1',
    0: {
      time: '9:00am',
      serving: '5m',
      types: 'hot-tea',
      formats: 'poetry, short-stories'
    }
  }
]



export { users, contributors, refreshments, tags, selections };
