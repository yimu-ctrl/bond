import { useTranslations } from 'next-intl'
import { FC } from 'react'

const GenesisCardContent: FC = () => {
  const t = useTranslations('Dashboard')
  function renderContent({ title, value }: { title: string; value: string }) {
    return (
      <div key={title} className='w-full text-center flex-grow sm:w-1/4'>
        <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl lg:text-4xl'>{t(title)}</h2>
        <div className='font-[Poppins] text-[#F9FAFB] text-2xl lg:text-4xl mt-2'>{value}</div>
      </div>
    )
  }
  const data = [
    { title: 'Amount', value: '200 USDT' },
    { title: 'You will get', value: '5000 BOND & 2 Classic NFT' },
    { title: 'Nodes', value: '5000' }
  ]
  return (
    <div className='flex justify-between flex-wrap gap-2 mt-2 lg:mt-8'>{data.map(item => renderContent(item))}</div>
  )
}
GenesisCardContent.displayName = 'GenesisCardContent'

export default GenesisCardContent
