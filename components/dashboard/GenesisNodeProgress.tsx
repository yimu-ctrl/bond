import { Progress } from '../ui/progress'

export default function GenesisNodeProgress() {
  return (
    <div className='flex justify-center mt-3  lg:mt-6'>
      <Progress value={10} className='w-[50%]'></Progress>
    </div>
  )
}
