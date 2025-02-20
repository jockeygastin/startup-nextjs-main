type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  bullet1:string;
  bullet2:string;
  bullet3:string;
  bullet4:string;
  image: string;
  author: Author;
  publishDate: string;
};
