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
  tags: string;
  format: string;
  length: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
  contributor_id: string;
  cont_name: string;
  cont_email: string;
  cont_image_url: string;
}
export type LatestRefreshment = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  contributor_id: string;
  tags: string;
  format: string;
  length: string;
  date: string;
};
export type RefreshmentsTable = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  tags: string;
  format: string;
  length: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
  contributor_id: string;
  cont_name: string;
  cont_email: string;
  cont_image_url: string;
};

export type RefreshmentsContributorsTable ={
  id: string;
  title: string;
  content: string;
  image_url: string;
  tags: string;
  format: string;
  length: string;
  date: string;
  status: 'pending' | 'declined' | 'approved';
  contributor_id: string;
  cont_name: string;
  cont_email: string;
  cont_image_url: string;
}

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
  total_pending: number;
  total_approved: number;
  total_declined: number;
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
  format: string;
  length: string;
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
