import indiaFlag from '../assets/indiaFlag.jpg'
import usFlag from '../assets/usFlag.webp'
import ukFlag from '../assets/ukFlag.webp'

const Flags = () => {
    return (
        <>
            <div className='w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto' >
                <div className='flex flex-col sm:flex-row  justify-around mt-10'>
                    <img src={ukFlag} alt="" className='sm:w-[30%] mb-10 sm:mb-0' />
                    <img src={indiaFlag} alt="" className='sm:w-[30%] mb-10 sm:mb-0' />
                    <img src={usFlag} alt="" className='sm:w-[30%] mb-10 sm:mb-0' />
                </div>
            </div>
        </>
    )
}

export default Flags;