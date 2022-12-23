import { TbHeartRateMonitor } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState('')

  const menus = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Charts',
      path: '/charts'
    },
    {
      name: 'History',
      path: '/history'
    }
  ]

  const ListMenus = () => {
    return (
      <>
        {menus.map((menu) => {
          const activeLink =
            active === menu.name
              ? 'bg-primary rounded-lg text-base-300 font-semibold'
              : ''
          return (
            <li
              onClick={() => setActive(menu.name)}
              className={activeLink}
              key={menu.id}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          )
        })}
      </>
    )
  }

  return (
    <header className='navbar bg-base-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <ListMenus />
          </ul>
        </div>
        <div className='flex-row flex duration-150 items-center space-x-5 mx-3'>
          <TbHeartRateMonitor className='lg:text-5xl md:text-3xl text-xl' />
          <h1 className='hidden lg:flex text-3xl'>Room Monitor</h1>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal space-x-5 px-1'>
          <ListMenus />
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Add Room</a>
      </div>
    </header>
  )
}

export default Header
