import FeatureCart from './FeatureCart'

const Featured = () => {
  return (
    <div className='lg:my-0 my-5 lg:pb-5 flex flex-col gap-4'>
        <FeatureCart />
        <FeatureCart />
    </div>
  )
}

export default Featured