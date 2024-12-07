import React from 'react'

interface LogoProps {
  isWhite?: boolean
}

const Logo: React.FC<LogoProps> = ({ isWhite }) => {
  return (
    <div className={`text-3xl font-extrabold ${isWhite ? 'text-white' : 'text-darkblue'}`}>PULSE</div>
  )
}

export default Logo