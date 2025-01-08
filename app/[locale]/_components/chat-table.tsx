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
    <Card className='h-[700px] w-96'>
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
      <CardBody className='flex flex-col gap-4 p-0'>
        <div className='overflow h-full bg-red-500'>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              } rounded-md`}
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
        <div className='h-1/2'>
          <Textarea
            className='h-full min-h-[200px] w-full'
            value={value} // Bind value to the Textarea
            onChange={handleChange} // Handle change to update value
            placeholder='Enter your text'
            endContent={
              value !== '' ? <IoSend className='text-end text-white' /> : null
            }
          />
        </div>
      </CardBody>
    </Card>
  )
}

// adadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadada
