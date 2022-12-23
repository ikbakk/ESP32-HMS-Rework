import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='grid h-[90vh] place-content-center bg-base-100 px-4'>
      <div>
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
    </div>
  )
}

export default Loading
