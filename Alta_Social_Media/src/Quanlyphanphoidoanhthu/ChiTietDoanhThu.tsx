import "../HopDongUyQuyen/style2.css";
import "../HopDongUyQuyen/ChinhSuaThongTin.css";
import PagePaginist from "../BackGround/PagePaginist";

const ChiTietDoanhThu = () => {
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
            Doanh thu
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Phân phối doanh thu
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chi tiết doanh thu
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
            Hợp đồng Ủy quyền UQ123 - Quý 1
          </p>
        </div>
      </div>

      <div
        style={{
          width: "235px",
          height: "24px",
          top: "186px",
          left: "80px",
          fontSize: 24,
          position: "absolute",
          color: "white",
        }}
      >
        Danh sách bản ghi
      </div>

      <div
        style={{
          width: "665px",
          height: "48px",
          position: "absolute",
          top: "229px",
          left: "80px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#2B2B3F",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "-0.002em",
            outline: "none",
            paddingLeft: 24,
            paddingRight: 67,
          }}
          placeholder="Nhập tên bài hát"
        />
        <div
          style={{
            marginLeft: "12px",
            width: "24px",
            height: "24px",
            marginTop: 11,
            marginRight: 10,
          }}
        >
          <a href="/anhson">
            <i
              style={{ color: "white" }}
              className="fa-solid fa-magnifying-glass"
            ></i>
          </a>
        </div>
      </div>

      <div
        style={{
          width: "235px",
          height: "24px",
          top: "186px",
          left: "1121px",
          fontSize: 24,
          position: "absolute",
          color: "white",
        }}
      >
        Doanh thu bản ghi
      </div>
      <div
        style={{
          width: "235px",
          height: "24px",
          top: "215px",
          fontSize: 28,
          left: "1121px",
          position: "absolute",
          color: "#FFAC69",
        }}
      >
        Cuộc gọi nhỡ
      </div>

      <div
        style={{
          width: 1017,
          position: "absolute",
          top: 296,
          left: 80,
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
          padding: "16px 24px",
        }}
      >
        <table
          style={{
            width: "fit-content",
          }}
        >
          <thead style={{ color: "#FFAC69" }}>
            <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
              <th style={{ width: "87px" }}>STT</th>
              <th style={{ width: "234px" }}>Bài hát</th>
              <th style={{ width: "146px" }}>Số lượt phát</th>
              <th style={{ width: "147px" }}>Doanh thu (VNĐ)</th>
              <th style={{ width: "186px" }}>Hành chính phí (VNĐ)</th>
              <th style={{ width: "169px" }}>Nhuận bút (VNĐ)</th>
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
              <td>Tổng </td>
              <td>13</td>
              <td>17,527</td>
              <td>1.045.000,000</td>
              <td>209.001.505</td>
              <td>835.998.495</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>1</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>2</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>3</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>4</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>5</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>6</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>7</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>8</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>9</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>10</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>11</td>
              <td>Hết thương cạn nhớ </td>
              <td>1200</td>
              <td>12.000.000</td>
              <td>2.500.000</td>
              <td>2.500.000</td>
            </tr>
          </tbody>
        </table>

        <PagePaginist />
      </div>

      <div
        style={{
          width: 645,
          position: "absolute",
          top: 296,
          left: 1121,
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
          padding: "16px 24px",
        }}
      >
        <table
          style={{
            width: "fit-content",
          }}
        >
          <thead style={{ color: "#FFAC69" }}>
            <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
              <th style={{ width: "199px" }}>Đơn vị khai thác</th>
              <th style={{ width: "199px" }}>Số lượt phát</th>
              <th style={{ width: "199px" }}>Doanh thu (VNĐ)</th>
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
              <td>Tổng </td>
              <td>100</td>
              <td>835.998.495</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>

            <tr style={{ height: 47 }}>
              <td>CTy TNHH A </td>
              <td>200</td>
              <td>2.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="khung2"
        style={{
          height: 110,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      >
        <div className="khung1">
          <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xuatdulieu.png?alt=media&token=f03fe258-ca6e-4209-bd84-92041f1e392f"
              alt="xuatdulieu"
            />
            <div className="textt">
              Xuất <br />
              dữ liệu
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ChiTietDoanhThu;
