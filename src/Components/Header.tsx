import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className="p-8 border-b border-black flex flex-col items-center justify-center mb-20">
            <img src={logo} height="50" width="50"/>
            <h1>NICHOLAS PETERS</h1>
        </header>
    )
}