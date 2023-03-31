import React from 'react'
import CardContainer from './CardContainer'
import containers from '../const/containerTypes'
export default function ContainersSection() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1  gap-2 md:gap-10 md:justify-evenly md:px-12 place-items-center '>
                {containers.map(container =>(
                  <CardContainer
                  className="w-20  h-24 min-h-full "
                  key={container.id}
                  title={container.title}
                  description={container.description}
                  icon={container.icon}
                  path={container.path}
                  />
                ))}

      </div>
  )
}
