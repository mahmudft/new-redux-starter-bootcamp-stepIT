import Navbar from "../components/Navbar";




export default function GeneralLayout({children}){
    return (
        <div>
                  <Navbar />
                  {children}
        </div>
    )

}