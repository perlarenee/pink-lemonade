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
  contributor_id: string;
  tags: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
}
export type LatestRefreshment = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  contributor_id: string;
  tags: string;
  date: string;
};
export type RefreshmentTable = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  contributor_id: string;
  tags: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
};

export type ContributorsTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_contributions: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedContributorsTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_contributions: number;
  total_pending: string;
  total_paid: string;
};

export type ContributorField = {
  id: string;
  name: string;
};

export type RefreshmentForm = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  contributor_id: string;
  tags: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
};


export type Selections = {
  id:string;
  frequency: string;
  instances: string;
};

export type Instance = {
  time: string;
  serving: string;
  types: string;
  formats: string;
}
