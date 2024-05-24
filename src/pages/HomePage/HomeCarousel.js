import React from 'react'
import HomeCarouselVideo from './HomeCarouselVideo'

export default function HomeCarousel() {
    return (
        // style={{height:800}}
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden rounded-b-2xl bg-black" style={{height:800}}>
                {/* Item 1 */}
                <HomeCarouselVideo/>
                {/* Item 2 */}
                <HomeCarouselVideo/>
                {/* Item 3 */}
                <HomeCarouselVideo/>
                {/* Item 4 */}
                <HomeCarouselVideo/>
                {/* Item 5 */}
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>v
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div> */}
                <HomeCarouselVideo/>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-8 left-1/2">
                <button type="button" className="w-2.5 h-2.5 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
                <button type="button" className="w-2.5 h-2.5 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
                <button type="button" className="w-2.5 h-2.5 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
                <button type="button" className="w-2.5 h-2.5 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
                <button type="button" className="w-2.5 h-2.5 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-transparent group-hover:bg-black/80 border border-white/50 hover:border-white">
                    <svg className="w-3 h-3 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-transparent group-hover:bg-black/80 border border-white/50 hover:border-white">
                    <svg className="w-3 h-3 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}
