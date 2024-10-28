"use client";

import React, { FC, ReactNode } from "react";
import useViewportHeightEffect from "./useViewportHeightEffect";

interface ViewportHeightProviderProps {
  children: ReactNode;
}

const ViewportHeightProvider: FC<ViewportHeightProviderProps> = ({
  children,
}) => {
  useViewportHeightEffect();
  return <>{children}</>;
};

export default ViewportHeightProvider;
