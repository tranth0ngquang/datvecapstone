import React from 'react'
import HomeImg from '../HomePage/HomeImg'
import HomeCardMovie from '../../components/HomeCardMovie'

const imgCardMovie = [
    {
        "stt": 1, "name": "Dune 1", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
        "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90",
    },

    {
        "stt": 2, "name": "Dune 2", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
        "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-2.jpg?cbr=1&q=90",
    },

    {
        "stt": 3, "name": "Dune 3", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
        "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-5.jpg?cbr=1&q=90",
    },

    {
        "stt": 4, "name": "Dune 4", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
        "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-3.jpg?cbr=1&q=90",
    },

    {
        "stt": 5, "name": "Dune 5", "LoaiPhim": "VienTuong", "Lich": "20/05/2024", "Tuoi": "16+",
        "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-8.jpg?cbr=1&q=90",
    },

];

let renderCardMoiveDaDat = () => {
    let objMang = imgCardMovie.map((item, index) => {
        return <div className="" key={item.stt}>
            <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl bg-stone-900 border-stone-700 hover:bg-black">
                <img className="object-cover rounded-t-lg h-60 md:h-auto w-full md:w-48 md:rounded-none md:rounded-s-lg" src={item.src} alt />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="text-stone-400 cardMovie_block">Ngày đặt: 17/05/2024 | 17:05</p>
                    <h5 className="font-bold text-white text-2xl">Tên phim: {item.name}</h5>
                    <p className="text-stone-400 text-sm">{item.LoaiPhim} | {item.Lich} | {item.Tuoi}</p>
                    <p className="mb-2 text-stone-400 text-sm">Thời lượng: 120 phút</p>
                    <p className="text-stone-400 text-sm">Rạp: CGV | phòng 6 | ghế số: 10, 11</p>
                    <p className="text-stone-400 text-sm">Giá vé: 90.000 VNĐ</p>
                </div>
            </div>
        </div>
    }
    )
    return objMang
}

export default function QuanTriKHMovie() {
    return (
        <div>
            <section className="bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/564x/46/67/b5/4667b5f64382e76cf154c0fd79ff5a42.jpg')] bg-stone-700 bg-blend-multiply">
                <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">

                    <h2 className="mb-2 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">Cài đặt tài khoản</h2>
                    <p className="mb-4 text-stone-400 text-center">Thông tin có thể được thay đổi</p>
                    <form className="max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="peer loginMovie_input" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="loginMovie_label">Tên tài khoản</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password" id="floating_password" className="peer loginMovie_input" placeholder=" " required />
                            <label htmlFor="floating_password" className="loginMovie_label">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="repeat_password" id="floating_repeat_password" className="peer loginMovie_input" placeholder=" " required />
                            <label htmlFor="floating_repeat_password" className="loginMovie_label">Nhập lại Password</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="peer loginMovie_input" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="loginMovie_label">Họ và tên</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="peer loginMovie_input" placeholder=" " required />
                                <label htmlFor="floating_email" className="loginMovie_label rtl:peer-focus:left-auto">Địa chỉ Email</label>
                            </div>
                        </div>
                    </form>
                    <div className="my-4 text-center">
                        <button type="button" class="btn_den text-xl">Cập nhật</button>
                    </div>


                    {/* lịch sử đã đặt */}
                    <h2 className="mt-2 font-bold tracking-tight leading-none text-white text-xl md:text-2xl lg:text-3xl text-center">Lịch sử đã đặt</h2>

                    <div className="mx-auto w-full max-w-screen-xl p-4 pt-8 pb-8 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6">
                        {renderCardMoiveDaDat()}
                    </div>
                </div>

            </section>



            <HomeImg />
            <HomeCardMovie />
        </div>
    )
}
