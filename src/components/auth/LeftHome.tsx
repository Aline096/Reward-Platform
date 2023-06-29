import Image from 'next/image'
import bag from '../../../public/assets/images/BAG-Logo.svg'

const LeftHome = () => {
  return (
    <div className="hidden h-screen w-1/2 flex-col items-center justify-center bg-blue-50 p-16 lg:flex">
      <div className=" flex flex-col text-sm">
        <Image
          width={300}
          height={300}
          alt={'BAG Image'}
          src={bag}
          className="text-blue-700 mt-8 mb-8 flex flex-col text-base font-semibold"
        ></Image>
        <div className="mt-8 mb-8 flex flex-col text-base font-semibold justify-center text-blue-950">
            <span className='flex justify-center'>
            Complete tasks with high scores.
            </span>
            <span className='flex justify-center'>
            Get Rewards of your choice
            </span>
        </div>
      </div>
    </div>
  )
}

export default LeftHome
