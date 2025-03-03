import { useState } from 'react'
import Image from './Images'
import ImageSliderBig from './ImageSliderBig'

// function takes in one place
export default function PlaceGallery ({ place, onShowAllPhotos }) {
  const [showPhotos, setShowPhotos] = useState(false) // state to show photos or not
  const [selectedIndex, setSelectedIndex] = useState(0) // track which photo to start with

  // function to handle showing the full screen slider
  // handle two scenarios 1. from Placepage 2. button from show all photos
  const handleShowPhotos = (index = 0) => {
    setSelectedIndex(index)

    // Use parent function if available, otherwise use local state
    if (typeof onShowAllPhotos === 'function') {
      onShowAllPhotos(index) // pass index to parent
    } else {
      // if no parent function was passed in, show the photos directly
      setShowPhotos(true)
    }
  }

  // handle closing the full screen slider
  function handleClosePhotos () {
    setShowPhotos(false)
  }

  // photos are already shown and not using parent control
  if (showPhotos) {
    return (
      <div className='absolute inset-0 min-h-screen text-white transition duration-100 ease-in bg-black'>
        <div className='grid gap-4 p-8 bg-black'>
          <div>
            <h2 className='mr-48 text-2xl'>Photos of {place.title}</h2>
            <button
              className='fixed flex gap-1 px-4 py-2 text-black bg-white shadow right-12 top-8 rounded-2xl shadow-black'
              onClick={handleClosePhotos}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                  clipRule='evenodd'
                />
              </svg>
              Close Photos
            </button>
          </div>
          {/* render all the photos */}
          {/* no need to map */}
          {showPhotos && place?.photos?.length > 0 && (
            <ImageSliderBig
              photos={place.photos}
              title={place.title}
              onClose={handleClosePhotos}
              initialIndex={selectedIndex}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='relative mt-6 '>
        <div className='flex flex-col gap-2 overflow-hidden md:flex-row rounded-3xl h-[500px]'>
          {/* Show first main photo */}
          <div className='flex-grow w-full h-full md:w-1/2'>
            {place.photos?.[0] && (
              <div className='relative h-full group'>
                <Image
                  onClick={() => handleShowPhotos(0)}
                  className='object-cover w-full h-full cursor-pointer '
                  src={place.photos[0]}
                />
                <div className='absolute inset-0 transition-opacity bg-black opacity-0 cursor-pointer group-hover:opacity-30'></div>
              </div>
            )}
          </div>
          {/* Smaller grid photos */}
          <div className='hidden h-full grid-cols-2 grid-rows-2 gap-2 md:grid md:w-1/2'>
            <div className='relative group'>
              {place.photos?.[1] && (
                <>
                  <Image
                    onClick={() => handleShowPhotos(1)}
                    className='object-cover w-full h-full cursor-pointer '
                    src={place.photos[1]}
                  ></Image>
                  <div className='absolute inset-0 transition-opacity duration-200 ease-in-out bg-black opacity-0 cursor-pointer group-hover:opacity-30'></div>
                </>
              )}
            </div>

            <div className='relative group'>
              {place.photos?.[2] && (
                <>
                  <Image
                    onClick={() => handleShowPhotos(2)}
                    className='object-cover w-full h-full cursor-pointer '
                    src={place.photos[2]}
                  ></Image>
                  <div className='absolute inset-0 transition-opacity duration-200 ease-in-out bg-black opacity-0 cursor-pointer group-hover:opacity-30'></div>
                </>
              )}
            </div>
            <div className='relative group'>
              {place.photos?.[3] && (
                <>
                  <Image
                    onClick={() => handleShowPhotos(3)}
                    className='object-cover w-full h-full cursor-pointer '
                    src={place.photos[3]}
                  ></Image>
                  <div className='absolute inset-0 transition-opacity duration-200 ease-in-out bg-black opacity-0 cursor-pointer group-hover:opacity-30'></div>
                </>
              )}
            </div>
            <div className='relative group'>
              {place.photos?.[4] && (
                <>
                  <Image
                    onClick={() => handleShowPhotos(4)}
                    className='object-cover w-full h-full cursor-pointer '
                    src={place.photos[4]}
                  ></Image>
                  <div className='absolute inset-0 transition-opacity duration-200 ease-in-out bg-black opacity-0 cursor-pointer group-hover:opacity-30'></div>
                  <button
                    onClick={() => handleShowPhotos(0)}
                    className='absolute px-3 py-1 text-sm bg-gray-200 bottom-4 right-4 rounded-xl'
                  >
                    Show all photos
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
