export function ProgressBar({ value }) {
    return (
        <div className="progress" style={{ height: '1px' }}>
            <div
                className={`progress-bar ${value > 0.6
                    ? 'bg-success'
                    : value > 0.3
                        ? 'bg-warning'
                        : 'bg-danger'
                    }`}
                style={{ width: value != 0 ? `${value * 100.0}%` : '10%' }}
            ></div>
        </div >
    )
}