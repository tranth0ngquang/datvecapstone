import React from 'react'

export default function HomeSearch() {
    return (

        <form className="mx-auto w-full max-w-screen-md p-4 lg:pt-20 pt-8">
            <h2 className="mb-8 text-center text-stone-400 font-bold text-2xl">PHIM ĐANG CHIẾU</h2>
            <div className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium sr-only text-white"></label>

                {/* Phim */}
                <button id="dropdown_phim_btn" data-dropdown-toggle="dropdown_phim" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border rounded-s-lg focus:ring-1 focus:outline-none bg-black hover:bg-stone-800 focus:ring-stone-700 text-white border-stone-700" type="button">
                    Phim
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dropdown_phim" className="z-10 hidden divide-y divide-stone-100 rounded-lg shadow w-44 bg-stone-900">
                    <ul className="py-2 text-sm text-stone-200" aria-labelledby="dropdown_phim_btn">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Phim 1</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Phim 2</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Phim 3</button>
                        </li>
                    </ul>
                </div>

                {/* Rạp */}
                <button id="dropdown_rap_btn" data-dropdown-toggle="dropdown_rap" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border focus:ring-1 focus:outline-none bg-black hover:bg-stone-800 focus:ring-stone-700 text-white border-stone-700" type="button">
                    Rạp
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dropdown_rap" className="z-10 hidden divide-y divide-stone-100 rounded-lg shadow w-44 bg-stone-900">
                    <ul className="py-2 text-sm text-stone-200" aria-labelledby="dropdown_rap_btn">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Rạp 1</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Rạp 2</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Rạp 3</button>
                        </li>
                    </ul>
                </div>

                {/* Lịch chiếu */}
                <button id="dropdown_lich_btn" data-dropdown-toggle="dropdown_lich" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border focus:ring-1 focus:outline-none bg-black hover:bg-stone-800 focus:ring-stone-700 text-white border-stone-700" type="button">
                    Lịch chiếu
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dropdown_lich" className="z-10 hidden divide-y divide-stone-100 rounded-lg shadow w-44 bg-stone-900">
                    <ul className="py-2 text-sm text-stone-200" aria-labelledby="dropdown_lich_btn">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Lịch chiếu 1</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Lịch chiếu 2</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-600 hover:text-white">Lịch chiếu 3</button>
                        </li>
                    </ul>
                </div>

                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg border-s-2 border focus:ring-blue-500 bg-stone-900 border-s-stone-700 border-stone-600 placeholder-stone-400 text-white focus:border-blue-500" placeholder="Tìm kiếm phim..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white  rounded-e-lg border border-blue-700 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>


    )
}
