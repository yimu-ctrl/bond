import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import GenesisCardContent from './GenesisCardContent'
import GenesisNodeButton from './GenesisNodeButton'
import GenesisNodeProgress from './GenesisNodeProgress'

const GenesisNodeCard: FC = () => {
  return (
    <Card className='bg-[#17202A] rounded-4xl mt-6 sm:mt-12 md:mt-6 lg:mt-12 '>
      <CardHeader>
        <CardTitle className='text-center text-3xl text-[#F9FBFA] pt-5 sm:pt-10 md:pt-5 lg:pt-10  lg:text-5xl'>
          Genesis Node
        </CardTitle>
        <GenesisNodeProgress />
      </CardHeader>
      <CardContent>
        <GenesisCardContent />
      </CardContent>
      <GenesisNodeButton />
    </Card>
  )
}
GenesisNodeCard.displayName = 'GenesisNodeCard'

export default GenesisNodeCard
