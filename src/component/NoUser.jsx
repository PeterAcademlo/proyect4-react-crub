import React from 'react'
import '../styles/noUser.css'
import { ArchiveBoxIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'

export const NoUser = () => {
  return (
    <div className="no__user">
        <UserGroupIcon  className='users'/>
        <p>no hay usuarios</p>
    </div>
  )
}
