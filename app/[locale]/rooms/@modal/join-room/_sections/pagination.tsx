'use client'

import { Input, Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Paginator() {
  const router = useRouter()

  return (
    <div className='flex justify-between pt-3'>
      <div className='flex items-center gap-2'>
        <div className='text-md'>Show</div>
        <Input type='number' defaultValue='10' size='sm' className='w-1/5' />
        <div className='text-md'>per page</div>
      </div>
      <div>
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-[#0E4E79]',
            wrapper: 'bg-white',
          }}
          initialPage={1}
          total={10}
          // onChange={(page) =>
          //   router.push(`${pathname}?page=${page}`, {
          //     scroll: false,
          //   })
          // }
        />
      </div>
    </div>
  )
}
