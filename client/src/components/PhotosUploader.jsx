import { useState } from 'react'
import axios from 'axios'

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photosLink, setPhotosLink] = useState('') // state for url link

  async function addPhotoByUrlLink (e) {
    e.preventDefault() // prevent form from submitting
    const { data: filenames } = await axios.post('/upload-by-link', {
      link: photosLink
    })
    onChange(prev => {
      return [...prev, filenames]
    }) // rename the data payload to filenames. post request to /upload-by-link. Add filenames to the setAddedPhotos array

    setPhotosLink('') // reset　url link input field to empty
  }

  function uploadPhotos (e) {
    e.preventDefault() // prevent form from submitting
    // 1. Select file from computer
    const files = e.target.files // FileList object with a File object for each file e.g. FileList { 0: File, 1: File, length: 2 } this gets us access to the files

    // 2. Create a FormData object to package files
    const data = new FormData() // FormData is a class that allows us to send data to the server
    // 3. Append each file to FormatData with key "photos". Matches with the key in the backend
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i])
      // Each append creates a key-value pair like: 'photos': Fil
    }
    // 4. Send FormData to server via POST request axios
    axios
      .post('/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) // 5. Receive response from servver with processed filenames
      .then(response => {
        const { data: filenames } = response

        // 6. Update state with new filenames
        onChange(prev => {
          return [...prev, ...filenames]
        })
      })
  }

  // remove photo function
  function removePhoto (e, link) {
    e.preventDefault()
    // onChange is a function that updates the addedPhotos array, akak the setter Function for addedPhotos
    // filters out the link that we want to remove
    onChange([...addedPhotos.filter(photo => photo !== link)])
  }

  // select photo as Main photo function
  function selectAsMainPhoto (e, link) {
    e.preventDefault()
    // reorders the photo to be at the beginning of the array
    // filters out the link that we want to remove and adds it afterwards
    onChange([link, ...addedPhotos.filter(photo => photo !== link)])
  }

  return (
    <>
      <div className='flex gap-2 mb-2'>
        <input
          value={photosLink}
          onChange={e => setPhotosLink(e.target.value)}
          type='text'
          className='text-sm outline-none'
          placeholder='Upload via a url link...'
        />
        <button
          onClick={addPhotoByUrlLink}
          className='px-4 text-sm bg-gray-200 rounded-3xl'
        >
          Add&nbsp;photo
        </button>
      </div>

      {/* Upload files */}
      <div className='grid grid-cols-2 gap-3 pt-3 mb-6 md:grid-cols-3 lg:grid-cols-4'>
        {addedPhotos.length > 0 &&
          addedPhotos.map(link => (
            <div key={link} className='relative flex h-32'>
              <img
                src={`http://localhost:3000/uploads/${link}`}
                alt=''
                className='object-cover w-full rounded-2xl'
              />
              {/* remove photo button */}
              <button
                className='absolute px-2 py-2 text-white bg-black bg-opacity-50 cursor-pointer bottom-1 right-1 rounded-xl'
                onClick={e => removePhoto(e, link)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  />
                </svg>
              </button>
              {/* change photo to be main or first in the addedPhotos */}
              <button
                className='absolute px-2 py-2 text-white bg-black bg-opacity-50 cursor-pointer bottom-1 left-1 rounded-xl'
                onClick={e => selectAsMainPhoto(e, link)}
              >
                {link === addedPhotos[0] && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 size-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
                {link !== addedPhotos[0] && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}

        <label className='flex flex-col items-center justify-center w-full h-32 gap-2 text-sm text-gray-600 bg-transparent border-2 border-gray-300 border-dotted cursor-pointer rounded-2xl hover:bg-gray-100'>
          <input
            type='file'
            className='hidden'
            name='photos' // matches middleware key field in api endpoint
            multiple // allows user to upload multiple files
            onChange={uploadPhotos}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-gray-600'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z'
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  )
}

export default PhotosUploader
