import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'HavenCover for Guests', href: '#' },
        { name: 'Disability support', href: '#' },
        { name: 'Cancellation options', href: '#' },
        { name: 'Neighborhood concern', href: '#' }
      ]
    },
    {
      title: 'Hosting',
      links: [
        { name: 'Haven your home', href: '#' },
        { name: 'HavenCover for Hosts', href: '#' },
        { name: 'Hosting resources', href: '#' },
        { name: 'Hosting responsibly', href: '#' },
        { name: 'Community forum', href: '#' }
      ]
    },
    {
      title: 'Haven',
      links: [
        { name: 'Newsroom', href: '#' },
        { name: 'New features', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Investors', href: '#' }
      ]
    }
  ]

  return (
    <footer className='bg-[#F7F7F7] mt-10 py-10  px-4 border-t border '>
      <div className='w-full mx-auto max-w-7xl'>
        <div className='mx-auto mx-w-7xl sm:px-6 lg:px-8 bg-[#F7F7F7]'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {footerSections.map((section, index) => (
              <div className='space-y-6' key={index}>
                <h2 className='text-lg font-medium text-gray-900'>
                  {section.title}
                </h2>
                <ul className='space-y-6'>
                  {section.links.map((link, linkIndex) => (
                    <Link to={link.href} key={linkIndex}>
                      <li className='mb-3 space-x-4 text-gray-500 transition duration-150 font-base hover:text-gray-900 hover:underline'>
                        {link.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className='pt-8 mt-12 border-t border-gray-200'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              {/* left side */}
              <div className='flex items-center space-x-4 text-sm text-gray-600'>
                <span>© {new Date().getFullYear()} Haven, Inc.</span>
                <span>·</span>
                <Link className='hover:underline' to='/terms'>
                  Terms
                </Link>
                <span>·</span>
                <Link className='hover:underline' to='/sitemap'>
                  Sitemap
                </Link>
                <span>·</span>
                <Link className='hover:underline' to='/privacy'>
                  Privacy
                </Link>
              </div>

              {/* right side */}
              <div className='flex mt-4 space-x-6 md:mt-0'>
                <div className='flex items-center'>
                  <button className='flex items-center text-sm text-gray-600 hover:text-gray-900'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 mr-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'
                      />
                    </svg>
                    English (US)
                  </button>
                </div>
                <div className='text-gray-600'>
                  <span className=''>$ USD</span>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                  <Link
                    href='www.facebook.com'
                    aria-label='Facebook'
                    className='text-gray-600 hover:text-gray-900'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                    </svg>
                  </Link>
                  <Link
                    href='www.facebook.com'
                    aria-label='Facebook'
                    className='w-4 h-4 text-gray-600 hover:text-gray-900'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                    </svg>
                  </Link>
                  <Link
                    href='www.facebook.com'
                    aria-label='Facebook'
                    className='text-gray-600 hover:text-gray-900'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
