import Link from "next/link";
import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from '../../../assets/images/services/hands.svg';

const ImgText = ({ data, pb }) => {
  return (
    <section className={`w-full bg-[#fff] ${pb ? "pt-[55px] md:pt-[145px] pb-[70px] xl:pb-[300px]" : "pt-[55px] md:pt-[145px] pb-[15px] xl:pb-[145px] "}`}>
      <div className="myContainer flex justify-end flex-col xl:flex-row relative">
        <div className='absolute left-0 top-0 xl:top-[unset] max-w-[85%] sm:max-w-[90%] md:max-w-[100%] xl:max-w-[46%]'>
          <div className='max-w-[100%] xl:max-w-[550px ] sc1350:max-w-[780px ] left-0 after:w-[100px] md:after:w-[200px] relative after:h-[100px] md:after:h-[200px] after:bg-[#0F2E3C] after:rounded-[100px] after:right-[-15px] sm:after:right-[-35px] after:bottom-[-15px] sm:after:bottom-[-40px] after:absolute after:z-[-1] z-[2]
        before:w-[150px] md:before:w-[337px] relative before:h-[100px] md:before:h-[200px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-30px] sm:before:top-[-50px] before:absolute
        '><Image src={data.img} />
          </div>
        </div>
        <div className="w-full xl:w-[50%] pt-[85%] md:pt-[650px] xl:pt-0">
          <h1 className="fpr text-[32px] md:text-[60px] leading-[32px] md:leading-[100px]  text-[#0F2E3C] pt-[10px] md:pt-[40px]">
            {data.title}
          </h1>
          <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[26px] text-[#555555] pt-[15px] pb-[20px] md:pb-[40px]">
            {data.paragraph1}
          </p>
          <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[26px] text-[#555555]">
            {data.paragraph2}
          </p>
          <Link href={`/${data.link}`}>
          <a className="fgr w-[181px] h-[50px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[24px] leading-[16px] md:leading-[26px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-[20px] flex justify-center items-center mt-[30px]">
            Learn more
          </a>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default ImgText;
