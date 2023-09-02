import react from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <div class="container-fluid ">
        <footer
          class="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section
            class="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#6351ce" }}
          >
          
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Art O' Craft</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    Art O' Craft is a online store to shop for paintings , sketchings 
                    and diy crafts from various artists over India.
                    It also provides users service where they can request for customized 
                    arts from registered artists.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" class="text-white">
                      Art Shop
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Arts
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      InfoService
                    </a>
                  </p>
                </div>

                

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text fw-bold">Contact Us</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> Help Desk No.: 1800 310 0224
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@artcraft.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> Fax: +91-11- 75830275
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            ©️Copyright {year} Art and Crafts. All rights
            reserved
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
