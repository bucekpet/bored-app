import { useState } from "react"
import { ParticipantsIcons } from "./ParticipantsIcons"
import { ProgressBar } from "./ProgressBar"

export function FavoriteItem({ id, activity, type, participants, price, accessibility, deleteFavorite }) {
    const [buttonHover, setButtonHover] = useState(false)

    return (
        <>
            <li className="list-group-item text-blue-light px-0 py-3">
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

                    <span onClick={() => deleteFavorite(id)}
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                        className="btn text-blue-light">
                        {buttonHover && (
                            <i className="bi bi-heartbreak-fill"></i>
                        ) || (
                                <i className="bi bi-heartbreak"></i>
                            )}
                    </span>

                </div>
            </li>
        </>
    )
}