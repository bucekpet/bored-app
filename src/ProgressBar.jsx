export function ProgressBar({ value }) {
    return (
        <div className="progress">
            <div
                className={`progress-bar ${value < 0.4
                    ? 'bg-success'
                    : value < 0.75
                        ? 'bg-warning'
                        : 'bg-danger'
                    }`}
                style={{ width: `${value * 100.0}%` }}
            ></div>
        </div >
    )
}