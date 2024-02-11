import routes from "@/routes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = () => { 
  const foundRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  return foundRoute;
};

export const getActiveRoute = (): string => {
  const route = findCurrentRoute();
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (): boolean => {
  const route = findCurrentRoute();
  return route?.secondary;
};

export const getActiveNavbarText = (): string | boolean => {
  return getActiveRoute() || false;
};

export const useActiveNavbarInfo = () => {
  const [activeRoute, setActiveRoute] = useState("Default Brand Text");
  const [activeNavbar, setActiveNavbar] = useState(false);
  const pathname = usePathname()



  useEffect(() => {
    setActiveRoute(getActiveRoute());
    setActiveNavbar(getActiveNavbar());
  }, [pathname]);

  return {
    activeRoute,
    activeNavbar
  };
};

