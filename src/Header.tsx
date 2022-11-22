import { MutableRefObject} from "react"

interface HeadProps {
    score: MutableRefObject<string[]>;
    highscore: MutableRefObject<number>;
}

export default function Header({score, highscore}: HeadProps) {
    if (score.current.length > highscore.current) {
        highscore.current = score.current.length;
    }
    return(
        <header className="grid grid-cols-2 pt-2 px-1">
            <div>
                <h1 className="text-3xl">Super Mega Memory Game!</h1>
            </div>
            <div className="justify-self-end grid grid-rows-2 pr-5">

                <span>Highscore: {highscore.current}</span>
                <span>Score: {score.current.length}</span>
            </div>
        </header>
    )
}