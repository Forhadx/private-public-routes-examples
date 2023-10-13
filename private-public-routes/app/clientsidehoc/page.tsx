"use client";

import WithAuth from "@/util/WithAuth";

const ClientSideHOC = () => {
  return <div>Client Side HOC </div>;
};

export default WithAuth(ClientSideHOC);
