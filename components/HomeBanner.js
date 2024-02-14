import { motion } from "framer-motion";

const HomeBanner = () => {
  const guthen = "Guthen Bloots Personal Use";
  return (
    <div className="relative flex flex-col-reverse lg:flex-col lg:justify-center text-white lg:max-h-[1200px] lg:min-h-[100vh] w-[100%] lg:pl-[10%] lg:pt-[5%]">
      {/* desktop img */}
      <img
        className="hidden lg:block absolute h-[100%] -z-10 top-0 left-0 w-[100%] object-cover"
        src="/home-upgrade.png"
        alt="..."
      />
      {/* mobile img */}
      <img
        className="block lg:hidden relative lg:h-[100%] lg:-z-10 w-[100%] object-cover"
        src="/home-upgrade-m.png"
        alt="..."
      />
      <div className="relative p-[2rem] bg-[#616A6B] lg:bg-[#00000000] lg:p-0">
        <motion.p
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          style={{ fontFamily: `${guthen}` }}
          className=" lg:text-[6rem] text-[4rem] text-center lg:text-left"
        >
          Upgrade
        </motion.p>
        <motion.p
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className=" lg:text-[1.3rem] text-[1rem] font-[aftika-light] tracking-wide text-center lg:text-left lg:w-[50%]"
        >
          your space and enjoy the benefits of{" "}
          <span
            style={{ fontFamily: `${guthen}` }}
            className="lg:text-[1.6rem] px-[.7rem]"
          >
            Upgraded
          </span>{" "}
          security, safety and energy efficiency conveniently from a single hub.
        </motion.p>
      </div>
    </div>
  );
};

export default HomeBanner;
