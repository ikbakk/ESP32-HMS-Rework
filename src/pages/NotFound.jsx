import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class='grid h-screen px-4 place-content-center bg-base-100'>
      <div class='text-center'>
        <h1 class='font-black text-gray-200 text-9xl dark:text-gray-700'>
          404
        </h1>
        <p class='text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
          Uh-oh!
        </p>
        <p class='mt-4 text-gray-500 dark:text-gray-400'>
          We can't find that page.
        </p>
        <div className='btn btn-primary'>
          <Link to='/'>Go Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
