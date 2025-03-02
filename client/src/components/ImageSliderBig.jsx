import { useState, useEffect } from 'react'

const ImageSliderBig = ({ photos, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [nextIndex, setNextIndex] = useState(null)
  const firstPhoto = currentIndex === 0
  const lastPhoto = currentIndex === photos.length - 1

  // if no photos exisits or photos is undefined
  if (!photos || photos.length === 0) {
    return <div className='w-full bg-gray-200 aspect-square rounded-2xl'></div>
  }

  // handle fade transition
  const changeSlide = newIndex => {
    setFadeOut(true)
    setNextIndex(newIndex)

    // Wait for fade to complete
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setFadeOut(false)
    }, 300)
  }

  // go to next function
  function goToPrevious (e) {
    e.preventDefault()
    e.stopPropagation()
    const newIndex = firstPhoto ? photos.length - 1 : currentIndex - 1 // if firstPhotoe, set newIndex to the last index of the photos array otherwise set newIndex to the current index - 1
    changeSlide(newIndex)
  }

  // go to next function
  function goToNext (e) {
    e.preventDefault()
    e.stopPropagation()
    const newIndex = lastPhoto ? 0 : currentIndex + 1 // if lastPhoto, set newIndex to 0 otherwise set newIndex to the current index + 1
    changeSlide(newIndex)
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

  function onClose () {
    e.preventDefault()
    e.stopPropagation()
    if (onClose) onClose()
  }

  return (
    <>
      <div className='fixed inset-0 z-50 flex flex-col w-full bg-black'>
        {/* header*/}
        <div className='flex items-center justify-between px-8 py-4 text-white'>
          {/* close button */}
          <div className='flex items-center '>
            <button
              onClick={onClose}
              className='flex items-center justify-center gap-2 p-2 text-white rounded-full cursor-pointer '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 cursor-pointer size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
              <span className='text-base cursor-pointer'>Close</span>
            </button>
          </div>

          {/* image counter */}
          <div className='font-semibold text-center'>
            {currentIndex + 1 + '/' + photos.length}
          </div>

          {/* Share and like buttons */}
          <div className='flex gap-2'>
            <button className='p-2 rounded-full hover:bg-gray-800'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
                />
              </svg>
            </button>
            <button className='p-2 rounded-full hover:bg-gray-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main image area */}
        <div className='relative flex items-center justify-center flex-grow'>
          {' '}
          {/* Image Container */}
          <div className='relative w-full h-full max-w-6xl px-10 mx-auto'>
            <div className='relative w-full h-full max-w-6xl px-10 mx-auto'>
              <div
                className={`w-full h-full transition-opacity duration-200 ease-in ${
                  fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className='flex items-center justify-center w-full h-full'>
                  <img
                    src={`http://localhost:3000/uploads/${photos[currentIndex]}`}
                    className='object-contain max-w-full max-h-full'
                    alt={`${title} - Photo ${currentIndex + 1}`}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          {photos.length > 1 && (
            <>
              <div className='px-4'>
                {!firstPhoto && (
                  <button
                    onClick={goToPrevious}
                    aria-label='Previous image'
                    className='absolute p-3 ml-5 text-white -translate-y-1/2 bg-transparent border rounded-full cursor-pointer left-4 top-1/2 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-4 '
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </button>
                )}

                {!lastPhoto && (
                  <button
                    aria-label='Next image'
                    onClick={goToNext}
                    className='absolute p-3 mr-5 text-white -translate-y-1/2 bg-transparent border rounded-full cursor-pointer right-4 top-1/2 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m8.25 4.5 7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ImageSliderBig
