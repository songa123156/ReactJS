import "../HopDongUyQuyen/style2.css";
import "../HopDongUyQuyen/ChinhSuaThongTin.css";
import { useState } from "react";
import HuyLuuBtn from "../BackGround/HuyLuuBtn";

const P12ThemNguoiDungMoi = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
            Cài đặt
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Phân quyền người dùng
          </a>
          <span className="separator" style={{ color: "#FFAC69" }}>
            &gt;
          </span>
          <a
            className="child-link"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Thêm người dùng
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
            Thêm người dùng mới
          </p>
        </div>
      </div>
      <div
        style={{
          width: "142px",
          position: "absolute",
          top: "213px",
          left: "80px",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Tên người dùng <span style={{ color: "red" }}> *</span>
          <div>
            <input
              type="text"
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 41,
            marginBottom: 41,
          }}
        >
          Số điện thoại
          <div style={{ marginBottom: 15 }}>
            <input
              type="tel"
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Ngày hết hạn:
          <div>
            <input
              type="date"
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 39,
            marginBottom: 36,
          }}
        >
          Vai trò <span style={{ color: "red" }}> *</span>
          <div>
            <select
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              <option selected value="?">
                Chọn vai trò
              </option>

              <option value="">QA</option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option>
            </select>
          </div>
        </div>
        <div
          style={{
            width: "270px",
            height: "18px",
            top: "418px",
            left: "80px",
            padding: "0px 2px 0px 2px",
            gap: "4px",
            color: "white",
          }}
        >
          <span style={{ color: "red" }}>*</span>là những trường thông tin bắt
          buộc
        </div>
      </div>

      <div
        style={{
          width: "142px",
          position: "absolute",
          top: "213px",
          left: "566px",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Email
          <div>
            <input
              type="email"
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",
            marginTop: 41,
            marginBottom: 41,
          }}
        >
          Tên đăng nhập <span style={{ color: "red" }}> *</span>
          <div>
            <input
              type="text"
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#FFFFFF",

            display: "inline-block",
          }}
        >
          Mật khẩu:<span style={{ color: "red" }}> *</span>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginLeft: 10,
                cursor: "pointer",
                position: "absolute",
                left: 359,
                color: "red",
                display: "inline-block",
                marginTop: 10,
                right: 0,
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </div>
          </div>
        </div>
      </div>

      <HuyLuuBtn />
    </>
  );
};

export default P12ThemNguoiDungMoi;
