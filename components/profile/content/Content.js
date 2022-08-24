import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from '../../../assets/images/services/hands.svg';

const Content = ({ data, pb }) => { 
  console.log(data)
  return (
    <section className={`w-full pt-[40px] md:pt-[140px] lg:pt-[100px] pb-[30px] md:pb-[70px] bg-[#fff] relativ e ${pb ? "pb-[300px]" : ""}`}>
      <div className="myContainer relative">


        <div className='w-full'>
          <div className='max-w-[300px] max-h-[300px] mx-auto left-0 after:w-[50px] md:after:w-[100px] relative after:h-[50px] md:after:h-[100px] after:bg-[#0F2E3C] after:rounded-[100px] after:right-[-20px] after:bottom-[-10px] after:absolute after:z-[-1] z-[2]
        before:w-[75px] md:before:w-[125px] relative before:h-[75px] md:before:h-[125px] before:bg-[#0F2E3C] before:rounded-[125px] before:left-[0] before:top-[-40px] sm:before:top-[-30px] before:absolute
        '>
            <div className="rounded-[250px] overflow-hidden ">
            {data?.profileImg &&  <Image src={data?.profileImg?.src} width={data?.profileImg?.width} height={data?.profileImg?.height}/>
           } </div>
          </div>
          <h1 className="mx-auto text-center fpr text-[32px] md:text-[60px] leading-[32px] md:leading-[100px]  text-[#0F2E3C] pt-[10px] md:pt-[40px]">
            {data.name}
          </h1>
        </div>



      </div>
      <div className="myContainer flex flex-col xl:flex-row justify-end relative">

      
        <div className="w-full xl:w-[100%]   md:pt-[680px] xl:pt-0">
           
          <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#555555] pt-[15px] md:pt-[35px]">
         {data.paragraph1}
          </p>
          <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#555555] pt-[35px] pb-[35px]">
          {data.paragraph2}
          </p>
           
        </div>
      </div>
    </section>
  );
};

export default Content;

