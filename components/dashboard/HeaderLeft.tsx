import { FC } from 'react'

const HeaderLeft: FC = () => {
  return (
    <div className='ml-3'>
      <h2 className='font-[Poppins] text-base sm:text-2xl xl:text-3xl text-[#F9FAFB] mb-1 sm:mb-3'>Welcome back</h2>
      <div className='font-[Poppins] text-sm sm:text-base xl:text-xl text-[#9DA4AE]'>
        Innovate, Build, and Scale in the Web3 Era.
      </div>
    </div>
  )
}
HeaderLeft.displayName = 'HeaderLeft'
export default HeaderLeft
