
export default function Header() {
    return(
        <header className="grid grid-cols-2 pt-2 px-1">
            <div>
                <h1 className="text-3xl">Super Mega Memory Game!</h1>
            </div>
            <div className="justify-self-end grid grid-rows-2 pr-5">
                <span>Highscore:34</span>
                <span>Score: 12</span>
            </div>
        </header>
    )
}