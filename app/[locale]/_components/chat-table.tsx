'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
} from '@nextui-org/react'
import { IoSend } from 'react-icons/io5'
import { Textarea } from '@nextui-org/input'
import { useState } from 'react'

const chats = [
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
  { message: 'Hi' },
]

export default function ChatTable() {
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <Card className='flex w-96 flex-col'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex'>
          <p className='text-md'>CHAT BOX</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className='flex h-full flex-col overflow-auto p-0'>
        <div className='flex h-full flex-col'>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              } m-4 rounded-md`}
            >
              <p
                className={`rounded-lg p-2 ${
                  index % 2 === 0 ? 'bg-green-200' : 'bg-blue-200'
                }`}
              >
                {chat.message}
              </p>
            </div>
          ))}
        </div>
        <Divider />
      </CardBody>
      {/* Div and Textarea height matching */}
      <div className='max-h-96 min-h-10 border'>
        <Textarea
          value={value}
          onChange={handleChange}
          classNames={{
            inputWrapper: 'rounded-t-none',
          }}
          className='w-full'
          placeholder='Enter your message'
          endContent={
            value.length !== 0 ? <IoSend className='text-white'></IoSend> : null
          }
        />
      </div>
    </Card>
  )
}
