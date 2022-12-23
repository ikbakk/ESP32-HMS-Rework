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
              ? 'bg-primary-content rounded-lg text-primary font-semibold'
              : 'hover:bg-primary-content hover:rounded-lg hover:text-primary'
          return (
            <li
              onClick={() => setActive(menu.name)}
              className={activeLink}
              key={menu.name}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          )
        })}
      </>
    )
  }

  return (
    <header className='navbar bg-primary text-primary-content'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn-ghost btn lg:hidden'>
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
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-primary p-2 font-kanit shadow'>
            <ListMenus />
          </ul>
        </div>
        <div className='mx-3 flex flex-row items-center space-x-5 duration-150'>
          <TbHeartRateMonitor className='text-xl md:text-3xl lg:text-5xl' />
          <h1 className='hidden font-display text-3xl lg:flex'>Room Monitor</h1>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal space-x-5 px-1 font-kanit'>
          <ListMenus />
        </ul>
      </div>
      <div className='navbar-end'>
        <button className='btn-primary btn bg-primary-content font-kanit font-light text-primary hover:bg-transparent hover:text-primary-content hover:outline-primary-focus hover:outline'>
          Add Room
        </button>
      </div>
    </header>
  )
}

export default Header
