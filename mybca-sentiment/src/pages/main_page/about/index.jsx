import React from 'react';

function About() {
    return (
        <section className="py-10 sm:py-16 lg:py-24" id='about'>
            {/* Garis pembatas */}
            <div className="flex justify-center mb-10 sm:mb-16 lg:mb-24">
                <div className="w-250 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="relative">
                        {/* Efek lampu/glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        </div>
                        <h2 className="relative text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            How does it work?
                        </h2>
                    </div>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="relative mt-12 lg:mt-20 ">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28 ">
                        <img className="w-full " src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue border-2 border-gray-500 rounded-full shadow hover:shadow-lime-500 transition-shadow duration-300">
                                <span className="text-xl font-semibold text-gray-200"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-400 md:mt-10">Click "Let's try" button </h3>
                            <p className="mt-4 text-base text-gray-600">Klik button "Lets try" pada bagian home, atau bagian sebelumnya</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue border-2 border-gray-500 rounded-full shadow hover:shadow-lime-500 transition-shadow duration-300">
                                <span className="text-xl font-semibold text-gray-200"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-400 md:mt-10">Insert the words</h3>
                            <p className="mt-4 text-base text-gray-600">Masukan kalimat mengenai aplikasi MyBCA yang anda inginkan, kemudian klik analyst.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue border-2 border-gray-500 rounded-full shadow hover:shadow-lime-500 transition-shadow duration-300">
                                <span className="text-xl font-semibold text-gray-200"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-400 md:mt-10">Wait a second</h3>
                            <p className="mt-4 text-base text-gray-600">Setelah klik button analyst, tunggu beberapa saat untuk hasil klasifikasi sentiment dari kalimat yang anda masukan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;