import sanity from "@/services/sanity";

export const fetchFeaturedProfile = () => {
  const query = `
    *[_type == 'profile' && portraitOfTheWeek == true]{
      _id,
      fullname,
      job,
      portrait,
      slug
    }[0]
  `;

  return sanity.fetch(query);
};
