import React from 'react';
import "../assets/css/Welcome.css";
import { globalImages } from '../utils/staticImages';

const Welcome = () => {
  return (
    <>
      <div className="intro-area">
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-3 my-auto">
                <h1><em>Fire alarm systems</em> to meet every requirement.</h1>
                <p className='my-2'>
                  Industry-leading fire systems to suit every requirement – from touchscreen fire alarm panels, wireless fire alarm systems, wired and hybrid systems, and specialist equipment.
                  <br />
                  We take pride in our post-sales support, efficiency and reliability when it comes to helping you with your fire alarm system needs.
                </p>
                <div className='intro-button py-5'>
                  <a href="#about" className="main-button-slider">KNOW US BETTER</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="intro-img">
                  <img className='img-fluid' src={globalImages.mainImage} alt="Intro Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-dark" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="features-item bg-light">
                <div className="features-icon">
                  <img src={globalImages.featureIcon1} alt="feature Icon 1" />
                  <h4>Professional</h4>
                  <p>We are passionate about offering the right fire detection systems to meet the correct requirements for our customer; taking into account, the specification, the territory, the competition, the market and the local or national standards so we offer the correct solution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="features-item bg-light">
                <div className="features-icon">
                  <img src={globalImages.featureIcon2} alt="feature Icon 2" />
                  <h4>Product</h4>
                  <p>We are passionate about offering the right fire detection systems to meet the correct requirements for our customer; taking into account, the specification, the territory, the competition, the market and the local or national standards so we offer the correct solution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="features-item bg-light">
                <div className="features-icon">
                  <img src={globalImages.featureIcon3} alt="feature Icon 3" />
                  <h4>Placement</h4>
                  <p>We are passionate about offering the right fire detection systems to meet the correct requirements for our customer; taking into account, the specification, the territory, the competition, the market and the local or national standards so we offer the correct solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="promotion">
        <div className="container">
          <div className="row">
            <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big">
              <img src={globalImages.cityOnFire} className="rounded img-fluid d-block mx-auto" alt="App" />
            </div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <li>
                  <div className="text">
                    <h4>Real-Time Detection</h4>
                    <p>Our website utilizes cutting-edge computer vision technology to provide real-time detection
                      of fire and smoke. Users can access live video feeds from cameras or upload images and videos
                      for instant analysis, enabling swift response to potential fire hazards.</p>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <h4>Accuracy and Reliability</h4>
                    <p>We pride ourselves on the accuracy and reliability of our fire and smoke detection system. Our
                      advanced algorithms can distinguish between actual fire and smoke incidents and false alarms,
                      minimizing unnecessary alerts and ensuring timely responses in critical situations.</p>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <h4>Alert and Notification System</h4>
                    <p>Our website includes a robust alert and notification system that immediately informs users,
                      authorities, or designated contacts in the event of a fire or smoke detection. Users can customize
                      their notification preferences, including SMS, email, or push notifications, to stay informed and
                      take appropriate action swiftly.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-light' id="contact-us">
        <div class="container">
          <div class="footer-content">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="contact-form">
                  <form id="contact" action="" method="post">
                    <div class="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required
                            style={{ backgroundColor: 'rgba(250,250,250,0.3)' }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required
                            style={{ backgroundColor: 'rgba(250,250,250,0.3)' }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required
                            style={{ backgroundColor: 'rgba(250,250,250,0.3)' }}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" class="main-button">Send Message
                            Now</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="right-content col-lg-6 col-md-12 col-sm-12">
                <h2 className='text-dark'>Need to talk to a <em>member</em> of the team?</h2>
                <p className='text-dark'>
                  Our support & sales team are keen and would love to help with any questions. Leave your details in the contact form and we will get back to you shortly.
                </p>
                {/* <ul class="social">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                </ul> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="sub-footer">
                <p>Copyright &copy; 2023 Fire Detection System</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Welcome