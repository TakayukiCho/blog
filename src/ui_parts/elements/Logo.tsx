import { Link, useStaticQuery, graphql } from 'gatsby';
import LogoImg from '../../images/logo.svg';
import { Site } from '../../models/site';

const Logo = () => {
  const { site } = useStaticQuery<Site>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);

  return (
    <Link to="/">
      <img src={LogoImg} alt={site.siteMetadata.title} />
    </Link>
  );
};

export default Logo;
