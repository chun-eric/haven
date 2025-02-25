import { useEffect } from 'react'
import { Link, Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// this will be on route /account/places
export default function PlacesPage () {
  const { id } = useParams()
  const [place, setPlace] = useState(null)

  useEffect(() => {
    if (!id) {
      return
    }
    // get place by id
  }, [id])
  return (
    <>
      <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-8'>
        <h1 className='text-3xl'>Place Title</h1>
        <p> Place Address</p>
        <div className=''>Place Gallery</div>
        <div className=''>
          <div className=''>
            <h2>Description</h2>
          </div>
          <div className=''>
            Check in: 14:00 <br />
            Check out: 10:00
          </div>
          <div className=''>
            <div className=''>
              <h2 className=''>Extra Info</h2>
            </div>
            <div className='mb-4 mt-2 text-sm text-gray-700 leading-5'>
              Extra Info
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
