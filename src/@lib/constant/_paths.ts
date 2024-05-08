export const Paths = {
  root: '/',
  privacyPolicy: '/privacy-policy',
  socials: {
    facebook: 'https://www.facebook.com/viewsbdportal',
    instagram: 'https://www.instagram.com/viewsbangladesh',
    twitter: 'https://twitter.com/Viewsbangladesh',
    linkedin: 'https://www.linkedin.com/company/viewsbangladesh',
    youtube: 'https://www.youtube.com/@viewsbangladesh',
    tiktok: 'https://www.tiktok.com/@viewsbangladesh',
  },
  service: {
    toAllServices: '/services',
    toSingleService: (slug: string) => `/services/${slug}`,
  },
  job: {
    toAllJobs: '/jobs',
    toSingleJob: (slug: string) => `/jobs/${slug}`,
    toApplyPage: (slug: string) => `/jobs/${slug}/apply`,
  },
  blogs: {
    toAllBlogs: '/blogs',
    toSingleBlog: (slug: string) => `/blogs/${slug}`,
  },
};
