import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";
import { Sidebar } from "@/components/layouts/Sidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => (
  <div className="text-gray-100 antialiased">
    {props.meta}
    <Sidebar />
    <div className="md:ml-60">
      {props.children}
      <div className="border-t border-gray-300 py-4 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
    </div>
  </div>
);
