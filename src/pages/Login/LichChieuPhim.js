import React from 'react'

const rapChieu = [
    { "stt": 1, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png", },
    { "stt": 2, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/cgv.png", },
    { "stt": 3, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png", },
    { "stt": 4, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png", },
    { "stt": 5, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png", },
    { "stt": 6, "src": "https://movie0706.cybersoft.edu.vn/hinhanh/megags.png", },

];
const rapChieuDiaChi = [
    { "stt": 1, "ten": "CGV - PANDORA CITY", "diaChi": "Lầu 3, pandora city, Q1", },
    { "stt": 2, "ten": "CGV - AEON Tân Phú", "diaChi": "30 Tân Thắng, AEON, Tân Phú", },
    { "stt": 3, "ten": "CGV - AEON Tân Bình", "diaChi": "Tầng 3 TTTM AEON, Tân Bình", },
    { "stt": 4, "ten": "CGV - GOLDEN PLAZA", "diaChi": "Tầng 3 TTTM Golden Plaza, Q4", },
    { "stt": 5, "ten": "CGV - PEARL PLAZA", "diaChi": "Lầu 5 TTTM Pearl Plaza, Q1", },

];

const ngayChieu = [
    { "stt": 1, "thu": "Thứ 2", "ngay": "20", "thang": "Tháng 05", },
    { "stt": 2, "thu": "Thứ 3", "ngay": "21", "thang": "Tháng 05", },
    { "stt": 3, "thu": "Thứ 4", "ngay": "22", "thang": "Tháng 05", },
];

const gioChieu = [
    { "stt": 1, "gio": "10:00", },
    { "stt": 2, "gio": "10:30", },
    { "stt": 3, "gio": "11:00", },
    { "stt": 4, "gio": "11:15", },
    { "stt": 5, "gio": "11:30", },
    { "stt": 6, "gio": "12:00", },
    { "stt": 7, "gio": "12:15", },
    { "stt": 8, "gio": "12:30", },
    { "stt": 9, "gio": "12:45", },
    { "stt": 10, "gio": "13:00", },
    { "stt": 11, "gio": "13:15", },
    { "stt": 12, "gio": "13:30", },
    { "stt": 13, "gio": "14:00", },
    { "stt": 14, "gio": "14:15", },
    { "stt": 15, "gio": "14:30", },
    { "stt": 16, "gio": "15:00", },
    { "stt": 17, "gio": "15:15", },
    { "stt": 18, "gio": "15:30", },
    { "stt": 19, "gio": "15:45", },
    { "stt": 20, "gio": "16:00", },
];

let movieRapChieu = () => {
    let objMang = rapChieu.map((item, index) => {
        return <div className="" key={item.stt}>
            <button type="button" className="lichChieuPhim rounded-full">
                <img className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" src={item.src} alt="" />
                {/* <p className="">{item.src}</p> */}
            </button>
        </div>
    }
    )
    return objMang
}
let movieRapChieuDiaChi = () => {
    let objMang = rapChieuDiaChi.map((item, index) => {
        return <div className="" key={item.stt}>
            <button type="button" className="rounded-lg lichChieuPhim w-full">
                <p className="text-sm sm:text-xl">{item.ten}</p>
                <p className="text-xs sm:text-sm">{item.diaChi}</p>
            </button>
        </div>
    }
    )
    return objMang
}

let movieNgayChieu = () => {
    let objMang = ngayChieu.map((item, index) => {
        return <div className="" key={item.stt}>
            <button type="button" className="lichChieuPhim">
                <p className="text-sm">{item.thu}</p>
                <p className="text-4xl font-bold">{item.ngay}</p>
                <p className="text-sm">{item.thang}</p>
            </button>
        </div>
    }
    )
    return objMang
}


let movieGioChieu = () => {
    let objMang = gioChieu.map((item, index) => {
        return <div className="" key={item.stt}>
            <button type="button" className="rounded-full lichChieuPhim w-full">
                <p className="">{item.gio}</p>
            </button>
        </div>
    }
    )
    return objMang
}

export default function LichChieuPhim() {
    return (
        <div>

            {/* Rạp */}
            <div>
                <p className="font-bold text-white text-2xl text-center">Các bước đặt vé:</p>
                <div className="mb-4 text-center">
                    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                        <li className="flex items-center text-white">
                            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
                                1
                            </span>
                            Chọn rạp
                            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                                2
                            </span>
                            Chọn lịch chiếu
                            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                                3
                            </span>
                            Chọn ghế
                        </li>
                    </ol>
                </div>
            </div>
            <div className="text-center">
                <div className="inline-flex rounded-md shadow-sm gap-2 sm:gap-4 mb-8 px-4" role="group">
                    {movieRapChieu()}
                </div>
            </div>
            <div className="text-center">
                <div className="inline-flex rounded-md shadow-sm gap-2 sm:gap-4 mb-8 px-4" role="group">
                    {movieRapChieuDiaChi()}
                </div>
            </div>

            {/* Ngày */}
            <div className="mb-4 text-center">
                <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                            1
                        </span>
                        Chọn rạp
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center text-white">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
                            2
                        </span>
                        Chọn lịch chiếu
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                            3
                        </span>
                        Chọn ghế
                    </li>
                </ol>
            </div>
            <div className="bg-stone-700 text-center">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    {movieNgayChieu()}
                </div>

            </div>

            {/* Giờ */}
            <div className="mt-4 text-center">
                <p className="text-white">Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và Khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.</p>
                <div className="mx-auto w-full max-w-screen-xl p-4 pt-4 pb-8 lg:pb-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
                    {movieGioChieu()}
                </div>
            </div>


            <div className="mb-4 text-center">
                <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium justify-center rounded-lg shadow-sm text-stone-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                            1
                        </span>
                        Chọn rạp
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-stone-500 rounded-full shrink-0">
                            2
                        </span>
                        Chọn lịch chiếu
                        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li className="flex items-center text-white">
                        <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-white rounded-full shrink-0">
                            3
                        </span>
                        Chọn ghế
                    </li>
                </ol>
            </div>
        </div>
    )
}
