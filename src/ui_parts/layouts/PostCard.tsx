import React from 'react';
import tw from 'twin.macro';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';
import DateLabel from '../elements/DateLabel';

const Wrapper = tw.article`mb-10 last:mb-0`;
const Title = tw.h2`text-gray-800 font-semibold whitespace-no-wrap text-xl`;

type Props = {
  title: string;
  date: string;
  image: FluidObject;
  imageCredit: string | null;
  slug: string;
};

const PostCard = ({ image, date, title, slug }: Props) => (
  <Wrapper>
    <Link to={slug}>
      <Img fluid={image} css={tw`mb-3`} />
      <DateLabel css={tw`mb-3`}>{date}</DateLabel>
      <Title>{title}</Title>
    </Link>
  </Wrapper>
);

export default PostCard;
