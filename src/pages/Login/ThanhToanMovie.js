import React from 'react'
import HomeImg from '../HomePage/HomeImg'
import HomeCardMovie from '../../components/HomeCardMovie'

export default function ThanhToanMovie() {
  return (
    <div>
      <section className="bg-cover bg-no-repeat bg-[url('https://img-assets.drafthouse.com/images/venues/wrigleyville/Alamo-Draft-House-32.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1080&q=80&w=1920')] bg-stone-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">

          <h2 className="mb-2 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">Thông tin đặt vé</h2>
          <p className="mb-4 text-stone-400 text-center">Khi thanh toán xong không hoàn, hủy vé</p>

          <div className="flex flex-col md:flex-row items-center border rounded-lg shadow bg-stone-900/70 border-stone-700 hover:bg-stone-900">
            <img className="object-cover rounded-t-lg h-60 md:h-auto w-full md:w-80 md:rounded-none md:rounded-s-lg" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fdune-character-posters-timothee-chalamet-zendaya-cast-movie-1.jpg?cbr=1&q=90" alt />
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <h5 className="text-stone-400 text-xl">Tên phim:</h5>
                  <h5 className="font-bold text-white text-4xl">DUNE</h5>
                </div>
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400">Thể loại: Viễn tưởng, hành động</p>
                  <p className="text-stone-400">Độ tuổi: 16+</p>
                  <p className="text-stone-400">Thời lượng: 120 phút</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400 text-sm">Ngày đặt:</p>
                  <p className="text-white mb-4 text-xl">17/05/2024 | 17:05</p>

                  <p className="text-stone-400 text-sm">Ngày giờ chiếu:</p>
                  <p className="text-white mb-4 text-xl">20/05/2024 | 20:00</p>

                  <p className="text-stone-400 text-sm">Rạp:</p>
                  <p className="text-white mb-4 text-xl">CGV - Quận 1</p>

                  <p className="text-stone-400">Phòng:</p>
                  <p className="text-white mb-4 text-xl">Số 6</p>

                </div>

                <div className="flex-grow justify-between p-6 leading-normal basis-1/2">
                  <p className="text-stone-400 text-sm">Ghế số:</p>
                  <p className="text-white mb-4 text-xl">10, 11</p>

                  <p className="text-stone-400 text-sm">Giá vé:</p>
                  <p className="text-white mb-4 text-xl">90.000 VNĐ</p>

                  <div className="my-4">
                    <button type="button" class="btn_trang text-xl">Thanh toán</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>



      <HomeImg />
      <HomeCardMovie />
    </div>
  )
}
