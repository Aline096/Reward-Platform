'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import getUserInfo from '@/lib/getUserInfo'
import bagLogo from '../../../public/assets/images/BAG-Logo.svg'
import { LayoutDashboard, Gift, Home, User2 } from 'lucide-react'

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [inSmallMode, setInSmallMode] = useState(false)
  const [activeUserRole, setActiveUserRole] = useState<string | null>(null)



  // useEffect(() => {
  //   const info = getUserInfo()
  //   if (info) {
  //     // setActiveUserRole(info.role)
  //   }
  // }, [])

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <LayoutDashboard />,
      index: 0,
    },
    {
      path: '/dashboard/userRewards',
      name: 'User Rewards',
      icon: <User2/>,
      index: 1,
    },
    {
      path: '/dashboard/rewards',
      name: 'Rewards',
      icon: <Gift />,
      index: 2,
    },
    {
      path: '/',
      name: 'Home',
      icon: <Home />,
      index: 3,
    },
  ]

  return (
    <div className="h-[100vh] md:sticky top-0 shadow-sm mb-2">
      <div
        className={`${inSmallMode ? 'bg-transparent' : ''}bg-white xs:hidden`}
      >
        <div
          className={`flex justify-between py-[25px] h-[80px] px-2 xs:p-6 ${
            inSmallMode ? 'mr-2 ' : ''
          }`}
        >
          <div className=" ">
            <Link href="/" className="flex items-center">
              <div
                className={`h-[25px] w-[60px] flex justify-center items-center ${
                  inSmallMode ? 'hidden m-0' : ''
                } `}
              >
                <Image
                  src={bagLogo}
                  width={55}
                  height={24}
                  className={` pr-1 xs:hidden xs:m-0`}
                  alt="Logo"
                />
              </div>
              <span
                className={`self-center text-xl font-semibold whitespace-nowrap mx-2 xs:hidden ${
                  inSmallMode ? 'hidden' : ''
                }`}
              >
                Rewards
              </span>
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 xs:m-0 ${
              inSmallMode ? '' : ''
            }`}
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setInSmallMode(!inSmallMode)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {menuItems.map((item, index) => (
          <Link
            href={item.path}
            key={item.path}
            onClick={() => setActiveTab(index)}
            className={`flex px-14 py-4 sidebar-link hover:bg-[#ecffe7] ${
              activeTab === index ? 'bg-[#D7F9C5]' : ''
            } ${inSmallMode ? 'justify-center px-6' : ''}`}
          >
            <div
              className={`w-[24px] h-[24px] flex justify-center items-center ${
                inSmallMode ? 'm-0' : ''
              }`}
            >
              {item.icon}
            </div>
            <div className={`ml-2 ${inSmallMode ? 'hidden' : ''}`}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="xs:flex hidden bg-white bottom-0 fixed w-full border border-t-2 justify-between p-4 z-50">
        {menuItems.map((item, index) => (
          <Link
            href={item.path}
            key={item.path}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index ? 'bg-[#64B937] rounded-full text-white' : ''
            } p-4`}
          >
            <div
              className={`w-[18px] h-[18px] flex justify-center items-center `}
            >
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar