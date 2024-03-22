import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
  const [activity, setActivity] = useState(null)

  // useEffect(() => {
  //   console.log(activity)
  // }, [activity])

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
      <div className="container-md my-5">

        <div className='mb-5'>
          <h1 className='mt-5'>{activity?.activity || "Title"}</h1>

          <p className='fw-lighter fs-2'>{activity?.type}</p>

          <p>Participants: {
            activity && activity.participants > 0 &&
            Array.from({ length: activity.participants }).map((_, index) => (
              <i key={index} className="bi bi-person-fill"></i>
            ))
          }</p>

          <div className='mb-3'>
            Price
            <ProgressBar value={activity?.price} />
          </div>

          <div className='mb-3'>
            Accessbility
            <ProgressBar value={activity?.accessibility} />
          </div>

          <a href={activity?.link}></a>
        </div>

        <div className="d-grid">
          <button onClick={getActivity} className="btn btn-outline-primary">Get Activity</button>
        </div>

      </div>
    </>
  )
}

export default App
