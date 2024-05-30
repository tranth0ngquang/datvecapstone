import React from 'react'
import HomeImg from '../HomePage/HomeImg'
import HomeCardMovie from '../../components/HomeCardMovie'


export default function SignUpMovie() {
    return (
        <div>
            <section className="bg-cover bg-no-repeat bg-[url('https://www.usatoday.com/gcdn/-mm-/83e081eae80cd2848af52df6da1060d621468f19/c=0-111-2120-1303/local/-/media/2021/02/04/USATODAY/usatsports/red-movie-theater-seats.jpg?width=2120&height=1192&fit=crop&format=pjpg&auto=webp')] bg-stone-700 bg-blend-multiply" style={{height:650}}>
                <div className="mx-auto max-w-screen-xl px-4 py-28 lg:py-36">
                    <h2 className="mb-4 font-bold tracking-tight leading-none text-white text-2xl md:text-3xl lg:text-4xl text-center">SIGN UP</h2>
                    <form className="max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_name" id="floating_name" className="peer loginMovie_input" placeholder=" " required />
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
                                <input type="text" name="floating_name" id="floating_name" className="peer loginMovie_input" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="loginMovie_label">Họ và tên</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_last_name" id="floating_email" className="peer loginMovie_input" placeholder=" " required />
                                <label htmlFor="floating_email" className="loginMovie_label rtl:peer-focus:left-auto">Địa chỉ Email</label>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <button type="button" class="btn_den text-xl">Đăng ký</button>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-stone-400">Bạn đã có tài khoản? </span>
                            <span className="text-stone-200 hover:text-white"><a href="">Đăng nhập ngay</a></span>
                        </div>
                    </form>
                </div>

            </section>



            <HomeImg />
            <HomeCardMovie />
        </div>
    )
}
