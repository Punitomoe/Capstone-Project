import Layout from "../../../layout/Layout";
import "../../../style/SubMenu.css";
import KTP from "../../../assets/dokumen/KTP.png";
import Pengurusan from "../../../assets/dokumen/Pengurusan.png";
import { Link } from "react-router-dom";

function LegalDokumen() {
  return (
    <>
      <Layout>
        <div className="padding-y-xxl position-relative pt-3 pb-5 mb-5 z-index-1">
          <div className="max-width-adaptive-sm position-relative z-index-2 container">
            <div className="text-component margin-bottom-sm  pt-5 mb-5 text-center">
              <h2 className="sub_menu_title">Legal Dokumen</h2>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
              <div className="col h-auto ">
                <Link
                  to="/menu/dokumen/KTP"
                  className="text-decoration-none text-secondary"
                >
                  <div className="card m-3 card-sub-menu border-0">
                    <div className="sub-menu">
                      <img
                        className="card-img-top img-sub-menu img-fluid"
                        src={KTP}
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="card-sub-title text-center">
                        Sistem Pembuatan KTP
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col h-auto ">
                <Link
                  to="/menu/dokumen/SIM"
                  className="text-decoration-none text-secondary"
                >
                  <div className="card m-3 card-sub-menu border-0">
                    <div className="sub-menu">
                      <img
                        className="card-img-top img-sub-menu img-fluid"
                        src={Pengurusan}
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="card-sub-title text-center">
                        Sistem Pembuatan SIM
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default LegalDokumen;
