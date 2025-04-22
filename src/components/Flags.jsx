import indiaFlag from '../assets/indiaFlag.jpg'
import usFlag from '../assets/usFlag.webp'
import ukFlag from '../assets/ukFlag.webp'
import { useNavigate } from 'react-router-dom'

const Flags = () => {
    const navigate = useNavigate();
    function handleRedirect(country) {
        navigate(`/signin?country=${encodeURIComponent(country)}`)
    }
    return (
        <>
            <div className='w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto' >
                <div className='flex flex-col sm:flex-row  justify-around mt-10'>
                    <img src={ukFlag} alt="UK Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('UK')} />
                    <img src={indiaFlag} alt="India Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('India')} />
                    <img src={usFlag} alt="US Flag" className='sm:w-[30%] mb-10 sm:mb-0 cursor-pointer' onClick={() => handleRedirect('US')} />
                </div>
            </div>
        </>
    )
}

export default Flags;