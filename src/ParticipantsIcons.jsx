export function ParticipantsIcons({ participants }) {
    return (
        <span className=''>{
            participants > 0 &&
            Array.from({ length: participants }).map((_, index) => (
                <i key={index} className="bi bi-person-fill"></i>
            ))
        }</span>
    )
}

