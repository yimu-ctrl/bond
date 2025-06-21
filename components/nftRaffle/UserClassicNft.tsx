import { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Card } from '../ui/card'
import IMAGES_MAP from '@/public'
import { Button } from '../ui/button'

const UserClassicNft: FC = () => {
  const t = useTranslations('NFTRaffle')
  const nftTypes = [
    { tokenId: 1, name: '#1 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 2, name: '#2 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 3, name: '#3 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 4, name: '#4 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 5, name: '#5 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 6, name: '#6 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 7, name: '#7 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 8, name: '#8 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 9, name: '#9 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 },
    { tokenId: 10, name: '#10 BOND CAT', image: IMAGES_MAP.bondCat01, balance: 0 }
  ]
  const address = ''

  const renderNFTCard = () => {
    if (address) {
      for (let i = 0; i < nftTypes.length; i++) {
        // TODO:Get the number of NFTs corresponding to the user

        const balance = 0
        nftTypes[i].balance = balance
      }
    }
    return (
      <div className='flex justify-around flex-wrap gap-5'>
        {nftTypes.map(item => (
          <div key={item.tokenId}>
            <Card className='flex-grow flex justify-center items-center relative bg-[#17202A80] rounded-4xl py-8 px-8 lg:min-w-70'>
              <Image width={104} height={147} src={IMAGES_MAP.bondCat01} alt={'bondCat'} className='lg:h-auto'></Image>
              <div className='absolute bg-[#FFFFFF] text-center rounded-full bottom-3 right-3 w-7'>
                <span className='font-[OpenSans] text-[#9022F0] text-xl'>{item.balance}</span>
              </div>
            </Card>
            <div className='text-center font-[Poppins] text-[#FFFFFF] text-xl mt-1'>{item.name}</div>
            <div className='text-center mt-4'>
              <Button className='mr-4 md:mr-8 bg-[#0CAEE4] hover:bg-[#34A5B3] text-[#FFFFFF] rounded-3xl'>
                {t('Sell')}
              </Button>
              <Button className='bg-[#F9FAFB] text-[#171515] hover:bg-[#34A5B3] rounded-3xl'>{t('Buy')}</Button>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      <h2 className='text-center font-[Poppins] text-[#FFFFFF] text-3xl mb-10 '>{t('Your Classic NFT')}</h2>
      {renderNFTCard()}
    </div>
  )
}
UserClassicNft.displayName = 'UserClassicNft'
export default UserClassicNft
