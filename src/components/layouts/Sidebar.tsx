import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu, GiComb, GiFingernail } from "react-icons/gi";
import { IoSparkles } from "react-icons/io5";
import { FaMask } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SidebarItem } from "@/components/layouts/SidebarItem";

export const Sidebar = () => (
  <>
    <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 right-4 inline-flex md:hidden items-center peer justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-[#F77FBE] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F77FBE] group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6"
          aria-hidden="true"
        />
      </Disclosure.Button>
      <div className="p-6 w-1/2 h-screen bg-[#a581a5] z-20 fixed top-0 -left-96 md:w-60 md:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
            ADORA
          </h1>
          <div className="my-4 border-b border-gray-100 pb-4">
            <SidebarItem
              name="Home"
              icon={<MdOutlineSpaceDashboard />}
              link="/"
            />
            <SidebarItem
              name="Facial Treatments"
              icon={<FaMask />}
              link="/facial/"
            />
            <SidebarItem
              name="Nail Treatments"
              icon={<GiFingernail />}
              link="/nails/"
            />
            <SidebarItem
              name="Hair Treatments"
              icon={<GiComb />}
              link="/hair/"
            />
            <SidebarItem
              name="Special Deals"
              icon={<IoSparkles />}
              link="/deals/"
            />
          </div>
          <div className="flex gap-8">
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-3xl text-gray-100 hover:text-white cursor-pointer" />
            </Link>
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-3xl text-gray-100 hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  </>
);
