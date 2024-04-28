import "./style2.css";
import GiaHanHopDong from "./Modal/GiaHanHopDong";
import HuyHopDong from "./Modal/HuyHopDong";

const ChiTietHopDong2 = () => {
  return (
    <>
      <div>
        <div
          style={{
            top: 86,
            left: 78,
            position: "absolute",
          }}
        >
          <a
            className="parent-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý hợp đồng
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chi Tiết
          </a>
        </div>
        <div
          style={{
            width: 800,
            height: 48,
            top: 114,
            left: 78,
            position: "absolute",
            color: "#FFFFFF",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.002em",
              textAlign: "left",
            }}
          >
            Chi tiết hợp đồng uỷ quyền bài hát - BH123
          </p>
        </div>
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            top: 186,
            marginTop: 10,
            left: 78,
            borderRadius: 24,
            border: "1px solid #B65100",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 211,
              height: 40,
              borderRadius: 24,
              gap: 10,
              backgroundColor: "#B65100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "center",
                marginTop: 13,
              }}
            >
              Thông tin hợp đồng
            </p>
          </div>
          <div
            style={{
              width: 207,
              height: 40,
              borderRadius: 24,
              gap: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "center",
                marginTop: 13,
              }}
            >
              Tác phẩm ủy quyền
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "81px",
            width: "120px",
            height: "24px",
            color: "white",
          }}
        >
          Số hợp đồng:
          <br />
          Tên hợp đồng:
          <br />
          Ngày hiệu lực:
          <br />
          Ngày hết hạn:
          <br />
          Tình trạng:
        </div>

        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "220px",
            width: "315px",
            height: "24px",
            opacity: 0.7,
            color: "white",
          }}
        >
          BH123
          <br />
          Hợp đồng uỷ quyền tác phẩm âm nhạc
          <br />
          01/05/2021
          <br />
          01/12/2021
          <br />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#347AFF",
              marginRight: "5px",
              display: "inline-block",
              marginBottom: "1.5px",
            }}
          ></div>
          Còn thời hạn
        </div>

        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "721px",
            width: "119px",
            height: "24px",
            color: "white",
          }}
        >
          Đính kèm tệp:
        </div>

        <div
          style={{
            width: 208,
            height: 24,
            top: 250,
            left: 868,
            position: "absolute",
            color: "white",
          }}
        >
          <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
          hetthuongcannho.doc
          <br />
          <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
          hetthuongcannho.doc
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            width: 273,
            height: 184,
            top: 250,
            left: 1321,
          }}
        >
          <span style={{ color: "#FFAC69" }}>
            <i
              style={{ marginRight: 8 }}
              className="fa-solid fa-circle-info"
            ></i>
            Mức nhuận bút
          </span>
          <br />
          Quyền tác giả:
          <span style={{ left: 240, position: "absolute" }}>0%</span>
          <br />
          Quyền liên quan: <br />
          Quyền của người biểu diễn:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          Quyền của nhà sản xuất:
          <span style={{ left: 240, position: "absolute" }}>50%</span>
          <br />
          (Bản ghi/video)
        </div>
        <div
          style={{
            width: "290px",
            height: "24px",
            position: "absolute",
            top: 521,
            left: "78px",
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFAC69",
          }}
        >
          Thông tin pháp nhân uỷ quyền
        </div>
        <div
          style={{
            height: 24,
            top: 565,
            left: 81,
            position: "absolute",
            color: "#FFFFFF",
          }}
        >
          Pháp nhân uỷ quyền:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            Tổ chức
          </span>
          <br />
          Tên tổ chức:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            Cty TNHH TM DV ABCEDEF
          </span>
          <br />
          Mã số thuế:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            92387489
          </span>
          <br />
          Ngân hàng:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            ACB - Ngân hàng Á Châu
          </span>
          <br />
          Quốc tịch:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            Việt Nam
          </span>
          <br />
          Địa chỉ:
          <span style={{ left: 267, position: "absolute", width: 268 }}>
            69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí
            Minh
          </span>
        </div>
        <div
          style={{
            height: 24,
            top: 565,
            left: 721,
            position: "absolute",
            color: "#FFFFFF",
          }}
        >
          Người đại diện:
          <br />
          Chức vụ:
          <br />
          Ngày sinh:
          <br />
          Giới tính:
          <br />
          CMND/CCCD:
          <br />
          Ngày cấp:
          <br />
          Nơi cấp:
        </div>
        <div
          style={{
            height: 24,
            top: 565,
            color: "#FFFFFF",
            left: 870,
            position: "absolute",
            width: 293,
          }}
        >
          Nguyễn Văn A
          <br />
          Giám đốc
          <br />
          11/01/1988
          <br />
          Nam
          <br />
          24147456
          <br />
          2/05/2008
          <br />
          Tp.Hồ Chí Minh
        </div>
        <div
          style={{
            height: 24,
            top: 565,
            color: "#FFFFFF",
            left: 1321,
            position: "absolute",
            width: 181,
          }}
        >
          Quốc tịch:
          <div style={{ marginBottom: 48 }}>Nơi cư trú:</div>
          Số điện thoại:
          <br />
          Tên đăng nhập:
          <br />
          Mật khẩu:
        </div>
        <div
          style={{
            height: 24,
            top: 565,
            color: "#FFFFFF",
            left: 1511,
            position: "absolute",
            width: 268,
          }}
        >
          Việt Nam
          <br />
          69/53, Nguyễn Gia Trí, Phường 25,
          <br /> Quận Bình Thạnh, Thành phố Hồ <br /> Chí Minh
          <br />
          012456789
          <br />
          nguyenvana1
          <br />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>

        <div className="khung2">
          <div className="khung1">
            <a href="/ChinhSuaThongTin" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
                alt="sua"
              />
              <div className="textt">
                Chỉnh sửa <br /> hợp đồng
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#giahanModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/giahan.png?alt=media&token=0d90e55e-1beb-45b6-87fb-3241a58a4adc"
                alt="doimk"
              />
              <div className="textt">
                Gia hạn <br /> hợp đồng
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
                alt="doimk"
              />
              <div className="textt">
                Hủy hợp <br />
                đồng
              </div>
            </div>
          </div>
        </div>
        {/* showModal     */}
        <HuyHopDong />

        <GiaHanHopDong />
      </div>
    </>
  );
};

export default ChiTietHopDong2;
