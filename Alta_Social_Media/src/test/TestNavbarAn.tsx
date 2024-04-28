import "../Danhsachthietbi/style2.css";
import { useState } from "react";
import "./css.css";

const TestNavbarAn = () => {
  const [isCheckListVisible, setCheckListVisible] = useState(false);
  const toggleCheckList = () => {
    setCheckListVisible(true);
  };

  const [isCheckListVisible1, setCheckListVisible1] = useState(false);
  const toggleCheckList1 = () => {
    setCheckListVisible1(true);
  };

  const [isCheckListVisible2, setCheckListVisible2] = useState(false);
  const toggleCheckList2 = () => {
    setCheckListVisible2(true);
  };

  const [isCheckListVisible3, setCheckListVisible3] = useState(false);
  const toggleCheckList3 = () => {
    setCheckListVisible3(true);
  };

  const [checkNavbar, setcheckNavbar] = useState(false);

  const handleNavbar = () => {
    setcheckNavbar(!checkNavbar);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: 1749,
            height: 80,
            left: 171,
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 9999,
          }}
        >
          <div>
            <select
              id="language"
              style={{
                width: 143,
                height: 40,
                top: 24,
                left: 1375,
                padding: "8px 4px 8px 8px",
                borderRadius: 4,
                border: "1px solid rgb(200, 200, 219)",
                gap: 8,
                color: "rgb(200, 200, 219)",
                background: "rgb(30, 30, 46)",
                position: "relative",
              }}
            >
              <option value="vi" style={{ background: "rgb(30, 30, 46)" }}>
                Tiếng Việt
              </option>
              <option value="en" style={{ background: "rgb(30, 30, 46)" }}>
                English
              </option>
              <option value="fr" style={{ background: "rgb(30, 30, 46)" }}>
                French
              </option>
            </select>
          </div>
          <div
            style={{
              width: 132,
              height: 40,
              top: 24,
              left: 1542,
              gap: 8,
              marginRight: 24,
              position: "absolute",
            }}
          >
            <a href="/trang1" style={{ textDecoration: "none" }}>
              <img
                src="images/admin.jpg"
                alt="mdo"
                style={{
                  width: 40,
                  height: "40.58px",
                  borderRadius: 200,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 74,
                  height: 24,
                  left: 5,
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "rgb(245, 245, 255)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                emily
              </div>
              <div
                style={{
                  width: 49,
                  height: 17,
                  left: 6,
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  color: "rgb(182, 81, 0)",
                  marginLeft: 35,
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Admin
              </div>
            </a>
          </div>
        </div>

        <div
          className="sidebar"
          style={{
            width: 40,
            borderRadius: "0px 24px 24px 0px",
            display: !checkNavbar ? "flex" : "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1080px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontSize: 24,
            }}
          >
            <button
              onClick={handleNavbar}
              style={{ background: "transparent", border: 0, color: "#B65100" }}
            >
              &gt;
            </button>
          </div>
        </div>
        <div style={{ display: checkNavbar ? "flex" : "none" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "170px",
              height: "1080px",
              background: "#020220",
              color: "white",
              zIndex: "1",
              position: "fixed",
              opacity: "0.8",
            }}
          >
            <img
              src="images/logo.png"
              alt=""
              style={{
                width: "96px",
                height: "96px",
                margin: "39px 21px 0px 34px",
              }}
            />
            <a
              href="/KhoBangGhi"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div
                style={{
                  width: "170px",
                  height: "72px",
                  marginTop: "110px",
                }}
              >
                <img
                  src="images/banghi.png"
                  alt=""
                  style={{
                    width: "32px",
                    height: "32px",
                    margin: "12px 69px 0px 69px",
                  }}
                />
                <p
                  style={{
                    width: "84px",
                    height: "17px",
                    left: "41px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    letterSpacing: "0.015em",
                    textAlign: "center",
                    marginTop: "2px",
                    position: "absolute",
                  }}
                >
                  Kho bài hát
                </p>
              </div>
            </a>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/Playlist.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Playlist
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/calendar.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Lập lịch phát
              </p>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseMove={toggleCheckList1}
              onMouseOut={() => setCheckListVisible1(false)}
            >
              <img
                src="images/quanly.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Quản lý{" "}
              </p>
              <i
                style={{
                  position: "absolute",
                  left: 136,
                  top: 30,
                }}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 168,
                  width: 185,
                  height: "40px",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "-0.002em",
                  zIndex: 9999,
                }}
                id="list1"
                className={`dropdown-check-list ${
                  isCheckListVisible1 ? "visible" : ""
                }`}
                tabIndex={100}
              >
                <span className="anchor d-none"></span>
                <ul
                  className="items"
                  style={{ textAlign: "left", paddingLeft: 24 }}
                >
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Quản lý hợp đồng
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Quản lý thiết bị
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Đơn vị ủy quyền
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Đơn vị sử dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseMove={toggleCheckList}
              onMouseOut={() => setCheckListVisible(false)}
            >
              <img
                src="images/doanhthu.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Doanh thu{" "}
              </p>
              <i
                style={{
                  position: "absolute",
                  left: 136,
                  top: 30,
                }}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 168,
                  width: 185,
                  height: "40px",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "-0.002em",
                  zIndex: 9999,
                }}
                id="list1"
                className={`dropdown-check-list ${
                  isCheckListVisible ? "visible" : ""
                }`}
                tabIndex={100}
              >
                <span className="anchor d-none"></span>
                <ul
                  className="items"
                  style={{ textAlign: "left", paddingLeft: 24 }}
                >
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Báo cáo doanh thu
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Lịch sử đối soát
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Phân phối doanh thu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseMove={toggleCheckList2}
              onMouseOut={() => setCheckListVisible2(false)}
            >
              <img
                src="images/Setting.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Cài đặt
              </p>
              <i
                style={{
                  position: "absolute",
                  left: 136,
                  top: 30,
                }}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 168,
                  width: 216,
                  height: "40px",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "-0.002em",
                  zIndex: 9999,
                }}
                id="list1"
                className={`dropdown-check-list ${
                  isCheckListVisible2 ? "visible" : ""
                }`}
                tabIndex={100}
              >
                <span className="anchor d-none"></span>
                <ul
                  className="items"
                  style={{ textAlign: "left", paddingLeft: 24 }}
                >
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Phân quyền người dùng
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Cấu hình
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Quản lý hợp đồng
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Thông tin tác phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Chu kì đối soát
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseMove={toggleCheckList3}
              onMouseOut={() => setCheckListVisible3(false)}
            >
              <img
                src="images/Support.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p
                style={{
                  width: "84px",
                  height: "17px",
                  left: "41px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  marginTop: "2px",
                  position: "absolute",
                }}
              >
                Hỗ trợ
              </p>
              <i
                style={{
                  position: "absolute",
                  left: 136,
                  top: 30,
                }}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 168,
                  width: 185,
                  height: "40px",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  letterSpacing: "-0.002em",
                  zIndex: 9999,
                }}
                id="list1"
                className={`dropdown-check-list ${
                  isCheckListVisible3 ? "visible" : ""
                }`}
                tabIndex={100}
              >
                <span className="anchor d-none"></span>
                <ul
                  className="items"
                  style={{ textAlign: "left", paddingLeft: 24 }}
                >
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Hướng dẫn sử dụng
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Tải App
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/"
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "1080px",
              background: "transparent",
              color: "white",
              zIndex: 1000,
              marginLeft: 170,
              position: "relative",
            }}
            onClick={handleNavbar}
          ></div>
        </div>

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
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Cá nhân
            </span>
            <br />
            Tên người uỷ quyền:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nguyễn Văn A
            </span>
            <br />
            Ngày sinh:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              10/01/1984
            </span>
            <br />
            Giới tính:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nam
            </span>
            <br />
            Quốc tịch:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Việt Nam
            </span>
            <br />
            Số điện thoại:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              (+84) 345 678 901
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
            Số CMND/ CCCD:
            <br />
            Ngày cấp:
            <br />
            Nơi cấp:
            <br />
            Mã số thuế:
            <br />
            Nơi cư trú:
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
            123456789012
            <br />
            10/07/2011
            <br />
            Tp.HCM, Việt Nam
            <br />
            92387489
            <br />
            69/53, Nguyễn Gia Trí, Phường 25,
            <br />
            Quận Bình Thạnh, Thành phố Hồ
            <br />
            Chí Minh
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
            Email:
            <br />
            Tài khoản đăng nhập:
            <br />
            Mật khẩu:
            <br />
            Số tài khoản:
            <br />
            Ngân hàng:
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              color: "#FFFFFF",
              left: 1511,
              position: "absolute",
              width: 181,
            }}
          >
            nguyenvana@gmail.com
            <br />
            nguyenvana@gmail.com
            <br />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <br />
            1231123312211223
            <br />
            ACB - Ngân hàng Á Châu
          </div>

          <div className="khung2">
            <div className="khung1">
              <a href="/ChinhSuaThongTin" style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon" />
                <div className="textt">
                  Chỉnh sửa <br /> hợp đồng
                </div>
              </a>
            </div>
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#giahanModal">
                <img src="images/giahan.png" alt="doimk" className="icon" />
                <div className="textt">
                  Gia hạn <br /> hợp đồng
                </div>
              </div>
            </div>
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/huy2.png" alt="doimk" className="icon" />
                <div className="textt">
                  Hủy hợp <br />
                  đồng
                </div>
              </div>
            </div>
            {/* <div
              style={{
                width: "110px",
                height: "112px",
                padding: "16px",
                gap: "10px",
              }}
            >
              <a href="/">
                {" "}
                <img
                  src="images/huy.png"
                  alt="dangxuat"
                  className="icon"
                  style={{ marginLeft: "15px" }}
                />
                <div className="dangxuat">
                  Hủy hợp <br />
                  đồng
                </div>
              </a>
            </div> */}
          </div>
          {/* showModal     */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              style={{
                // display: "flex",
                width: "720px",
                height: "432px",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3E3E5B",
                  width: "720px",
                  height: "432px",
                  borderRadius: "16px",
                }}
              >
                <div className="modal-body">
                  <h5
                    className="modal-title m-0"
                    id="exampleModalLabel"
                    style={{
                      width: "100%",
                      height: "24px",
                      top: "32px",
                      left: "159px",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "center",
                      color: "#F5F5FF",
                    }}
                  >
                    Hủy hợp đồng uỷ quyền
                  </h5>
                  <textarea
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
                    style={{
                      position: "absolute",
                      top: "96px",
                      left: "40px",
                      width: "640px",
                      height: "208px",
                      padding: "12px 24px 12px 16px",
                      borderRadius: "8px",
                      border: " 1px solid #727288",
                      backgroundColor: "#2B2B3F",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "344px",
                        left: "176px",
                        gap: "32px",
                        position: "absolute",
                      }}
                    >
                      <button
                        className="butoon"
                        style={{
                          color: "#FF7506",
                          backgroundColor: "transparent",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Quay lại
                      </button>
                      <button
                        className="butoon"
                        style={{
                          color: "white",
                          background: "#FF7506",
                          marginLeft: "32px",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Hủy hợp đồng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* show modol giahan */}
          <div
            className="modal fade"
            id="giahanModal"
            tabIndex={-1}
            aria-labelledby="giahanModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              style={{
                width: "908px",
                height: "623px",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3E3E5B",
                  width: "908px",
                  height: "623px",
                  borderRadius: "16px",
                }}
              >
                <div className="modal-body">
                  <h5
                    className="modal-title m-0"
                    id="exampleModalLabel"
                    style={{
                      width: "100%",
                      height: "24px",
                      top: "32px",
                      left: "159px",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "center",
                      color: "#F5F5FF",
                    }}
                  >
                    Gia hạn uỷ quyền tác phẩm
                  </h5>
                  <div
                    style={{
                      width: "fit-content",
                      maxWidth: "155px",
                      height: "fit-content",
                      maxHeight: "24px",
                      position: "absolute",
                      top: "96px",
                      left: "40px",
                      gap: "4px",
                      display: "flex",
                      flexDirection: "row",
                      color: "white",
                    }}
                  >
                    Thời gian gia hạn <span style={{ color: "red" }}>*</span>
                  </div>
                  <div
                    style={{
                      width: "157px",
                      height: "24px",
                      position: "absolute",
                      top: "136px",
                      left: "40px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    Từ ngày: 02/08/2021
                  </div>
                  <div
                    style={{
                      width: "245px",
                      height: "fit-content",
                      position: "absolute",
                      top: "177px",
                      left: "40px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.002em",
                      textAlign: "center",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    <span style={{ marginRight: 8, marginTop: 10 }}>
                      Đến ngày:
                    </span>
                    <input
                      type="date"
                      style={{
                        width: "155px",
                        height: "48px",
                        top: "167px",
                        left: "130px",
                        padding: "11px 16px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        justifyContent: "space-between",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "383px",
                      height: "240px",
                      top: "96px",
                      left: "485px",
                      position: "absolute",
                      background: "transparent",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        gap: "4px",
                        color: "#FFFFFF",
                      }}
                    >
                      Mức nhuận bút <span style={{ color: "red" }}>*</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "fit-content",
                        height: "fit-content",
                        top: "36px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          marginTop: 10,
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span style={{ marginTop: 10 }}>Quyền tác giả</span>
                      <input
                        type="number"
                        defaultValue={0}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "168px",
                        height: "24px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span>Quyền liên quan:</span>
                    </div>

                    <div
                      style={{
                        width: "101px",
                        top: "183px",
                        position: "absolute",
                        left: -24,
                        border: "1px solid #727288",
                        opacity: "0.5",
                        transform: "rotate(-90deg)",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        top: "132px",
                        position: "absolute",
                        left: 40,
                        width: "343px",
                        height: " 48px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          marginTop: 10,
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span style={{ marginTop: 10 }}>
                        Quyền của người biểu diễn
                      </span>
                      <input
                        type="number"
                        defaultValue={50}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        top: "192px",
                        position: "absolute",
                        left: 40,
                        width: "319px",
                        height: "48px",
                        gap: "8px",
                        color: "#FFFFFF",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <span>
                        Quyền của nhà sản xuất <br /> (bản ghi/video)
                      </span>
                      <input
                        type="number"
                        defaultValue={50}
                        style={{
                          width: "64px",
                          height: "fit-content",
                          padding: "11px 5px 13px 16px",
                          borderRadius: "8px",
                          background: "transparent",
                          color: "white",
                        }}
                      />
                      <span style={{ marginTop: 10 }}> % </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "119px",
                      height: "24px",
                      top: "387px",
                      left: "40px",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    Đính kèm tệp:
                  </div>
                  <div
                    style={{
                      width: "119px",
                      height: "24px",
                      top: "379px",
                      left: "171px",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <input
                        type="file"
                        style={{
                          width: "108px",
                          height: "40px",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #FFAC69",
                          gap: "4px",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 0,
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          width: "108px",
                          height: "40px",
                          border: "1px solid #FFAC69",
                          color: " #FFAC69",
                          borderRadius: 6,
                        }}
                      >
                        <img
                          src="./images/tailen.png"
                          alt="tailen"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: 5,
                            marginLeft: 11,
                          }}
                        />
                        <span
                          style={{
                            marginTop: 4,
                            position: "absolute",
                            marginLeft: 3,
                          }}
                        >
                          Tải lên
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "208px",
                      height: "24px",
                      top: "435px",
                      left: "171px",
                      gap: "4px",
                      color: "white",
                      position: "absolute",
                    }}
                  >
                    {/* Nội dung của div */}
                    <i
                      style={{ marginRight: 8 }}
                      className="fa-solid fa-file-word"
                    />
                    hetthuongcannho.doc
                    <br />
                    <i
                      style={{ marginRight: 8, marginTop: 12 }}
                      className="fa-solid fa-file-word"
                    ></i>
                    hetthuongcannho.doc
                  </div>

                  <div>
                    <div
                      style={{
                        width: "368px",
                        height: "48px",
                        top: "535px",
                        left: "270px",
                        gap: "32px",
                        position: "absolute",
                      }}
                    >
                      <button
                        className="butoon"
                        style={{
                          color: "#FF7506",
                          backgroundColor: "transparent",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Hủy
                      </button>
                      <button
                        className="butoon"
                        style={{
                          color: "white",
                          background: "#FF7506",
                          marginLeft: "32px",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestNavbarAn;
