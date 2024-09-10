// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User1',
    email: 'user+1@nextmail.com',
    password: '123456',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    name: 'User2',
    email: 'user+2@nextmail.com',
    password: '123456',
  },
];

const contributors = [
  {
    cont_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    cont_name: 'Evil Rabbit',
    cont_email: 'evil@rabbit.com',
    cont_image_url: '/images/contributors/evil-rabbit.png',
  },
  {
    cont_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    cont_name: 'Delba de Oliveira',
    cont_email: 'delba@oliveira.com',
    cont_image_url: '/images/contributors/delba-de-oliveira.png',
  },
  {
    cont_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    cont_name: 'Lee Robinson',
    cont_email: 'lee@robinson.com',
    cont_image_url: '/images/contributors/lee-robinson.png',
  },
  {
    cont_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    cont_name: 'Michael Novotny',
    cont_email: 'michael@novotny.com',
    cont_image_url: '/images/contributors/michael-novotny.png',
  },
  {
    cont_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    cont_name: 'Amy Burns',
    cont_email: 'amy@burns.com',
    cont_image_url: '/images/contributors/amy-burns.png',
  },
  {
    cont_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    cont_name: 'Balazs Orban',
    cont_email: 'balazs@orban.com',
    cont_image_url: '/images/contributors/balazs-orban.png',
  },
];

//status: pending|approved|declined
const refreshments = [
  {
    contributor_id: contributors[0].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a1',
    title: 'Wounded',
    content: '<p>The people who wound us, get no say in how we clean up the blood</p>',
    image_url: '/images/assets/IMG_7290.jpeg',
    tags: 'dark-beer',
    format: 'meme',
    length: '1',
    status: 'pending',
    date: '2022-12-06',
  },
  {
  contributor_id: contributors[1].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a2',
    title: 'Emotions',
    content: '<p>No child should ever hear: "You hurt god\'s heart"</p>',
    image_url: '/images/assets/IMG_7292.jpeg',
    tags: 'pink-lemonade',
    format: 'meme',
    length: '1',
    status: 'approved',
    date: '2022-11-14',
  },
  {
      contributor_id: contributors[4].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a3',
    title: 'Toetips',
    content: '<p>Your fingers have fingertips...</p>',
    image_url: '/images/assets/IMG_7455.jpeg',
    tags: 'flavored-latte',
    format: 'meme',
    length: '1',
    status: 'approved',
    date: '2022-10-29',
  },
  {
    contributor_id: contributors[3].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a4',
    title: 'Shrink',
    content: '<p>I refuse to shrink to be digestible. You can choke.</p>',
    image_url: '/images/assets/IMG_7924.jpeg',
    tags: 'hot-tea',
    format: 'meme',
    length: '1',
    status: 'approved',
    date: '2023-09-10',
  },
  {
      contributor_id: contributors[5].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a5',
    title: 'Rhythm',
    content: '<p>I finally found my rhythm...</p>',
    image_url: '/images/assets/IMG_7925.jpeg',
    tags: 'lite-beer, pink-lemonade',
    format: 'meme',
    length: '2',
    status: 'pending',
    date: '2023-08-05',
  },
  {
      contributor_id: contributors[2].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a6',
    title: 'Advice',
    content: '<p>If you wouldn\nt ask them for advice, then fuck their criticism.</p>',
    image_url: '/images/assets/IMG_7926.jpeg',
    tags: 'capuchino',
    format: 'meme, saying',
    length: '1',
    status: 'pending',
    date: '2023-07-16',
  },
  {
      contributor_id: contributors[0].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a7',
    title: 'Sunshine and roses',
    content: '<p>I don\'nt want your sunshine and roses...</p>',
    image_url: '/images/assets/IMG_7928.jpeg',
    tags: 'vodka, lite-beer',
    format: 'poetry',
    length: '5',
    status: 'pending',
    date: '2023-06-27',
  },
  {
      contributor_id: contributors[3].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a8',
    title: 'Until it\'s gone',
    content: '<p>Until it\'s gone...</p>',
    image_url: '/images/assets/IMG_7939.jpeg',
    tags: 'capuchino',
    format: 'poetry',
    length: '5',
    status: 'approved',
    date: '2023-06-09',
  },
  {
      contributor_id: contributors[4].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a234a9',
    title: 'Miss you',
    content: '<p>I think it\s importnt to realize...</p>',
    image_url: '/images/assets/IMG_7940.jpeg',
    tags: 'capuchino, hot-tea',
    format: 'poetry',
    length: '2',
    status: 'approved',
    date: '2023-06-17',
  },
  {
    contributor_id: contributors[5].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a23a10',
    title: 'Inferiority',
    content: '<p>No-one can make you...</p>',
    image_url: '/images/assets/IMG_7942.jpeg',
    tags: 'capuchino',
    format: 'meme',
    length: '1',
    status: 'declined',
    date: '2023-06-07',
  },
  {
    contributor_id: contributors[1].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a23a11',
    title: 'Girl',
    content: '<p>There is a girl inside...</p>',
    image_url: '/images/assets/IMG_7943.jpeg',
    tags: 'pink-lemonade',
    format: 'poetry',
    length: '5',
    status: 'approved',
    date: '2023-08-19',
  },
  {
    contributor_id: contributors[5].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a23a12',
    title: 'Unfuck yourself',
    content: '<p>Be who you were before...</p>',
    image_url: '/images/assets/IMG_8151.jpeg',
    tags: 'dark-beer',
    format: 'meme',
    length: '1',
    status: 'approved',
    date: '2023-06-03',
  },
  {
    contributor_id: contributors[2].cont_id,
    id: '410544b2-4001-4271-9855-fec4b6a23a13',
    title: 'Evidence',
    content: '<p>God screws with us</p>',
    image_url: '/images/assets/IMG_7283.jpeg',
    tags: 'vodka',
    format: 'meme',
    length: '1',
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
    description: 'A cold, refreshing beverage made of bright yellow lemons, fresh crimson straberries, sliced and crushed with sugar crystals. Served in a chilled glass over ice cubes, droplets of water beading on the outside.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23415',
    slug: 'hot-tea',
    name: 'Hot Tea',
    description: 'Deliciously hot and steamy, with a rich, herbal aroma. Served in a large tea cup big enough for you to hold with both hands.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23415',
    slug: 'lite-beer',
    name: 'Lite Beer',
    description: 'Cold and refreshing, but with a bite that creeps up on you, this refreshment is great for sitting out on the porch and watching the sunset after a long, hot, day of work. Served fresh out of the can.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23416',
    slug: 'flavored-latte',
    name: 'Flavored Latte',
    description: 'Aromatic, hot and steamy, comfortable, with a kick of caffeine. For days when you need to treat yourself, but still have to get shit done. Served in a to-go cup with a christmas tree on the front, and your name badly spelled.'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a23417',
    slug: 'capuchino',
    name: 'Capuchiono',
    description: 'The perfect refreshment for sitting down with friends in a tiny cafe with people all around, soft natural lighting, and retro pop music playing quietly enough not to disrupt conversations. Served in a beautiful capuchino cup with an elaborate design swirled in the foam on top, and just a tiny bit of cinnamon.'
  }

]

