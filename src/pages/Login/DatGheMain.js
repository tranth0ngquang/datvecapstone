import React from 'react'

const arrMovie = [
    { "stt": 1, "maGhe": "1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 2, "maGhe": "2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 3, "maGhe": "3", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 4, "maGhe": "4", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 5, "maGhe": "5", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 6, "maGhe": "6", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 7, "maGhe": "7", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 8, "maGhe": "8", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 9, "maGhe": "9", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 10, "maGhe": "10", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 11, "maGhe": "11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 12, "maGhe": "12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 13, "maGhe": "13", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 14, "maGhe": "14", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 15, "maGhe": "15", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 16, "maGhe": "16", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 17, "maGhe": "17", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 18, "maGhe": "18", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 19, "maGhe": "19", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 20, "maGhe": "20", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 21, "maGhe": "21", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 22, "maGhe": "22", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 23, "maGhe": "23", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 24, "maGhe": "24", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 25, "maGhe": "25", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 26, "maGhe": "26", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 27, "maGhe": "27", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 28, "maGhe": "28", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 29, "maGhe": "29", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 30, "maGhe": "30", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 31, "maGhe": "31", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 32, "maGhe": "32", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 33, "maGhe": "33", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 34, "maGhe": "34", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 35, "maGhe": "35", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 36, "maGhe": "36", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 37, "maGhe": "37", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 38, "maGhe": "38", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 39, "maGhe": "39", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 40, "maGhe": "40", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 41, "maGhe": "41", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 42, "maGhe": "42", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 43, "maGhe": "43", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 44, "maGhe": "44", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 45, "maGhe": "45", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 46, "maGhe": "46", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 47, "maGhe": "47", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 48, "maGhe": "48", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 49, "maGhe": "49", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 50, "maGhe": "50", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 51, "maGhe": "51", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 52, "maGhe": "52", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 53, "maGhe": "53", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 54, "maGhe": "54", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 55, "maGhe": "55", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 56, "maGhe": "56", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 57, "maGhe": "57", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 58, "maGhe": "58", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 59, "maGhe": "59", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 60, "maGhe": "60", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 61, "maGhe": "61", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 62, "maGhe": "62", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 63, "maGhe": "63", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 64, "maGhe": "64", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 65, "maGhe": "65", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 66, "maGhe": "66", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 67, "maGhe": "67", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 68, "maGhe": "68", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 69, "maGhe": "69", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 70, "maGhe": "70", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 71, "maGhe": "71", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 72, "maGhe": "72", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 73, "maGhe": "73", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 74, "maGhe": "74", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 75, "maGhe": "75", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 76, "maGhe": "76", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 77, "maGhe": "77", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 78, "maGhe": "78", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 79, "maGhe": "79", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 80, "maGhe": "80", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 81, "maGhe": "81", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 82, "maGhe": "82", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 83, "maGhe": "83", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 84, "maGhe": "84", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 85, "maGhe": "85", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 86, "maGhe": "86", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 87, "maGhe": "87", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 88, "maGhe": "88", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 89, "maGhe": "89", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 90, "maGhe": "90", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 91, "maGhe": "91", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 92, "maGhe": "92", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 93, "maGhe": "93", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 94, "maGhe": "94", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 95, "maGhe": "95", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 96, "maGhe": "96", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 97, "maGhe": "97", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 98, "maGhe": "98", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 99, "maGhe": "99", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 100, "maGhe": "100", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 101, "maGhe": "101", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 102, "maGhe": "102", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 103, "maGhe": "103", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 104, "maGhe": "104", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 105, "maGhe": "105", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 106, "maGhe": "106", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 107, "maGhe": "107", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 108, "maGhe": "108", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 109, "maGhe": "109", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 110, "maGhe": "110", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 111, "maGhe": "111", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
    { "stt": 112, "maGhe": "112", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },

    { "stt": 113, "maGhe": "113", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 114, "maGhe": "114", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 115, "maGhe": "115", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 116, "maGhe": "116", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 117, "maGhe": "117", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 118, "maGhe": "118", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
    { "stt": 119, "maGhe": "119", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 120, "maGhe": "120", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 121, "maGhe": "121", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 122, "maGhe": "122", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 123, "maGhe": "123", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 124, "maGhe": "124", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 125, "maGhe": "125", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 126, "maGhe": "126", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
    { "stt": 127, "maGhe": "127", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 128, "maGhe": "128", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 129, "maGhe": "129", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 130, "maGhe": "130", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 131, "maGhe": "131", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 132, "maGhe": "132", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 133, "maGhe": "133", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 134, "maGhe": "134", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 135, "maGhe": "135", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 136, "maGhe": "136", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 137, "maGhe": "137", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 138, "maGhe": "138", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 139, "maGhe": "139", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 140, "maGhe": "140", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 141, "maGhe": "141", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 142, "maGhe": "142", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 143, "maGhe": "143", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 144, "maGhe": "144", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

    { "stt": 145, "maGhe": "145", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 146, "maGhe": "146", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 147, "maGhe": "147", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 148, "maGhe": "148", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 149, "maGhe": "149", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 150, "maGhe": "150", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 151, "maGhe": "151", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 152, "maGhe": "152", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 153, "maGhe": "153", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 154, "maGhe": "154", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 155, "maGhe": "155", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 156, "maGhe": "156", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 157, "maGhe": "157", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 158, "maGhe": "158", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 159, "maGhe": "159", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
    { "stt": 160, "maGhe": "160", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },


]


let renderGhe = () => {
    return arrMovie.map((item, index) => {
        let classGheL1 = item.loaiGhe === "Loai1" ? 'seatL1' : ''
        let classGheL2 = item.loaiGhe === "Loai2" ? 'seatL2' : ''

        let classGheDaDat = item.daDat === true ? 'seatReser' : ''

        // let hanhLangDoc = item.stt % 12 == 5 ? 'docHL' : ''
        // let hanhLangNgang = item.stt == 61 ? 'ngangHL' : ''


        // let classGheDangDat = ''
        // let indexGheDangDat = this.props.state.danhSachGhe.findIndex(gheDD => gheDD.maGhe == item.maGhe)
        // if (indexGheDangDat != -1) {
        //     classGheDangDat = 'seatSelect'
        // }
        // console.log(this.props.state.danhSachGhe)


        return <span key={index}>
            <button onClick={() => {
                // danhSachGheDangDat(item)
            }
            } disabled={item.daDat} className={`seat ${classGheL1} ${classGheL2} ${classGheDaDat} `} key={item.maGhe}>
                {/* ${hanhLangDoc} ${hanhLangNgang} */}
                {item.daDat ? 'X' : item.maGhe}
            </button>

            {(index + 1) % 16 == 0 ? <br /> : ''}
        </span>

    }
    )
}

export default function DatGheMain() {
    return (
        <div className='soDoGhe mt-5'>
            <h4 className='text-white text-xl lg:text-2xl text-center mb-2'>Sơ đồ ghế trong phòng chiếu 01</h4>

            <div className='text-center mt-8 text-white'>
                <div className='m-auto w-3/4 h-4'>
                    <svg className="fill-yellow-600/10" data-name="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1890.66 98.96">
                        <defs>
                            <style dangerouslySetInnerHTML={{ __html: ".cls-1{stroke:rgb(202 138 4);stroke-miterlimit:10;stroke-width:9.19px;}" }} />
                        </defs>
                        <path className="cls-1" d="M16.11,111.9s273.81-90,943.89-90,943.89,90,943.89,90" transform="translate(-14.67 -17.31)" />
                    </svg>

                </div>
                <p className='m-auto w-3/4 p-3'>Màn Hình</p>
                <div className='soDoGhe_SD_ghe mt-5 text-xs sm:text-sm'>
                    {renderGhe()}
                </div>
            </div>

            <div className="text-center">
                <div className="inline-flex gap-4 my-4 text-white" role="group">
                    <div className='inline-flex'>
                        <div className='seat seatSelect'></div>
                        <p className='mt-0 sm:mt-1 md:mt-3'>Ghế bạn chọn</p>
                    </div>
                    <div className='inline-flex'>
                        <div className='seat seatReser'></div>
                        <p className='mt-0 sm:mt-1 md:mt-3'>Ghế đã đặt </p>
                    </div>
                    <div className='inline-flex'>
                        <div className='seat seatL1'></div>
                        <p className='mt-0 sm:mt-1 md:mt-3'>Ghế VIP</p>
                    </div>
                    <div className='inline-flex'>
                        <div className='seat seatL2'></div>
                        <p className='mt-0 sm:mt-1 md:mt-3'>Ghế Thường</p>
                    </div>

                </div>
            </div>


            <div className='text-center text-white'>
                <p>Ghế đã chọn:</p>
                <p>Tổng tiền: 0đ</p>

            </div>
            <div className='text-center my-4'>
                <button type="button" class="btn_trang text-xl">Thanh toán</button>
            </div>
        </div>


    )
}
