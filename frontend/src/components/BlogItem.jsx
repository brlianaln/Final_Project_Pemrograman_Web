import React from "react";
import blogImg1 from "./img/blog1.png"
import blogImg2 from "./img/blo2.png"
import blogImg3 from "./img/image(3).png"

const BlogItem =()=>{
    return(
        <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>

        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={blogImg1} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">
                    Deputi II: Pembangunan Gedung Perpustakaan Modern Bukti Dukungan Pemerintah Provinsi Lampung Terhadap Literasi
                  </a>
                </h3>
                <div className="meta">
                  <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2024</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={blogImg2} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">
                    Deputi II Perpusnas Bersama Sekjen DPD RI Resmikan Pojok Baca Digital DPD RI
                  </a>
                </h3>
                <div className="meta">
                  <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2024</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={blogImg3} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">
                    Mewujudkan Keamanan Informasi, Perpusnas Gelar Sosialisasi Kebersihan Meja Kerja
                  </a>
                </h3>
                <div className="meta">
                  <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2024</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default BlogItem;
