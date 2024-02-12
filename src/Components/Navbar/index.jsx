import './index.scss'

function Navbar() {
  return (
    <nav className="nav bg-primary">
        <span className="logo">Profe Kiara</span>
        <button className="btn-icon bg-secondary"><img src="./assets/icons/Phone.svg" alt="" /></button>
        <a href="https://wa.me/5491168492899"><button className="btn-secondary btn-text">Reservá una clase</button></a>
    </nav>
  )
}

export default Navbar