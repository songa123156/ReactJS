import "../cssne/khobangi.css";
import "../cssne/playlist.css";
import HuyLuuBtn from "../BackGround/HuyLuuBtn";

const ThemPlayList = () => {
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
          <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
            Playlist
          </a>
          <span
            className="separator"
            style={{ color: "#FFAC69", margin: "0px 5px 0px 5px" }}
          >
            &gt;
          </span>
          <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
            Thêm playlist mới
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
            Thêm Playlist
          </p>
        </div>

        <div className="khungt" style={{ height: 224 }}>
          <div className="khugne">
            <a href="/suaplaylist" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
                alt="sua"
                className="icon1"
              />
              <div className="texttt">Chỉnh sủa</div>
            </a>
          </div>
          <div className="khugne">
            <a href="/#" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=9472a6a0-9eb5-4dad-b4e8-3e76c1c9f735"
                alt="sua"
                className="icon1"
              />
              <div className="texttt">Xóa Playlist</div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: "274px",
            height: "680px",
            top: "186px",
            left: "80px",
            gap: "16px",
            position: "absolute",
          }}
        >
          <div className="text6">Ảnh bìa:</div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/file.png?alt=media&token=b2aac25e-8a69-4627-9d5b-89aa13a423c7"
            alt=""
            style={{ marginTop: 16 }}
          />
          <input
            type="file"
            style={{
              top: 40,
              left: 0,
              opacity: "0",
              position: "absolute",
            }}
          />

          <div
            style={{
              width: 274,
              borderBottom: "1px solid #727288",
              margin: "16px 0 16px 0",
            }}
          ></div>

          <div style={{ marginBottom: 16 }} className="text6">
            tiêu đề: <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            style={{
              width: 274,
              height: 48,
              borderRadius: 8,
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <div
            style={{
              width: 274,
              borderBottom: "1px solid #727288",
              margin: "16px 0 16px 0",
            }}
          ></div>

          <div style={{ marginBottom: 16 }} className="text6">
            <div>Tổng số:</div>
            <div
              style={{
                left: "153.25px",
                opacity: "70%",
                position: "absolute",
              }}
            >
              8 bản ghi
            </div>
          </div>
          <div style={{ marginBottom: 16 }} className="text6">
            <div>Tổng thời lượng:</div>
            <div
              style={{
                left: "153.25px",
                opacity: "70%",
                position: "absolute",
              }}
            >
              --:--:--
            </div>
          </div>
          <div
            style={{
              width: 274,
              borderBottom: "1px solid #727288",
              margin: "16px 0 16px 0",
            }}
          ></div>
          <div style={{ marginBottom: 16 }} className="text6">
            Mô tả: <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            style={{
              width: 274,
              height: 112,
              borderRadius: 8,
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
          />
          <div
            style={{
              width: 274,
              borderBottom: "1px solid #727288",
              margin: "16px 0 16px 0",
            }}
          ></div>
          <div style={{ marginBottom: 16 }} className="text6">
            Chủ đề:
          </div>
          <input
            type="text"
            style={{
              width: 274,
              height: 88,
              borderRadius: 8,
              border: "1px solid #727288",
              background: "#2B2B3F",
            }}
            placeholder="Nhập chủ đề"
          />
          <div
            className="form-check form-switch"
            style={{
              margin: "16px 0 16px 0",
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              defaultChecked={false}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Chế độ công khai
            </label>
          </div>
        </div>
        <div
          style={{
            width: 1392,
            height: "722px",
            position: "absolute",
            top: 186,
            left: 378,
            padding: "16px 24px 16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: "1344px",
              height: "690px",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
                <th style={{ width: "121" }}>stt</th>
                <th style={{ width: "382" }}>Tên bản ghi</th>
                <th style={{ width: "371" }}>Ca sỹ</th>
                <th style={{ width: "277" }}>Tác giả</th>
                <th style={{ width: "110" }}></th>
                <th style={{ width: "83" }}></th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="text6"
                style={{
                  textAlign: "center",
                  marginLeft: "391",
                  display: "block",
                }}
              >
                Vui lòng chọn bản ghi để thêm vào Playlist{" "}
                <span style={{ color: "red" }}>*</span>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="text6"
          style={{
            fontSize: 12,
            color: "white",
            top: 920,
            left: 402,
            position: "absolute",
          }}
        >
          <span style={{ color: "red", fontSize: 16 }}>*</span>
          <span style={{ opacity: 0.5, marginLeft: 5 }}>
            là những trường thông tin bắt buộc
          </span>
        </div>
        <HuyLuuBtn />
      </div>
    </>
  );
};

export default ThemPlayList;
