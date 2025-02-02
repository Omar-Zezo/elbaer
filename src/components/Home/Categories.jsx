import { faCartPlus, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Hands, Img1 } from '../../images/imgs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Categories = () => {
  return (
    <div style={{background: `url('${Hands}')`, backgroundSize:"cover"}} className='pt-[120px] pb-[90px]'>
        <div className='container flex flex-col gap-8'>
           <div className='flex flex-col gap-5'>
            <p className='text-[#aaa] text-lg font-medium'>أهلا بكم في جمعية البر بجدة</p>
            <h3 className='text-[33px] text-secondryColor font-bold'>
            للوصول إلى قنوات التبرع الرقمية لدينا يرجى اختيار إحدى الأقسام الظاهرة أو المزيد
            </h3>
           </div>
           <div className='flex gap-5'>

            <div className='w-1/4 flex flex-col gap-4 bg-white border border-[#e1e1e1] p-[15px] rounded-[15px] hover:shadow-2xl duration-300'>
                <div className='flex'>
                    <img width={80} height={70} src={Img1} alt='صندوق كفالة إيواء'/>
                    <div className='w-fit mr-auto flex flex-col gap-1'>
                        <p className='text-[30px] text-black font-bold'>1000</p>
                        <p className='text-[#ccc] text-sm'>ريال سعودي</p>
                    </div>
                </div>
                <h3 className='min-h-[55px] text-xl text-[#444]'>صندوق كفالة إيواء</h3>
                <div className='flex flex-col gap-2'>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-1' icon={faCartPlus} />
                    أضف إلى السلة
                    </button>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-2' icon={faWallet} />
                    أدفع الأن
                    </button>
                </div>
            </div>

            <div className='w-1/4 flex flex-col gap-4 bg-white border border-[#e1e1e1] p-[15px] rounded-[15px] hover:shadow-2xl duration-300'>
                <div className='flex'>
                    <img width={80} height={70} src={Img1} alt='صندوق كفالة إيواء'/>
                    <div className='w-fit mr-auto flex flex-col gap-1'>
                        <p className='text-[30px] text-black font-bold'>1000</p>
                        <p className='text-[#ccc] text-sm'>ريال سعودي</p>
                    </div>
                </div>
                <h3 className='min-h-[55px] text-xl text-[#444]'>صندوق كفالة إيواء</h3>
                <div className='flex flex-col gap-2'>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-1' icon={faCartPlus} />
                    أضف إلى السلة
                    </button>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-2' icon={faWallet} />
                    أدفع الأن
                    </button>
                </div>
            </div>

            <div className='w-1/4 flex flex-col gap-4 bg-white border border-[#e1e1e1] p-[15px] rounded-[15px] hover:shadow-2xl duration-300'>
                <div className='flex'>
                    <img width={80} height={70} src={Img1} alt='صندوق كفالة إيواء'/>
                    <div className='w-fit mr-auto flex flex-col gap-1'>
                        <p className='text-[30px] text-black font-bold'>1000</p>
                        <p className='text-[#ccc] text-sm'>ريال سعودي</p>
                    </div>
                </div>
                <h3 className='min-h-[55px] text-xl text-[#444]'>صندوق كفالة إيواء</h3>
                <div className='flex flex-col gap-2'>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-1' icon={faCartPlus} />
                    أضف إلى السلة
                    </button>
                    <button className='flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]'>
                    <FontAwesomeIcon className='size-5 ml-2' icon={faWallet} />
                    أدفع الأن
                    </button>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Categories