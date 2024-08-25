// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
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
    id: '410544b2-4001-4271-9855-fec4b6a234n1',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'pending',
    date: '2022-12-06',
  },
  {
  contributor_id: contributors[1].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n2',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2022-11-14',
  },
  {
      contributor_id: contributors[4].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n3',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2022-10-29',
  },
  {
      contributor_id: contributors[3].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n4',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2023-09-10',
  },
  {
      contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n5',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'pending',
    date: '2023-08-05',
  },
  {
      contributor_id: contributors[2].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n6',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'pending',
    date: '2023-07-16',
  },
  {
      contributor_id: contributors[0].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n7',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'pending',
    date: '2023-06-27',
  },
  {
      contributor_id: contributors[3].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n8',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2023-06-09',
  },
  {
      contributor_id: contributors[4].id,
    id: '410544b2-4001-4271-9855-fec4b6a234n9',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2023-06-17',
  },
  {
      contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a23410',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'declined',
    date: '2023-06-07',
  },
  {
      contributor_id: contributors[1].id,
    id: '410544b2-4001-4271-9855-fec4b6a23411',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2023-08-19',
  },
  {
      contributor_id: contributors[5].id,
    id: '410544b2-4001-4271-9855-fec4b6a23412',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2023-06-03',
  },
  {
      contributor_id: contributors[2].id,
    id: '410544b2-4001-4271-9855-fec4b6a23413',
    title: 'Title Lorum Ipsum',
    content: 'Content Lorum Ipsum',
    image_url: '/customers/balazs-orban.png',
    status: 'approved',
    date: '2022-06-05',
  },
];



export { users, contributors, refreshments };
