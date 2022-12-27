import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='felx grid h-[90vh] w-full flex-col place-content-center bg-base-100 px-4'>
      <div className='flex justify-center'>
        <TailSpin
          height='80'
          width='80'
          color='#cabfab'
          ariaLabel='tail-spin-loading'
          radius='1'
          wrapperStyle={{}}
          visible={true}
        />
      </div>
      <h1 className='text-center font-hanken text-xl'>Please wait...</h1>
      <h1 className='text-center font-hanken text-lg'>
        If this taking longer, please check your database
      </h1>
    </div>
  )
}

export default Loading
