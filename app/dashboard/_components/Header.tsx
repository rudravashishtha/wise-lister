import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-center items-center bg-white'>

        <div className='flex gap-10'>
          <Link href='/dashboard/billing'>
            <h2 className='bg-primary p-3 rounded-full text-xs text-white px-5'>Join Membership just for ₹199/Month 🔥</h2>
          </Link>
          <UserButton />  
        </div>
    </div>
  )
}

export default Header