import sanity from "@/services/sanity";

export const fetchFeaturedProjects = () => {
  const query = `*[_type == 'project']{
    _id,
    name,
    slug,
    foundationDate
  }[0..1]`;

  return sanity.fetch(query);
};

export const fetchProjects = ({ page = 1, limit = 20 } = {}) => {
  const start = (page < 0 ? 1 : page) - 1;
  const end = limit - 1;
  const query = `*[_type == 'project']{
    _id,
    name,
    slug,
    foundationDate,
    origin->{
      name,
      slug
    },
    projectFounder->{
      fullname,
      slug
    },
    "categories": category[]->{
      _id,
      name,
      slug
    }
  }[${start}..${end}]`;
  return sanity.fetch(query);
};

export const fetchProject = slug => {
  const query = `
    *[_type == 'project' && slug.current == $slug] {
      _id,
      slug,
      name,
      foundationDate,
      origin->{
        name,
        slug
      },
      projectFounder->{
        fullname,
        slug
      },
      "categories": category[]->{
        _id,
        name,
        slug
      },
      introduction,
      description,
      recommended[]->{
        _id,
        slug,
        name
      },
    }[0]
  `;
  return sanity.fetch(query, {
    slug
  });
};
