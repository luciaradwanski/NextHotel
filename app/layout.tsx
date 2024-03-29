import '../styles/globals.css'
import {Navigation} from '../components/Navigation'
import {Providers} from '../store/Provider'

export const metadata = {
    title: 'Hotel App ⛲',
    description: 'Generated by Next.js',
}


export default function RoomLayout({children,}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
            />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            
            <title>✨</title>
        </head>
        <body>
            <Providers>
                <Navigation/>
                
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"
                />
                <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
                <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                
                {children}
            </Providers>
        </body>
        
        
        </html>
    )
}
