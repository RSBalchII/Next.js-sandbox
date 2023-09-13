import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image src={Logo} 
               alt='Dojo png'
               width='70'
               quality='100'
               placeholder='blur' >
        </Image>
        <h1>Help Desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
