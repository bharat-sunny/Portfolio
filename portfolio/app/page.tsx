import Image from 'next/image'
import Header from '../components/Header'
export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <h1 className='p-10 text-red-500'>
          Lets build our first portfolio
        </h1>
      </div>
      
    </main>
  )
}
