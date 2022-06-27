import { MDBFooter } from 'mdb-react-ui-kit';
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted light footerMD'>

      <section className='p-3 footerMD'>
        <div className='container text-center text-md-start mt-5 '>
          <div className='row mt-3 '>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4 '>
              {/* Company name */}
              <img src={logo} slt="logo"/>
              </h6>
              <p>
              Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footerMD'>
              <h6 className='text-uppercase fw-bold mb-4 '>Resources</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Testimonials
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blogs
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Terms of Service
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cookie Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 footerMD' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          The Codext
        </a> 
        &ensp; All rights reserved
      </div>
    </MDBFooter>
  );
}