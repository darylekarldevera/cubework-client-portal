
import React, { useEffect } from 'react'

interface IErrorMessageProps {
  isVisible: boolean
}

function ErrorMessage({ isVisible }: IErrorMessageProps) {
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)

  useEffect(() => {
    if (isVisible) {
      setShowErrorMessage(!showErrorMessage)
    }
  }, [isVisible])

  if (!showErrorMessage) return null

  return (
    <div className="absolute bg-black/[.54] w-full h-full flex justify-center items-center z-10 inset-0">
      <div className="bg-white p-4 rounded-lg flex flex-col">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Something went wrong. Please try again later.</p>
        <button className="ml-auto mt-5 py-2 px-3 bg-[#4EB951] text-white rounded-sm cursor-pointer" onClick={() => setShowErrorMessage(!showErrorMessage)}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage
