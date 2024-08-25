export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Contributor = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Refreshment = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  customer_id: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
}

