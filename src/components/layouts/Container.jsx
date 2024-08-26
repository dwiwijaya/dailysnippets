import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen sm:p-8">
            <div className="h-full w-full sm:w-[40rem] sm:h-[30rem] flex flex-col relative bg-container p-4 rounded-lg border border-stroke">
                {children}
            </div>
        </div>
    )
}

export default Container