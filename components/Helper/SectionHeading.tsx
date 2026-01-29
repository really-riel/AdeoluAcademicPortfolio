import React from "react";

type Props = {
  title_1: string;
  title_2: string;
  description?: string;
};

const SectionHeading = ({ title_1, title_2, description }: Props) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold">
        {title_1}
        <span className="text-blue-700"> {title_2}</span>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
