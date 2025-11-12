export default function Header(){
  return(
    <header className='nav-bar'>
      <img className='react-img' src="/src/assets/react.svg" alt="A logo of React" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}