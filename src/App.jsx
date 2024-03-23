import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { ThemeToggler } from './ThemeToggler'
import 'bootstrap-icons/font/bootstrap-icons.css'


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
      <div className="container-md mt-5">
        <div className='mb-4'>

          {/* Title */}
          <h1>{activity?.activity}</h1>


          {/* Type */}
          <p className='fw-lighter fs-2 '>{activity?.type}</p>

          <div className="position-relative">
            <div className="position-absolute end-0">
              <ThemeToggler onThemeChange={setTheme} />

            </div>

          </div>

          {/* Participants */}
          <p>{
            activity && activity.participants > 0 &&
            Array.from({ length: activity.participants }).map((_, index) => (
              <i key={index} className="bi bi-person-fill"></i>
            ))
          }</p>

          {/* Price */}
          <div className='mb-3'>
            Price
            <ProgressBar value={1 - activity?.price} />
          </div>

          {/* Accessibility */}
          <div className='mb-3'>
            Accessbility
            <ProgressBar value={1 - activity?.accessibility} />
          </div>

          {/* Link */}
          <a href={activity?.link}></a>
        </div>

        <div className="d-grid">
          <button onClick={getActivity} className={theme === 'dark' ? `btn btn-outline-primary` : `btn btn-primary`}>Get Activity</button>
        </div>

      </div>
    </>
  )
}

export default App
