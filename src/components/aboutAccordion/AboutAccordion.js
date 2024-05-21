import React from 'react'
import './AboutAccordion.css'

const AboutAccordion = () => {
    return (
        <div className="about-accordion px-5 sm:px-20 lg:px-24 min-h-80vh">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center py-4 sm:py-6 lg:py-8" data-aos="fade-up">More About Us</h1>
        </div>
        <div className="px-0 sm:px-8 lg:px-36 mx-0 lg:mx-24" data-aos="fade-up">
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-white text-md font-medium bg-[#1C75BC]">
              1. Mission
            </div>
            <div className="collapse-content">
              <p>Providing affordable and accessible diagnostic and healthcare services to the people in India and eventually entire south east Asia with the most up-to-date disease diagnostic methods to continually improve the health and well-being of the citizens beyond borders through best practices in laboratory medicine.</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-md font-medium bg-[#F5F8FD] my-2">
              2. Vision
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-md font-medium bg-[#F5F8FD] my-2">
              3. Core Purpose
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-md font-medium bg-[#F5F8FD] my-2">
              4. Core Values
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default AboutAccordion