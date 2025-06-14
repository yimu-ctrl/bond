import { FC } from 'react'

type Props = {
  title: string
  desc: string
}

const Header: FC<Props> = ({ title, desc }) => {
  return (
    <div className='flex flex-wrap-reverse justify-between content-end h-15 mb-10 sm:mb-15'>
      <div className='ml-3'>
        <h2 className='font-[Poppins] text-base sm:text-2xl xl:text-3xl text-[#F9FAFB] mb-1 sm:mb-3'>{title}</h2>
        <div className='font-[Poppins] text-sm sm:text-base xl:text-xl text-[#9DA4AE]'>{desc}</div>
      </div>
      <div className='pr-4'>
        <appkit-button size='sm' balance='hide' />
      </div>
    </div>
  )
}

Header.displayName = 'Header'

export default Header
