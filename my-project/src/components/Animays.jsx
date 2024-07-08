import React from 'react'

function Animays({animename = "NA" , photolink = "https://play-lh.googleusercontent.com/3ha-TO-wWZA8IofnlU6tWsYJiBCYbqs8hvhB6BQnct1PgsYpAZhCPMKoYggHOX9z-1qM=w526-h296-rw" , nmae = "NA"}) {
  return (
    <>
    <figure className= "md:flex bg-slate-100 rounded-xl p-8 m-4 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto" src={photolink} alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4 md:text-left p-8">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            <p>{nmae}</p>
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                 {animename}
            </div>
            </figcaption>
        </div>
        </figure>
        
    
    </>
  )
}

export default Animays