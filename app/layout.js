//imoirtar link(esto es de react)
import Link from "next/link"

const linksMenu = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Services',
    route: '/services'
  },
  {
    label: 'About Us',
    route: '/AboutUs'
  },
  {
    label: 'Contact',
    route: '/contact'
  }

]

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with next</title>
      </head>
      <nav>
        <ul>
          {linksMenu.map(({ label, route }) => (
            <li>
              <Link href={route}> {label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <body>{children}</body>
    </html>
  )
}
//aqui va el menú
