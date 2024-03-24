import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { FavoritesModal } from './FavoritesModal'
import { ParticipantsIcons } from './ParticipantsIcons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './styles.css'


function App() {
  const [activity, setActivity] = useState(null)

  // Get favorites from local storage
  const [favorites, setFavorites] = useState(() => {
    const localValue = localStorage.getItem("FAVORITES")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Gets activity once on page load
  useEffect(() => {

    getActivity()

    // Debug
    // console.log(favorites)
  }, [])

  // Store favorites in local storage on change
  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites))
  }, [favorites])

  const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(data => {
        setActivity(data)
      })
      .catch(error => {
        window.alert('Error fetching data: ', error)
      })
  }

  function isInFavorites(activity) {
    return favorites.some(favorite => favorite.activity === activity)
  }

  function addFavorite() {
    if (activity != null && !isInFavorites(activity.activity)) {
      setFavorites((currentFavorites) => {
        return [...currentFavorites, { id: crypto.randomUUID(), ...activity }]
      })
    }
  }

  function deleteFavorite(id) {
    setFavorites(currentFavorites => {
      return currentFavorites.filter(fav => fav.id !== id)
    })
  }

  function deleteFavoriteByActivity(activity) {
    setFavorites(currentFavorites => {
      return currentFavorites.filter(fav => fav.activity !== activity)
    })
  }

  return (
    <>
      <div className='bg-gradient-custom vh-100'>

        <div className="position-absolute w-100 mt-2">
          <div className="container">
            <FavoritesModal favorites={favorites} deleteFavorite={deleteFavorite} />
          </div>
        </div>

        <div className="container-sm text-blue-light d-flex flex-column justify-content-center vh-100 vw-100 fs-4">


          {/* Title */}
          <h1 className='text-blue-light fw-bold user-select-none display-3'>{activity?.activity}</h1>

          <div className="row">
            <div className="col">
              {/* Type */}
              <p className='fw-lighter fs-2 text-blue-dark text-capitalize user-select-none'>{activity?.type}</p>
            </div>

            {/* Participants */}
            <div className="col d-flex align-items-center">
              <ParticipantsIcons participants={activity?.participants} />
            </div>

          </div>


          <div className='mb-4 user-select-none'>
            <div className="row">
              <div className="col">
                {/* Price */}
                Price
                <ProgressBar value={1 - activity?.price} />
              </div>

              <div className="col">
                {/* Accessibility */}
                Accessibility
                <ProgressBar value={1 - activity?.accessibility} />
              </div>
            </div>
          </div>

          {/* Buttons */}


          <div className="row gx-2">
            <div className="col-sm-10 col-9 col-lg-11 d-grid">
              <button onClick={getActivity} className='btn fs-3 btn-dark text-blue-light'>I'm bored!
                <i className="mx-1 bi bi-emoji-neutral-fill"></i>
              </button>
            </div>

            <div className="col d-grid">
              <button onClick={() => {
                if (isInFavorites(activity?.activity)) {
                  return deleteFavoriteByActivity(activity.activity)
                } else {
                  return addFavorite()
                }
              }} className='btn fs-2 btn-outline-dark text-blue-light'>
                <i className={`bi ${isInFavorites(activity?.activity) ? "bi-suit-heart-fill" : "bi-suit-heart"}`}></i>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className='fixed-bottom d-flex justify-content-center py-1'>
          <a href="https://github.com/bucekpet/bored-app" target="_blank">
            <i className="bi fs-3 bi-github p-3"></i>
          </a>
        </div>
      </div >

    </>
  )
}

export default App
