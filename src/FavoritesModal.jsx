import { FavoriteItem } from "./FavoriteItem"

export function FavoritesModal({ favorites, deleteFavorite }) {

    return (
        <>
            <div className="d-flex justify-content-start">

                <button type="button" className="btn fs-5 text-blue-light p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Favorites <i className="bi bi-suit-heart-fill" style={{ fontSize: '1rem' }}></i>
                </button>
            </div>

            <div className="modal fade text-blue-light" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Favorites</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {favorites.length === 0 && "No favorites"}

                            <ul className="list-group list-group-flush">
                                {favorites.map((fav) => {
                                    return <FavoriteItem {...fav} key={fav.id} deleteFavorite={deleteFavorite} />
                                })}
                            </ul>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary text-blue-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}