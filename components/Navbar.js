// built in link components to link to routes
import Link from "next/link"

export default function Navbar(){
  return(
    <nav>
      <Link href='/'>Home</Link>

      <Link href='/about'>About Me</Link>
    </nav>
  )
}