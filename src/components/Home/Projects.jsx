import { faBoxesStacked, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className="mt-10">
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-5'>
                <p className='text-lg text-[#aaa] font-medium'>
                تبرع الأن
                </p>
                <h3 className='text-[36px] text-secondryColor font-bold'>
                تبرع لجمعية البر بجدة
                </h3>
                </div>
                <p className="w-[37%] text-lg text-[#7e7e7e] font-bold">
                قناة آمنة للتبرع لمشاريع البر الخيرية المختلفة، ويستفيد منه أكثر من 32000 أسرة محتاجة مابين أيتام وأرامل وفقراء ، من خلال الزكوات والصدقات والوقف الخيري
                </p>
            </div>
            <div className="flex flex-col gap-8">
                <ul className="flex mt-[60px]">
                    <li className="flex gap-2 items-center pl-5 text-xl font-bold text-mainColor border-l-2 border-[#ccc] cursor-pointer">
                    <FontAwesomeIcon className="text-2xl" icon={faBoxesStacked} />
                    مشاريع الجمعية
                    </li>
                    <li className="flex items-center pr-5 font-bold gap-2 text-xl text-[#aaa] cursor-pointer">
                    <FontAwesomeIcon className="text-2xl" icon={faUsers} />
                    حالات واردة
                    </li>
                </ul>
                <div className="flex justify-between flex-wrap">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects