// import axios from "axios"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/layout";
import couple from '../../assets/images/services/couple.svg';
import Content from "../../components/profile/content/Content";
import meeting from '../../assets/images/about-us/meeting.svg';
import person1 from '../../assets/images/about-us/person1.svg';
import person2 from '../../assets/images/about-us/person2.svg';
import person3 from '../../assets/images/about-us/person7.svg';
import person4 from '../../assets/images/about-us/person8.svg';
import person5 from '../../assets/images/about-us/person5.svg';
import person6 from '../../assets/images/about-us/person6.svg';
import person7 from '../../assets/images/about-us/person4.svg';
import person8 from '../../assets/images/about-us/person3.svg';
import BrownSection from "../../components/profile/brown-section/BrownSection";

const profiles = [
    {
        id:'Farhan_Ahmed',
    profileImg: person1,
    name: 'Farhan Ahmed',
    slugName: 'Farhan_Ahmed',
    designation: 'Founder & Coach',
    status: 'Masters in Clinical Mental Health Counseling',
    email: 'farhan.ahmed@ihsancoaching.com',
    paragraph1: 'Farhan Ahmed is a Licensed Clinical Professional Counselor and the founder of Ihsan Coaching. He completed his Masters in Clinical Mental Health Counseling from Argosy University. Prior to that, he graduated from Benedictine University with a Bachelors in Psychology. Farhan has worked as a therapist focusing on anxiety, depression, OCD, marital discord, sexual intimacy, self-esteem issues, anger management, manic disorders, and spiritual/personal development.',
    paragraph2: 'In addition to having his Masters, Farhan also has extensive Islamic knowledge. He was part of the first graduating class of the Dream Program at Bayyinah Institute back in 2010. Afterwards, he went on to study Islamic sciences at both DarusSalam Seminary located in Lombard, IL and Darul Qasim located in Glen Ellyn, IL. There he spent time learning Islamic Jurisprudence, Aqeedah, Tafsir, higher level Arabic, and Hadith. Farhan currently has 3 years left to complete his Aalimiyah degree insha Allah. Farhan lives in the Chicagoland area with his wife and three kids.'
}   ,
{
    id:'Maria_Mir',
    profileImg:person2
},
{
    id:'Rehena_Rana',
    profileImg:person3
},
{
    id:'Rawand_Abdelghani',
    profileImg:person4
},
{
    id:'Asmaa_Mahran',
    profileImg:person5
},
{
    id:'Mohammed_Bemat_Coach',
    profileImg:person6
},
{
    id:'Mufti_Zeshan_Ahmed',
    profileImg:person7
},
{
    id:'Imam_Azhar_Subedar',
    profileImg:person8
},
 ]
export default function Profile({id}) {
    
    const [profileData, setProfileData] = useState({})
    useEffect( () => {
        let data =[]
        profiles.map(profile=>{
            profile.id === id && data.push(profile)
        })
        setProfileData({...data[0]})
         
    }, [])
    return (
        <Layout>
            {profileData && <Content data={profileData} />}
            <BrownSection id={profileData.id}/>
        </Layout>
    );
}

export async function getServerSideProps(ctx){
    const  {id} =  await ctx.query
    return{
        props:{
            id
        }
    }
  }