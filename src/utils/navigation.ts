// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes) => { 
  const foundRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  return foundRoute;
};

export const getActiveRoute = (routes): string => {
  const route = findCurrentRoute(routes);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (routes): boolean => {
  const route = findCurrentRoute(routes);
  return route?.secondary;
};

export const getActiveNavbarText = (routes): string | boolean => {
  return getActiveRoute(routes) || false;
};
