import React, { useState } from "react";
import "../cssne/khobangi.css";
import "../cssne/playlist.css";
import PagePaginist from "./../BackGround/PagePaginist";

interface DSNhac {
  id: number;
  tieude: string;
  sobg: string;
  thoiluong: string;
  pop: string;
  chill: string;
  dingga: string;
  songs: string;
  lofi: string;
  bacham: string;
  ngaytao: string;
  nguoitao: string;
}
const DSPlayList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [danhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "...",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 2,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 3,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 4,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 5,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 6,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 7,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 8,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 9,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 10,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 11,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 12,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 13,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
  ]);
  return (
    <>
      <div className="ttcb4">Playlist</div>
      <form onSubmit={handleFormSubmit} className="timkiem4">
        <input
          type="text"
          placeholder="Tên bản ghi, ca sĩ,..."
          value={searchTerm}
          onChange={handleInputChange}
          className="input4"
        />
        <a href="/#" type="submit" style={{ background: "#2B2B3F" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Search.png?alt=media&token=fa67623b-8b52-48ae-8e06-11debd3f5d01"
            alt=""
          />
        </a>
      </form>

      {/* icon menu */}
      <div
        className="textt4"
        style={{
          top: "174px",
          left: "1690px",
        }}
      >
        <a href="/dsplaylist">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/List.png?alt=media&token=e4bfde7d-d6a7-4b37-b1c9-002c643fdc4d"
            className="icon4"
            alt=""
          />
        </a>
      </div>

      <div
        className="textt4"
        style={{
          top: "174px",
          left: "1738px",
        }}
      >
        <a href="/dsplaylist1">
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
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ThemLichPhat.png?alt=media&token=e30480c7-b6c1-47bd-b462-e944d5f1e023"
              alt="sua"
              className="icon1"
            />
            <div className="texttt">
              Thêm <br /> Playlist
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: 1541,
          height: "fit-content",
          position: "absolute",
          top: 230,
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
              <th style={{ width: "70" }}>stt</th>
              <th style={{ width: "314" }}>Tiêu đề</th>
              <th style={{ width: "130" }}>Số bản ghi</th>
              <th style={{ width: "136" }}>Thời lượng</th>
              <th style={{ width: "420" }}>Chủ đề</th>
              <th style={{ width: "180" }}>Ngày tạo</th>
              <th style={{ width: "148" }}>Người tạo</th>
              <th style={{ width: "95" }}></th>
            </tr>
          </thead>
          <tbody>
            {danhsachs.map((danhsach) => (
              <tr
                style={{
                  color: "#FFFFFF",
                  marginBottom: "1px",
                  borderBottom: "1px solid #727288",
                  height: 47,
                }}
                key={danhsach.id}
              >
                <td>{danhsach.id}</td>
                <td>
                  {danhsach.tieude} <br />
                </td>

                <td>{danhsach.sobg}</td>
                <td>{danhsach.thoiluong}</td>
                <td style={{ display: "flex" }}>
                  <div className="khung5">{danhsach.pop}</div>
                  <div className="khung5">{danhsach.chill}</div>
                  <div className="khung5">{danhsach.dingga}</div>
                  <div className="khung5">{danhsach.songs}</div>
                  <div className="khung5">{danhsach.lofi}</div>
                  <div className="khung5">{danhsach.bacham}</div>
                </td>
                <td>{danhsach.ngaytao}</td>
                <td>{danhsach.nguoitao}</td>
                <td>
                  <a href="/#" style={{ color: "#FF7506" }}>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PagePaginist />
      </div>
    </>
  );
};
export default DSPlayList;
