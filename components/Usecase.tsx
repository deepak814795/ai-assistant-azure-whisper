import React from 'react'
import ss from "@/img/ss.png"
const Usecase = () => {
  return (
    <section className="bg-white dark:bg-gray-900 font-mono">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:items-center">
      <div className="w-full space-y-12 lg:w-1/2 ">
        
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            How to use Audify AI
          </h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
          </div>
        </div>

        <div className="md:flex md:items-start md:-mx-4 pt-[-2rem]">
          <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-xl font-semibold text-gray-700  dark:text-white">
              Start and Stop Recording
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-300">
             After you press the start icon, you can start speaking, and Whisper AI will start processing your voice.
             <br/> <br/>
             After you are done speaking, you can press the stop Icon. As soon as you press the stop Icon you will get back your 
            response.

            </p>
          </div>
        </div>

       
        <div className="md:flex md:items-start md:-mx-4">
          <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </span>
          <div className=" md:mx-4 md:mt-0">
            <h1 className="text-xl font-semibold text-[#FF0000] capitalize dark:text-white">
             NOTE
            </h1>
            <p className="mt-3 text-black dark:text-gray-300 text-md">
              Speak loud and clear and also speak in a surrounding with very low disturbance voice or else your response might vary.
              <br/>
              The application might crash due to 10 seconds runtime limit on server actions on  vercel&apos;s free plan, in case of crash just refresh the page.
            </p>
          </div>
        </div>

     </div>
      <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
        <img
          className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem]"
          src={ss.src}
          alt=""
          height={50}
          width={50}
        />
      </div>
    </div>
    <hr className="my-12 border-gray-200 dark:border-gray-700" />
   
  </div>
</section>

  )
}

export default Usecase