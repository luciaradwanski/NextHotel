import { Counter } from "./Counter"
export default function RoomsLayout ({children}){
    return (
        <div>
            {/* <marquee style={{ background: '#fff' , color: 'red'}}>El mejor canal de Twitch de programación: @luci</marquee> */}
            {/* <small>Home &bull; Posts</small> */}
            {/* <Counter/> */}
            {children}
        </div>
    )
}