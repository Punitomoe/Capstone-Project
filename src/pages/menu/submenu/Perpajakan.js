import "../../../style/SubMenu.css";
import Kendaraan from "../../../assets/perpajakan/Kendaraan.png";
import Karyawan from "../../../assets/perpajakan/Karyawan.png";
import Usaha from "../../../assets/perpajakan/Usaha.png";
import { Link } from "react-router-dom";

function Perpajakan() {
  return (
    <div className="padding-y-xxl position-relative pt-3 pb-5 mb-5 z-index-1 sub-menu">
      <div className="max-width-adaptive-sm position-relative z-index-2 container">
        <div className="text-component margin-bottom-sm  pt-5 mb-5 text-center">
          <h2 className="sub_menu_title">Perpajakan</h2>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col h-auto ">
            <Link
              to="/menu/pajak/PajakKendaraan"
              className="text-decoration-none text-secondary"
            >
              <div className="card m-3 card-sub-menu border-0 ">
                <div className="sub-menu-img">
                  <img
                    className="card-img-top img-sub-menu img-fluid"
                    src={Kendaraan}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h5 className="card-sub-title text-center">
                    Pajak Kendaraan
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col h-auto ">
            <Link
              to="/menu/pajak/PajakKaryawan"
              className="text-decoration-none text-secondary"
            >
              <div className="card m-3 card-sub-menu border-0">
                <div className="sub-menu-img">
                  <img
                    className="card-img-top img-sub-menu img-fluid"
                    src={Karyawan}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h5 className="card-sub-title text-center">Pajak Karyawan</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col h-auto ">
            <Link
              to="/menu/pajak/PajakKUsaha"
              className="text-decoration-none text-secondary"
            >
              <div className="card m-3 card-sub-menu border-0">
                <div className="sub-menu-img">
                  <img
                    className="card-img-top img-sub-menu img-fluid"
                    src={Usaha}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h5 className="card-sub-title text-center">Pajak Usaha</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perpajakan;
