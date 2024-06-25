import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <footer class=" footer text-center bg-black  text-white">
        <div class="container-fluid p-5 pb-3">
          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto ">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      class="form-control"
                    />
                    <label class="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light ">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="mb-4 d-none d-sm-block">
            <p>
              "Discover the latest technology at eletrobbom - your one-stop-shop
              for all your electronics needs. Shop with us and experience
              innovation at your fingertips."
            </p>
          </section>

          <section class="d-none d-sm-block">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Products</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Computers
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Wearables
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Brands</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Samsung
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Sony
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      LG
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Categories</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Gaming
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Audio
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Home Appliances
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Other</h5>

                <ul class="list-unstyled mb-0 ">
                  <li>
                    <a href="#!" class="text-white ">
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link class="text-white" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="text-white" to="/faq">
                      FAQ's
                    </Link>
                  </li>

                  <li>
                    <a href="#!" class="text-white"></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div class="text-center p-3 pb-5">
          © 2023 Copyright:
          <a class="text-white" href="#">
            ElectroBoom by Shashank Malhotra
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
