import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import heroimg from "../../../assets/images/home/hero.svg";

const Hero = () => {
  return (
    <section className="w-full pt-[40px] pb-[60px] md:py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
        <div className="scale-[1.5]">
          <Image src={pattern} />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4"></div>
      <div className="myContainer flex flex-col justify-center relative z-[1]">
      <h1 className="fpr text-[35px] md:text-[60px]  leading-[35px] md:leading-[60px]  mx-auto text-[#0F2E3C] text-center max-w-[1374px] pt-[10px]">
          Coaching services designed for <br /> your personal needs
        </h1>
        <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[30px] text-[#555555] text-center max-w-[1020px] mx-auto pt-[15px] md:pt-[20px]">
          Get the support and help you need, when and where you need it most.
          Ihsan Coaching offers a diverse range of online coaching services
          tailored to individuals and couples seeking individual, premarital,
          marital or religious coaching. Each service is led by culturally
          competent coaches that are religiously informed and can empathize with
          your Islamic background and perspectives.
        </p>
      </div>
    </section>
  );
};

export default Hero;
