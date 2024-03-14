import React from 'react'
import '../ItemTask/ItemTask.css'

export const ItemTask = ({title},{content}) => {
  return (
    <div className='item'>
    <li><b>{title}</b>{content}</li>
    <input type="checkbox" />
    </div>
  )
}
