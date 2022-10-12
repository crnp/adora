import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import image1 from "@/images/photo-1.jpg";
import image2 from "@/images/photo-2.jpg";
import image3 from "@/images/photo-3.jpg";

const Home: NextPage = () => {
  return (
    <Main
      meta={<Meta title="ADORA Beauty Bar" description="ADORA Beauty Bar." />}
    >
      <section className="hero md:h-screen py-12 md:py-0 flex flex-col md:flex-row items-center justify-center gap-8 px-12">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-4">ADORA Beauty Bar</h1>
          <button className="bg-[#F77FBE] hidden md:block px-4 py-2 rounded-lg hover:bg-[#FF99CC] hover:scale-105 transition all ease-out">
            Book an Appointment
          </button>
        </div>
        <div className="flex items-center justify-center basis-3/4">
          <Image src={image1} width={640} height={427} placeholder="blur" />
        </div>
        <button className="bg-[#F77FBE] block md:hidden px-4 py-2 rounded-lg hover:bg-[#FF99CC] hover:scale-105 transition all ease-out">
          Book an Appointment
        </button>
      </section>
      <section className="gallery">
        <h1 className="text-3xl text-center font-bold mb-8">Treatments</h1>
        <div className="flex flex-row gap-8 md:gap-6 px-12 mb-8 justify-center items-center ">
          <Link href="/facial">
            <div className="flex justify-center items-center flex-col cursor-pointer group">
              <Image
                src={image2}
                width={640}
                height={427}
                placeholder="blur"
                className="group-hover:scale-105 transition ease-out duration-200"
              />
              <h3 className="text-lg text-center font-semibold text-gray-200 group-hover:text-white">
                Facials
              </h3>
            </div>
          </Link>
          <Link href="/nails">
            <div className="flex justify-center items-center flex-col cursor-pointer group">
              <Image
                src={image3}
                width={640}
                height={427}
                placeholder="blur"
                className="group-hover:scale-105 transition ease-out duration-200"
              />
              <h3 className="text-lg text-center font-semibold text-gray-200 group-hover:text-white">
                Nails
              </h3>
            </div>
          </Link>
          <Link href="/hair">
            <div className="flex justify-center items-center flex-col cursor-pointer group">
              <Image
                src={image1}
                width={640}
                height={427}
                placeholder="blur"
                className="group-hover:scale-105 transition ease-out duration-200"
              />
              <h3 className="text-lg text-center font-semibold text-gray-200 group-hover:text-white">
                Hair
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </Main>
  );
};

export default Home;
