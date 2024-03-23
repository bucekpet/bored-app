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
                // Ensure the min is above 0 so its visible
                style={{ width: value != 0 ? `${value * 100.0}%` : '5%' }}
            ></div>
        </div >
    )
}