//formats
const formats = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a23418',
    slug: 'meme',
    name: 'Meme',
    description: 'A simple, eye catching, image with overlaid text.'
  },{
    id: '410544b2-4001-4271-9855-fec4b6a23419',
    slug: 'poetry',
    name: 'Poetry',
    description: 'Literature that evokes a concentrated imaginative awareness of experience or a specific emotional response through language chosen and arranged for its meaning, sound, and rhythm.'
  },{
    id: '410544b2-4001-4271-9855-fec4b6a23420',
    slug: 'short-story',
    name: 'Short Story',
    description: 'A short, thought provoking, story.'
  },{
    id: '410544b2-4001-4271-9855-fec4b6a23421',
    slug: 'saying',
    name: 'Saying',
    description: 'A brief expression or thought.'
  }
]

//user selections
const selections = [
  {
    id:'410544b2-4001-4271-9855-fec4b6a6442a',
    frequency: '2',
    instances: [
      {
        time: '9:00am',
        serving: '5m',
        types: 'pink-lemonade',
        formats: 'meme, short-stories'
      },
      {
        time: '6:00pm',
        serving: '15m',
        types: 'capuchino',
        formats: 'meme, poetry'
      },
    ],
    
    
  },
  {
    id:'410544b2-4001-4271-9855-fec4b6a6442b',
    frequency: '1',
    instances: [
      {
        time: '9:00am',
        serving: '5m',
        types: 'hot-tea',
        formats: 'poetry, short-stories'
      }
    ]
    
  }
]



export { users, contributors, refreshments, tags, selections, formats };
