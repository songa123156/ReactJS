import React, { useState } from "react";
import "../cssne/khobangi.css";
import PagePaginist from "../BackGround/PagePaginist";

const KhoBangGhi: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <div className="ttcb4">Kho bản ghi</div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "517px",
          top: "158px",
          left: "229px",
          height: "48px",
          padding: "12px 24px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          background: "#2B2B3F",
          position: "absolute",
        }}
      >
        <input
          type="text"
          placeholder="Tên bản ghi, ca sĩ,..."
          value={searchTerm}
          onChange={handleInputChange}
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
        />
        <a href="/#" type="submit" style={{ background: "#2B2B3F" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Search.png?alt=media&token=fa67623b-8b52-48ae-8e06-11debd3f5d01"
            alt=""
          />
        </a>
      </form>
      <div
        style={{
          width: "68px",
          top: "238px",
          left: "229px",
          color: "white",
          position: "absolute",
        }}
      >
        Thể loại:
      </div>
      <select
        className="select4"
        style={{
          width: "131px",
          top: "230px",
          left: "313px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Pop</option>
        <option value="manufacturer">EDM</option>
        <option value="manufacturer">Ballad</option>
      </select>
      <div
        style={{
          width: "91px",
          top: "238px",
          left: "508px",
          color: "white",
          position: "absolute",
        }}
      >
        Định dạng:
      </div>
      <select
        className="select4"
        style={{
          width: "131px",
          top: "230px",
          left: "615px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Âm thanh</option>
        <option value="manufacturer">Video</option>
      </select>
      <div
        style={{
          width: "148px",
          top: "238px",
          left: "810px",
          color: "white",
          position: "absolute",
        }}
      >
        Thời hạn sử dụng:
      </div>
      <select
        className="select4"
        style={{
          width: "131px",
          top: "230px",
          left: "974px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Còn thời hạn</option>
        <option value="manufacturer">Hết hạn</option>
      </select>
      <div
        className="text4"
        style={{
          width: "88px",
          top: "238px",
          left: "1169px",
          color: "white",
          position: "absolute",
        }}
      >
        Trạng thái:
      </div>
      <select
        className="select4"
        style={{
          width: "200px",
          top: "230px",
          left: "1273px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Duyệt bởi người dùng</option>
        <option value="manufacturer">Duyệt tự động</option>
      </select>
      {/* danh sach dropdown */}

      {/* icon menu */}
      <div
        style={{
          top: "238px",
          left: "1690px",
          position: "absolute",
        }}
      >
        <a href="/#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/List.png?alt=media&token=e4bfde7d-d6a7-4b37-b1c9-002c643fdc4d"
            className="icon4"
            alt=""
          />
        </a>
      </div>

      <div
        style={{
          top: "238px",
          left: "1738px",
          position: "absolute",
        }}
      >
        <a href="/#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tab.png?alt=media&token=19348d31-a86d-43ca-9283-965e581eee9f"
            className="icon4"
            alt=""
          />
        </a>
      </div>
      {/* icon menu */}

      <div className="khungt">
        <div className="khugne">
          <a href="/suatt" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
              alt="sua"
              className="icon1"
            />
            <div className="texttt">Quản lý phê duyệt</div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: 1541,
          height: "fit-content",
          position: "absolute",
          top: 294,
          left: 229,
          padding: "16px 24px",
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
        }}
      >
        <table
          style={{
            width: "1485px",
            height: "fit-content",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
              <th style={{ width: "64px" }}>stt</th>
              <th style={{ width: "217" }}>Tên bản ghi</th>
              <th style={{ width: "130" }}>Mã ISRC</th>
              <th style={{ width: "136" }}>Thời lượng</th>
              <th style={{ width: "181" }}>Ca sĩ</th>
              <th style={{ width: "180" }}>Tác giả</th>
              <th style={{ width: "107" }}>Thể loại</th>
              <th style={{ width: "116" }}>Định dạng</th>
              <th style={{ width: "163" }}>Thời hạn sử dụng</th>
              <th style={{ width: "115" }}></th>
              <th style={{ width: "76" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "1px solid #727288",
              }}
            >
              <td>1</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>04:27</td>

              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>2</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>04:27</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>3</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>4</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>5</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>6</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>7</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>8</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>9</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>10</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>11</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>12</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="/#" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <PagePaginist anhto={12} />
      </div>
    </>
  );
};
export default KhoBangGhi;
