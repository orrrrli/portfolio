"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/resources";
import { Flex, Spinner } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const DYNAMIC_ROUTES = ["/blog", "/work"] as const;

const checkRouteEnabled = (pathname: string | null): boolean => {
  if (!pathname) return false;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  for (const route of DYNAMIC_ROUTES) {
    if (pathname.startsWith(route) && routes[route]) {
      return true;
    }
  }

  return false;
};

const RouteGuard = ({ children }: RouteGuardProps): React.ReactNode => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsRouteEnabled(checkRouteEnabled(pathname));
    setLoading(false);
  }, [pathname]);

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
