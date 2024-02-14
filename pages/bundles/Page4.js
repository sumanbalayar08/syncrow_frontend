import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Progress from "../../components/progress";
import FormNew from "../../components/FormNew";

import { useRouter } from "next/router"
function Page6({ active, setActive, data }) {
  const router = useRouter();
  return (
    <div className={`relative ${active === 4 ? "" : "hidden"} `}>
      <Header color="black" />

      <div className="flex justify-center items-center pt-0 laptop:pt-28">
        <div className="container px-4 md:px-20 mx-auto  flex laptop:flex-row laptop:gap-0 gap-10 flex-col middle:my-10 mt-36 mb-16">
          <div className="flex-1 items-center flex flex-col justify-center laptop:-ml-20">
            <h1
              className="laptop:text-6xl text-5xl desktop:text-7xl font-normal text-default w-5/6 tracking-wide capitalize text-center"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              Our team of experts will get in touch with you soon
            </h1>
          </div>
          <div className="flex-1 laptop:ml-20">
            <FormNew data={data} router={router} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
