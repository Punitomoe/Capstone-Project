import Layout from "../../../layout/Layout";
import "../../../style/SubMenu.css";
import Mobil from "../../../assets/asuransi/Mobil.png";
import BPJS from "../../../assets/asuransi/BPJS.png";

function Asuransi() {
  return (
    <>
      <Layout>
        <div className="padding-y-xxl position-relative pt-3 pb-5 mb-5 z-index-1">
          <div className="max-width-adaptive-sm position-relative z-index-2 container">
            <div className="text-component margin-bottom-sm  pt-5 mb-5 text-center">
              <h2 className="sub_menu_title">Asuransi</h2>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
              <div className="col h-auto ">
                <div className="card m-3 card-sub-menu border-0">
                  <div className="sub-menu">
                    <img
                      className="card-img-top img-sub-menu img-fluid"
                      src={Mobil}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h5 className="card-sub-title text-center">
                      Asuransi Mobil
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col h-auto ">
                <div className="card m-3 card-sub-menu border-0">
                  <div className="sub-menu">
                    <img
                      className="card-img-top img-sub-menu img-fluid"
                      src={BPJS}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h5 className="card-sub-title text-center">BPJS Mobil</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Asuransi;
