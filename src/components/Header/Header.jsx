import Logo from "../../assets/images/logo.svg";
import "../../assets/styles/Header.scss";

export default function Header() {
  return (
    <header>
      <img
        src={Logo}
        alt="Logo de circulo com gradiente rosa e com texto base apparel ao lado"
      />
    </header>
  );
}
