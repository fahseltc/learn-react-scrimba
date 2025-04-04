import globeLogo from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <img src={globeLogo} alt="globe icon" />
      <h1>my travel journal.</h1>
    </header>
  );
}
