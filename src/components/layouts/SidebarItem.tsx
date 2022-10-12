import Link from "next/link";
import type { ReactNode } from "react";

type ISidebarItemProps = {
  name: string;
  icon: ReactNode;
  link: string;
};

export const SidebarItem = (props: ISidebarItemProps) => (
  <Link href={props.link}>
    <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-[#FF99CC] p-2 rounded-md group cursor-pointer hover:shadow-lg">
      <div className="text-2xl text-gray-100 group-hover:text-white">
        {props.icon}
      </div>
      <h3 className="text-base text-gray-100 group-hover:text-white font-semibold">
        {props.name}
      </h3>
    </div>
  </Link>
);
