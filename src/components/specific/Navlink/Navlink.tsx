import React, { useMemo } from "react";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import clsx from "clsx";

export type NavlinkProps = LinkProps & {
  className?: string;
};

export const Navlink: React.FC<React.PropsWithChildren<NavlinkProps>> = ({
  children,
  className,
  ...props
}) => {
  const router = useRouter();

  const isActive = useMemo(
    () => router.asPath === props.href,
    [props.href, router.asPath]
  );

  return (
    <Link {...props} passHref>
      <a className={clsx(className)}>{children}</a>
    </Link>
  );
};
