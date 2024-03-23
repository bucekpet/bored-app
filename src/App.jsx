import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'


function App() {
  const [activity, setActivity] = useState(null)

  const [theme, setTheme] = useState('dark');

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

          {/* Button */}
          <div className="d-grid">
            <button onClick={getActivity} className='btn  btn-dark text-blue-light'>I'm bored!
              <i className="mx-1 bi bi-emoji-neutral-fill"></i>
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
