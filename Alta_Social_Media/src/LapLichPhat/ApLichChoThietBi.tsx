import "../HopDongUyQuyen/style2.css";
import { useState } from "react";

const ApLichChoThietBi = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);

  const handleSelectAllChange = (event: any) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setCheckbox1(checked);
    setCheckbox2(checked);
    setCheckbox3(checked);
    setCheckbox4(checked);
    setCheckbox5(checked);
    setCheckbox6(checked);
    setCheckbox7(checked);
    setCheckbox8(checked);
  };
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
            Lập lịch phát
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chi tiết
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chỉnh sửa lịch phát
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Áp lịch cho thiết bị
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
            Chọn thiết bị
          </p>
        </div>

        {/* bảng */}
        <div
          style={{
            width: 1688,
            height: 864,
            position: "absolute",
            top: 186,
            left: 80,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1635,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "51px" }}>
                  {" "}
                  <input
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </th>
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "163px" }}>Tên thiết bị</th>
                <th style={{ width: "162px" }}>MAC Address</th>
                <th style={{ width: "196px" }}>SKU/ID</th>
                <th style={{ width: "228px" }}>Đơn vị sử dụng</th>
                <th style={{ width: "195px" }}>Tên đăng nhập</th>
                <th style={{ width: "726px" }}>Địa điểm hoạt động</th>
              </tr>
            </thead>
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
                    onChange={(event) => setCheckbox1(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>1</td>
                <td>Device A12321</td>
                <td>192.168.1.8</td>
                <td>232124264</td>
                <td>Cửa hàng 1</td>
                <td>User 2</td>
                <td>
                  194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox2}
                    onChange={(event) => setCheckbox2(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>2</td>
                <td>Device A12154</td>
                <td>192.168.0.18</td>
                <td>235369314</td>
                <td>Cửa hàng 2</td>
                <td>User 32</td>
                <td>
                  194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox3}
                    onChange={(event) => setCheckbox3(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>3</td>
                <td>Device A12454</td>
                <td>192.168.12.2</td>
                <td>258694369</td>
                <td>Cửa hàng 3</td>
                <td>User 34</td>
                <td>
                  194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
                </td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox4}
                    onChange={(event) => setCheckbox4(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>4</td>
                <td>Device A12834</td>
                <td>192.168.35.35</td>
                <td>369258147</td>
                <td>Cửa hàng 4</td>
                <td>User 434</td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox5}
                    onChange={(event) => setCheckbox5(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>5</td>
                <td>Device A12121</td>
                <td>192.168.0.15</td>
                <td>123654789</td>
                <td>Cửa hàng 5</td>
                <td>User 43</td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox6}
                    onChange={(event) => setCheckbox6(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>6</td>
                <td>Device A12325</td>
                <td>192.168.1.1</td>
                <td>357159258</td>
                <td>Cửa hàng 6</td>
                <td>User 32</td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox7}
                    onChange={(event) => setCheckbox7(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>7</td>
                <td>Device A12247</td>
                <td>192.168.3.21</td>
                <td>225669447</td>
                <td>Cửa hàng 7</td>
                <td>User 421</td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox8}
                    onChange={(event) => setCheckbox8(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>8</td>
                <td>Device A12445</td>
                <td>192.168.36.3</td>
                <td>2684357159</td>
                <td>Cửa hàng 8</td>
                <td>User 21</td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{ height: 240, borderRadius: "16px 0px 0px 16px" }}
          className="khung2"
        >
          <div className="khung1">
            <a href="/suathongtin" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/checkcam.png?alt=media&token=b5458e9e-0c18-40f7-bd7c-04d17f2d136e"
                style={{ height: 52, width: 52, padding: 0 }}
                alt="sua"
                className="icon"
              />
              <div className="textt">Chọn</div>
            </a>
          </div>

          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                style={{ height: 52, width: 52, padding: 0 }}
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huycam.png?alt=media&token=1e2ed0d6-03e2-4eda-a752-595afbdbd768"
                alt="huy2"
                className="icon"
              />
              <div className="textt">Hủy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApLichChoThietBi;
