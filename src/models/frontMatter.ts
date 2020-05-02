import { FluidObject } from 'gatsby-image';

export interface FrontMatter {
  title: string;
  date: string;
  image: ChildImageSharp | null;
  imageCredit: string | null;
}

export type ChildImageSharp = {
  childImageSharp: {
    fluid: FluidObject;
  };
};
