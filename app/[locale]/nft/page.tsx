import Header from '@/components/Header'
import NFTInfoCards from '@/components/nftRaffle/NFTInfoCards'
import UserClassicNft from '@/components/nftRaffle/UserClassicNft'
import WinningRecordsCard from '@/components/nftRaffle/WinningRecordsCard'

export default function NFTRaffle() {
  return (
    <div className='sm:pl-8 sm:pr-8 sm:pt-8'>
      <Header title='NFT Raffle' desc='Great rewards for holding a Master NFT' />
      <UserClassicNft />
      <NFTInfoCards />
      <WinningRecordsCard />
    </div>
  )
}
