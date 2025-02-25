import AccountNav from '../components/AccountNav'

export default function PlacePage () {
  return (
    <>
      <div className=''>
        <AccountNav />
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
      </div>
    </>
  )
}
