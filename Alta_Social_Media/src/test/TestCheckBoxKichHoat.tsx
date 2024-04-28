import { useState } from "react";
import "../HopDongUyQuyen/style.css";
import "../DanhSachThietBi/DropDown.css";
import SideBar from "../BackGround/SideBar";

const TestCheckBoxKichHoat = () => {
  const [checkbox1, setCheckbox1] = useState(false);

  const [abc, setabc] = useState("Đang kích hoạt | Đang hoạt động");

  const [test, settest] = useState(
    <>
      Kich hoat <br /> thiet bi{" "}
    </>
  );

  const handleTest = () => {
    if (checkbox1) {
      if (abc === "Đang kích hoạt | Đang hoạt động") {
        setabc("Ngung kich hoat");
        settest(
          <>
            Kich hoat <br /> thiet bi{" "}
          </>
        );
      } else {
        setabc("Đang kích hoạt | Đang hoạt động");
        settest(
          <>
            {" "}
            Ngừng <br />
            kich hoat <br /> thiet bi{" "}
          </>
        );
      }
    }
  };

  const handleChange = () => {
    if (!checkbox1) {
      if (abc === "Đang kích hoạt | Đang hoạt động") {
        settest(
          <>
            Ngừng
            <br />
            kich hoat <br /> thiet bi{" "}
          </>
        );
      } else {
        settest(
          <>
            Kich hoat <br /> thiet bi{" "}
          </>
        );
      }
    }
    setCheckbox1(!checkbox1);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <SideBar value={1} />
        <div>
          <div
            style={{
              width: 1541,
              position: "absolute",
              top: 230,
              left: 229,
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: 800,
                margin: "16px 24px 104px 24px",
              }}
            >
              <tbody
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                }}
              >
                <tr style={{ height: 47 }}>
                  <td>
                    {" "}
                    <input
                      checked={checkbox1}
                      onChange={handleChange}
                      type="checkbox"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </td>
                  <td>1</td>
                  <td>Device A12231</td>
                  <td>
                    {/* test vị trí này */}
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: `#${
                          abc === "Đang kích hoạt | Đang hoạt động"
                            ? "18E306"
                            : "FF4747"
                        }`,
                        marginRight: "5px",
                        display: "inline-block",
                        marginBottom: "1.5px",
                      }}
                    ></div>
                    {/* Đang kích hoạt | Đang hoạt động */}
                    {abc}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="khung2" style={{ height: 240, left: 1000 }}>
            <div onClick={handleTest} className="khung1">
              <div>
                <img src="images/kichhoat.png" alt="kichhoat" />
                <div className="textt">
                  {/* Kich hoat <br /> thiet bi  */}
                  {test}
                </div>
              </div>
            </div>
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/khoa.png" alt="khoa" />
                <div className="textt">
                  Khóa <br /> thiết bị
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCheckBoxKichHoat;
