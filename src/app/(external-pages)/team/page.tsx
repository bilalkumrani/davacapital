"use client"
import Navbar from "../landingpage/components/Navbar/Navbar";

export default function page() {
  return (
    <>
    <Navbar isMenuOpen={false} toggleMenu={function (): void {
              throw new Error("Function not implemented.");
          } } />
    <div>Team</div>
    </>
  )
}
