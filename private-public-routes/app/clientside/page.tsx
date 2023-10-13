"use client";

import { sessionStatus } from "@/util/session";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const ClienSidePage = () => {
  const session = sessionStatus;

  useLayoutEffect(() => {
    if (!session) {
      redirect("/");
    }
  }, [session]);

  return <div>client Side Page...</div>;
};

export default ClienSidePage;
