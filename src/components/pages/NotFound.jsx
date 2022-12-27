import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class='grid h-[90vh] place-content-center bg-base-100 px-4'>
      <div class='text-center text-primary'>
        <h1 class='text-9xl font-black'>404</h1>
        <p class='text-2xl font-bold tracking-tight sm:text-4xl'>Uh-oh!</p>
        <p class='mt-4'>We can't find that page.</p>
        <div className='btn-primary btn'>
          <Link to='/'>Go Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
