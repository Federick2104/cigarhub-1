import React from 'react'
const { NODE_ENV } = process.env
const url = NODE_ENV === 'production' ? 'https://cigarhub.vercel.app/api/test1' : 'http://localhost:3000/api/test1'
console.log('NODE_ENV', NODE_ENV)
async function getPosts () {
  const response = await fetch(url)
  console.log('response', response)
  const data = await response.json()
  return data
}
const F = async () => {
  const data = await getPosts()
  console.log('data', data)
  return (
    <div>{
      JSON.stringify(data)
      }
    </div>
  )
}

export default F
