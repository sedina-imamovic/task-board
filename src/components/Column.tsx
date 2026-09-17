import type { ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = ({ title, children }: ColumnProps) => {
  return (
    <section className="bg-[#d9d0b8] p-5 rounded-lg">
      <h2 className="text-2xl font-bold text-[#3b2f2f] mb-5">
        {title}
        </h2>
      <div className="space-y-4"> 
        {children}
        </div>
    </section>
  );
};

export default Column;
