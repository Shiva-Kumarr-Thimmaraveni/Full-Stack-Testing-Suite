import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'


const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Exams', href: '/exams', current: false },
  { name: 'Reports', href: '/reports', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ profileImage }) {
 const [customImageUrl, setCustomImageUrl] = useState(`${profileImage}`)

  const location = useLocation()
  const navigate = useNavigate()
   const placeholderImage = 'https://avatar.iran.liara.run/public/boy?username=Ash' 
  

     const showPlaceholderImage = () => {
      setCustomImageUrl('https://avatar.iran.liara.run/public/boy?username=Ash')
     }

  const handleNavigation = (path) => {
    navigate(path)
  }
  const LogoutUser = () => {
    localStorage.removeItem('user-Info')
    localStorage.removeItem('user-answers')
    navigate('/')
  }



  return (
    <Disclosure as="nav" className="bg-customNavy font-GoogleI">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-customNavy hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h2 className="text-l font-bold align-middle mb-auto mt-auto text-customBiege">
                ReBirth Exams
              </h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href

                  return (
                    <li className="list-none" key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`p-2 m-0 shadow-lg rounded-lg ${
                          isActive
                            ? 'text-customNavy bg-customBiege'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 h-[2.4rem] w-[2.4rem]">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    src={profileImage || placeholderImage}
                    alt="profileImage"
                    onError={showPlaceholderImage}
                    className="rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <button
                    onClick={LogoutUser}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none w-[100%]"
                  >
                    log out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
