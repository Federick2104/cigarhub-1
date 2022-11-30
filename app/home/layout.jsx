import Navbar from './Navbar'
import ProvidersWrapper from './ProvidersWrapper'

export default function HomeLayout ({ children }) {
  return (
    <ProvidersWrapper>
      <div className='flex'>
        <Navbar />
        {children}
      </div>
    </ProvidersWrapper>
  )
}
