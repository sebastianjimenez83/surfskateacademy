import Image from "next/image";
import homeHeader from "../../assets/img/homeHeader.jpg";

export default function HomeView() {
  return (
    <>
      <header className="mt-16 md:mt-24 relative ">
        <section className="flex lg:h-[80vh] px-4 lg:px-0 align-top max-w-screen-lg mx-auto justify-start flex-col-reverse lg:justify-between lg:flex-row lg:align-middle">
          <div className="text-center lg:text-left  relative z-20 my-10 self-center md:m-0 max-w-sm lg:max-w-lg mx-auto lg:self-end md:my-10 lg:mb-20">
            <h1 className="font-black tracking-wide">
              ON LAND SURF TRAINING FOR ALL LEVELS OF SURFERS IN SCOTLAND
            </h1>
          </div>
          <div className="w-full max-w-[480px] lg:m-0 mx-auto lg:self-end relative z-20 shadow-sm shadow-dark lg:shadow-none">
            <Image
              src={homeHeader}
              alt="logo"
              layout="responsive"
              className=""
            />
          </div>
        </section>

        <div className="absolute  w-full h-[50%] md:h-[60%] bottom-0 left-0 bg-orange z-0"></div>
      </header>
      <section className="px-4 py-5 mx-auto lg:px-0 max-w-screen-lg text-right">
        <a
          href="https://yowsurf.com/"
          className="uppercase font-sans font-black cursor-pointer text-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supported by <span className="text-black">YOW</span>
        </a>
      </section>
    </>
  );
}
