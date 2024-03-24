import { ParticipantsIcons } from "./ParticipantsIcons"
import { ProgressBar } from "./ProgressBar"

export function FavoriteItem({ id, activity, type, participants, price, accessibility, deleteFavorite }) {
    return (
        <>
            <li className="list-group-item text-blue-light px-0 py-2">
                <div className="d-flex align-items-center">


                    <div className="d-flex flex-column w-100">

                        <span className="fs-5 fw-bolder">
                            {activity}
                        </span>

                        <div className="row">

                            <div className="col-3">
                                <span className="text-capitalize text-blue-dark">
                                    {type}
                                </span>
                            </div>

                            <dic className="col">
                                <i className="bi bi-person-fill"></i> {participants}
                            </dic>

                            <div className="col-3">
                                {/* Price */}
                                Price
                                <ProgressBar value={1 - price} />
                            </div>

                            <div className="col-3">
                                {/* Accessibility */}
                                Access
                                <ProgressBar value={1 - accessibility} />
                            </div>
                        </div>


                    </div>


                    <button onClick={() => deleteFavorite(id)} className="ms-4 btn btn-outline-secondary text-blue-light">
                        <i className="bi bi-heartbreak-fill"></i>
                    </button>

                </div>
            </li>
        </>
    )
}