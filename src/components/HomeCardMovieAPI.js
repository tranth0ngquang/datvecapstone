import React from 'react'

export default function HomeCardMovieAPI() {
    const imgCardMovieAPI = [
        {
            "stt": 1, "name": "NGÔI ĐỀN", "LoaiPhim": "Kinh dị", "Lich": "31/05/2024", "Tuoi": "18+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017487_0.jpg&w=256&q=75",
        },

        {
            "stt": 2, "name": "Dune", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
            "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90",
        },

        {
            "stt": 3, "name": "FURIOSA", "LoaiPhim": "Kinh dị", "Lich": "20/05/2024", "Tuoi": "18+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017592_0.jpg&w=256&q=75",
        },

        {
            "stt": 4, "name": "ABIGAIL", "LoaiPhim": "Kinh dị", "Lich": "20/05/2024", "Tuoi": "18+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017585_0.jpg&w=256&q=75",
        },

        {
            "stt": 5, "name": "TAROT", "LoaiPhim": "Kinh dị", "Lich": "20/05/2024", "Tuoi": "18+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017548_0.jpg&w=256&q=75",
        },

        {
            "stt": 6, "name": "DORAEMON", "LoaiPhim": "Hoạt hình", "Lich": "30/05/2024", "Tuoi": "P",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017521_0.jpg&w=256&q=75",
        },

        {
            "stt": 7, "name": "THÁNG TƯ", "LoaiPhim": "Tình cảm", "Lich": "30/05/2024", "Tuoi": "13+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017563_0.jpg&w=256&q=75",
        },

        {
            "stt": 8, "name": "Haikyu!!", "LoaiPhim": "Hoạt hình", "Lich": "30/05/2024", "Tuoi": "P",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017589_0.jpg&w=256&q=75",
        },

        {
            "stt": 9, "name": "LẬT MẶT 7", "LoaiPhim": "Tình cảm", "Lich": "30/05/2024", "Tuoi": "K",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017488_0.jpg&w=256&q=75",
        },

        {
            "stt": 10, "name": "VÂY HÃM", "LoaiPhim": "Hành động", "Lich": "30/05/2024", "Tuoi": "16+",
            "src": "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017511_0.jpg&w=256&q=75",
        },

    ];

    let renderCardMoiveAPI = () => {
        let objMang = imgCardMovieAPI.map((item, index) => {
            return <div className="" key={item.stt}>
                <div className="max-w-sm border rounded-lg shadow bg-stone-900 border-stone-700 text-center hover:bg-black hover:border-stone-500 model_box">
                    <div className="model_img relative h-60">
                        <a href="#">
                            <img className="" src={item.src} alt />
                        </a>
                        <div className="absolute bottom-2 z-10 cardMovie_none">
                            <span className="p-3">
                                <button type="button" class="btn_trang text-sm">Xem chi tiết</button>
                            </span>
                            <span className="p-3">
                                <button type="button" class="btn_den text-sm">Đặt vé ngay</button>
                            </span>
                        </div>

                    </div>

                    <div className="p-2">
                        <p className="text-stone-400 cardMovie_block">{item.Lich}</p>
                        <p className="text-stone-400 cardMovie_none text-sm">{item.LoaiPhim} | {item.Lich} | {item.Tuoi}</p>
                        <a href="#">
                            <h5 className="mb-2 font-bold text-white text-xl">{item.name}</h5>
                        </a>
                    </div>
                </div>
            </div>
        }
        )
        return objMang
    }

    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-6">
            {renderCardMoiveAPI()}
        </div>
    )
}