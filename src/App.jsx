import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './styles.css'


function App() {
  const [activity, setActivity] = useState(null)
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    getActivity()
  }, [])

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

  const addToFavorites = () => {
    if (activity != null) {
      setFavorites((currentFavorites) => {
        return [...currentFavorites, activity]
      })
    }

    console.log(favorites)
  }

  return (
    <>
      <div className='bg-gradient-custom vh-100'>

        <div className="container-sm text-blue-light d-flex flex-column justify-content-center vh-100 vw-100">

          {/* Title */}
          <h1 className='text-blue-light fw-bold'>{activity?.activity}</h1>


          <div className="row">
            <div className="col">
              {/* Type */}
              <p className='fw-lighter fs-3 text-blue-dark text-capitalize'>{activity?.type}</p>
            </div>

            <div className="col d-flex align-items-center">
              {/* Participants */}
              <p className=''>{
                activity && activity.participants > 0 &&
                Array.from({ length: activity.participants }).map((_, index) => (
                  <i key={index} className="bi bi-person-fill"></i>
                ))
              }</p>
            </div>
          </div>


          <div className='mb-4'>
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


            {/* Link */}
            <a href={activity?.link}></a>
          </div>

          {/* Buttons */}
          <div className="row">
            <div className="col-10">
              <div className="d-grid">
                <button onClick={getActivity} className='btn  btn-dark text-blue-light'>I'm bored!
                  <i className="mx-1 bi bi-emoji-neutral-fill"></i>
                </button>
              </div>
            </div>

            <div className="col-2 px-0 btn-group">
              <button onClick={addToFavorites} className='btn btn-dark text-blue-light'>
                <i className="bi bi-heart"></i>
              </button>

              <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split text-blue-light" data-bs-toggle="dropdown" aria-expanded="false" />
              <span className="visually-hidden">Toggle Dropdown</span>
            </div>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>

          <div className='fixed-bottom d-flex justify-content-center pb-2'>
            <a href="https://github.com/bucekpet/" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div >

    </>
  )
}

export default App
