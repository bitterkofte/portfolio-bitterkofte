import about from './about'
import me from '../../assets/alonso2.jpg'
import GrandButton from '../Buttons/GrandButton'
import Paragraph from '../General/Paragraph'
import Contacts from './Contacts'

const AboutSection = () => {
  return (
    <div className="flex d-lg:flex-col-reverse justify-center items-stretch gap-20 text-justify ">
      <div className="flex flex-col justify-between gap-4 flex-[2] font-thin">
        <p className='dark:text-neutral-200 duration-500'>{ about.firstP }</p>
        <p className='dark:text-neutral-200 duration-500'>{ about.secondP }</p>
        <p className='dark:text-neutral-200 duration-500'>{ about.thirdP }</p>
        {/* <Paragraph text={about.firstP}/>
        <Paragraph text={about.firstP}/>
        <Paragraph text={about.firstP}/> */}
        {/* <GrandButton text="Read more..." color="bg-red-300 dark:bg-red-700" /> */}
        <Contacts />
      </div>
      <img className="w-52 d-lg:w-3/4 flex-[1] self-center rounded-xl drop-shadow-2xl" src={me} alt="me" />
    </div>
  )
}
export default AboutSection