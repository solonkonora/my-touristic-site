'use client'

export default function Form() {
  return (
    <div className="bg-white sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl pt-4">Get in Touch</h2>
        <p className="mt-2 text-lg leading-8 text-black px-2">
          We would love to hear from you if you have any comments or suggestions about our website or our services, just get in touch. We are always looking for ways to improve and make your travel experience even better.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 border border-gray-300 rounded-lg p-6">
      <p className="font-bold text-lg pb-3">contact us</p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                /> */}
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-steal-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-1/4 rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Let's talk
          </button>
        </div>
      </form>


      <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* First Div: Social Media */}
    <div className="shadow-lg p-6 bg-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Social Media</h3>
      <div className="flex justify-center space-x-3">
        <div className="border border-white-300 p-2 rounded-full">
          <img className="w-6 h-6" src="/images/twi.png" alt="Twitter" />
        </div>
        <div className="border border-white-300 p-2 rounded-full">
          <img className="w-6 h-6" src="/images/fb.png" alt="Facebook" />
        </div>
        <div className="border border-white-300 p-2 rounded-full">
          <img className="w-6 h-6" src="/images/linkin.png" alt="LinkedIn" />
        </div>
        <div className="border border-white-300 p-2 rounded-full">
          <img className="w-6 h-6" src="/images/ut.png" alt="utube" />
        </div>
      </div>
    </div>

    {/* Second Div: Email & Phone */}
    <div className="shadow-lg p-6 bg-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Email & Phone</h3>
      <div className="flex items-center mb-4">
        <img className="w-6 h-6 mr-2" src="/images/email.png" alt="Email" />
        <span>info@example.com</span>
      </div>
      <div className="flex items-center">
        <img className="w-6 h-6 mr-2" src="/images/phone.png" alt="Phone" />
        <span>237-123-456-7890</span>
      </div>
    </div>

    {/* Third Div: Address */}
    <div className="shadow-lg p-6 bg-white rounded-xl">
      <h3 className="text-xl font-bold mb-4">Address</h3>
      <p className="mb-2">1234 Safari Avenue</p>
      <p>Cityville, 56789</p>
    </div>

  </div>
</div>

    </div>
  )
}