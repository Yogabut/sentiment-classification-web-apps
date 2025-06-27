import React from 'react';

function HeroSections() {
    return (
        <div>
            <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-yellow-500 uppercase leading-0">An Experiment with </p>
                            <h1 className="mt-4 text-4xl font-bold text-white lg:mt-5 sm:text-6xl xl:text-8xl">My BCA Apps Sentiment Clasification</h1>
                            <p className="mt-4 text-base text-yellow-500 lg:mt-4 sm:text-xl">Using Machine Learning Model Implementation</p>
                            <a href="/features" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-5 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                                Let's try
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <img className="w-full" src="./mybca.png" alt="apps" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSections;