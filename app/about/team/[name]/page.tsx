import React from "react";

const DynamicPage = async ({ params }) => {
  const name = (await params).name;
  return <div>{name}</div>;
};

export default DynamicPage;
