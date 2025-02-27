import { useState, useEffect } from 'react'

const ImageSlider = ({ photos, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const firstPhoto = currentIndex === 0
  const lastPhoto = currentIndex === photos.length - 1

  // Max number of dots
  const MAX_DOTS = 5

  // if no photos exisits or photos is undefined
  if (!photos || photos.length === 0) {
    return <div className='w-full bg-gray-200 aspect-square rounded-2xl'></div>
  }

  // go to next function
  function goToPrevious (e) {
    e.preventDefault()
    e.stopPropagation()
    const newIndex = firstPhoto ? photos.length - 1 : currentIndex - 1 // if firstPhotoe, set newIndex to the last index of the photos array otherwise set newIndex to the current index - 1
    setCurrentIndex(newIndex)
  }

  // go to next function
  function goToNext (e) {
    e.preventDefault()
    e.stopPropagation()
    const newIndex = lastPhoto ? 0 : currentIndex + 1 // if lastPhoto, set newIndex to 0 otherwise set newIndex to the current index + 1
    setCurrentIndex(newIndex)
  }

  // go to slide function
  function goToSlide (index, e) {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(index) // set currentIndex to the index
  }

  // Preload images to see the images before sliding is used
  useEffect(() => {
    if (!photos || photos.length === 0) return

    const preloadImages = () => {
      photos.forEach(photo => {
        const img = new Image()
        img.src = `http://localhost:3000/uploads/${photo}`
      })
    }

    preloadImages()
    setLoaded(true)
  }, [photos])

  // function to determine dots to show
  function showDots () {
    // If we have 5 or fewer photos, show all of them
    if (photos.length <= MAX_DOTS) {
      return [...Array(photos.length).keys()] // return an array of numbers from 0 to the length of photos
    }
    // For more than 5 photos create a sliding window
    let start = 0
    //  Create a sliding window of 5 dots, starting from the current index
    // only if currentIndex is greater than or equal to index 4
    if (currentIndex >= MAX_DOTS - 1) {
      // Calculate the start position of where to show the dots, ensuring we don't go past the end
      start = Math.min(currentIndex - (MAX_DOTS - 2), photos.length - MAX_DOTS)
    }

    // create array of visibile dots
    const indices = []
    for (let i = 0; i < MAX_DOTS; i++) {
      indices.push(start + i)
    }
    console.log('indices', indices)
    return indices
  }

  const visibleDots = showDots()
  console.log(visibleDots)

  return (
    <>
      <div className='relative w-full h-full overflow-hidden '>
        {/* image  */}
        <div
          className='flex w-full h-full transition-all duration-300 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {/* I havent mapped through the photos */}
          {photos.map((photo, index) => (
            <div key={index} className='flex-shrink-0 w-full h-full'>
              <img
                className='object-cover w-full transition duration-200 ease-in rounded-2xl aspect-square'
                src={`http://localhost:3000/uploads/${photo}`}
                alt={`${title} - Photo ${currentIndex + 1} `}
                style={{}}
              />
            </div>
          ))}
        </div>
        {/* Left and Right arrows */}
        {photos.length > 1 && (
          <>
            {!firstPhoto && (
              <div
                className='absolute p-1 -translate-y-1/2 bg-white rounded-full cursor-pointer left-2 top-1/2 hover:bg-gray-100'
                onClick={goToPrevious}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </div>
            )}

            <div
              className='absolute p-1 -translate-y-1/2 bg-white rounded-full cursor-pointer right-2 top-1/2 hover:bg-gray-100'
              onClick={goToNext}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </>
        )}

        {/* Dots navigation */}
        {photos.length > 1 && (
          <div className='absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2'>
            {visibleDots.map(index => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full  z-10 cursor-pointer transition-opacity duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                onClick={e => goToSlide(index, e)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ImageSlider
