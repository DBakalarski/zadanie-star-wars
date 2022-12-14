export type Breadcrumbs = {
  href: string;
  label: string;
};

export type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  characters: string[];
  url: string;
};

export type Character = {
  name: string;
  height: number;
  mass: string;
  birth_year: string;
  films: string[];
  url: string;
};

export type Reviews = {
  movies: ReviewsInfo[];
  characters: ReviewsInfo[];
};

export type ReviewItem = {
  id: string;
  text: string;
  author: string;
};

export type ReviewsInfo = {
  id: string;
  reviews: ReviewItem[];
};

export type FormInput = {
  author: string;
  text: string;
  formState: {
    errors: boolean;
    isSubmitting: boolean;
  };
};

export enum ReviewType {
  MOVIE = 'MOVIE',
  CHARACTER = 'CHARACTER',
}
