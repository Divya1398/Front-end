import React from 'react'

function Border() {
  return (
   <div>
    <p className='font-sans italic font-bold text-center'>The quick brown fox jumps over the lazy dog</p>
    <p className='font-serif text-blue-600 underline'>The quick brown fox jumps over the lazy dog</p>
    <p className='font-mono overline'>The quick brown fox jumps over the lazy dog</p>
    <p className='text-xs'>The quick brown fox jumps over the lazy dog</p>
    <p className='text-3xl'>The quick brown fox jumps over the lazy dog</p>
    <div className='border-4 w-60 rounded-full border-amber-400 border-double'>1</div>
    <div className='border-5 mt-6 w-90 border-e-red-700 outline-3 outline-amber-300 outline-dashed'>2</div>
   <button className="bg-indigo-600 hover:not-focus:bg-indigo-700 m-15 rounded-4xl text-white cursor-pointer p-2">Save changes</button>


   </div>
)
}

export default Border
