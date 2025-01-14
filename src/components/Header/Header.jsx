import Logo from "../../assets/images/logo.svg";
import "../../assets/styles/Header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Logo de circulo com gradiente rosa e com texto base apparel ao lado" />
      </div>
    </header>
  )
}
