export const ROUTES = {
  HOME: "/",

  SEARCH: "/search",

  PUBLISH: "/publish",

  LISTING_DETAILS: (id: number | string) =>
    `/listing/${id}`,
};