'use client';

import AccordionItem from '@/components/AccordionItem';
import Image from 'next/image';
import { useState } from 'react';


const accordionData = [
  {
    title:'title1',
    desc:'Description1 Description1 Description1 Description1'
  },
  {
    title:'title2',
    desc:'Description2 Description1 Description1 Description1'
  },
  {
    title:'title1',
    desc:'Description3 Description1 Description1 Description1'
  }
]

export default function Home() {
  const [open,setOpen] = useState(false);
  const toggle =(index)=>{
    if(open === index){
      return setOpen(null);
    }
    setOpen(index);
  }
  return (
    <section className='bg-[#3D3DB9] h-screen grid place-items-center'>
      <div className='px-[40px] max-w-[800px]'>
        {accordionData.map((data,index)=>{
          return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
        })}
      </div>
    </section>
  )
}
