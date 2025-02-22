// app/page.tsx
import React from 'react';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ImageSlider />
        
        {/* What is a Mutual Bank Section */}
        <section className="mutual-bank-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl text-[#003366] text-center mb-16 font-serif relative z-2">
              What is Snep Microfinance Bank?
            </h1>
            
            <div className="mutual-bank-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="info-card flex flex-col items-center text-center">
                <div className="icon-container">
                  <Image 
                    src="/images/download.jpeg" 
                    alt="Savings Icon"
                    width={64}
                    height={64}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-2xl text-[#003366] font-semibold mb-3">Mutual Savings Bank</h3>
                <p className="text-gray-700">
                  Snep Mutual Savings Bank with the specific goal of encouraging savings and providing benefits to its depositors
                </p>
              </div>

              {/* Card 2 */}
              <div className="info-card flex flex-col items-center text-center">
                <div className="icon-container">
                  <Image 
                    src="/images/OIP 2.jpeg" 
                    alt="Setup Icon"
                    width={64}
                    height={64}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-2xl text-[#003366] font-semibold mb-3">Mutual Savings Bank Setup</h3>
                <p className="text-gray-700">
                  A mutual savings bank is set up specifically to be operated for the benefit of the depositors
                </p>
              </div>

              {/* Card 3 */}
              <div className="info-card flex flex-col items-center text-center">
                <div className="icon-container">
                  <Image 
                    src="/images/th.jpeg" 
                    alt="Shield Icon"
                    width={64}
                    height={64}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-2xl text-[#003366] font-semibold mb-3">Limited Exposure to Volatility</h3>
                <p className="text-gray-700">
                  Because mutual savings banks are run very conservatively, they tend to have limited exposure to volatility
                </p>
              </div>

              {/* Card 4 */}
              <div className="info-card flex flex-col items-center text-center">
                <div className="icon-container">
                  <Image 
                    src="/images/OIP (1).jpeg" 
                    alt="Society Icon"
                    width={64}
                    height={64}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-2xl text-[#003366] font-semibold mb-3">Savings and Friendly Society</h3>
                <p className="text-gray-700">
                  Operating as a savings and friendly society focused on community development
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="personal-credit-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="personal-credit-content">
              <h2 className="text-[#003366] text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                PERSONAL CREDIT
              </h2>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-[#003366] text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">
                  If you are looking for a fast, easy, flexible short term unsecured loan up to Ksh 1000000, then the SNEP Short Term Unsecured Loan is ideal for you.
                </p>
                
                <button className="read-more-button">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="business-credit-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="business-credit-content">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                BUSINESS CREDIT
              </h2>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-white text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">
                  Contact us today for a tailored business credit.
                </p>
                
                <button className="read-more-button bg-white text-[#003366] hover:bg-gray-100">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="transactional-banking-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="transactional-banking-content">
              <h2 className="text-[#003366] text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                TRANSACTIONAL BANKING
              </h2>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-[#003366] text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">
                  Be in control of your finances with a SNEP banking account.
                </p>
                
                <button className="read-more-button">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="save-wisely-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="save-wisely-content">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                SAVE WISELY
              </h2>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-white text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">
                  Get the best rate on your capital and earn up to 9.00% per annum.
                  The ideal savings and investment account for investors and pensioners.*
                </p>
                
                <button className="read-more-button bg-white text-[#4A90E2] hover:bg-gray-100">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-section py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="why-choose-content">
              <h2 className="text-[#003366] text-4xl font-bold text-center mb-8">
                Best Microfinance Bank in Kenya: Why Choose SNEP?
              </h2>
              
              <div className="text-center mb-12">
                <p className="text-gray-700 text-lg">
                  Looking for the best microfinance in Kenya? SNEP Microfinance leads the way in providing innovative financial solutions to Kenyans.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-[#003366] text-xl font-semibold mb-4">
                    #1 Rated Microfinance in Kenya
                  </h3>
                  <p className="text-gray-700">
                    Consistently ranked among the best microfinance banks in Kenya, with a proven track record of serving thousands of satisfied customers across the country.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-[#003366] text-xl font-semibold mb-4">
                    Industry-Leading Returns
                  </h3>
                  <p className="text-gray-700">
                    Offering Kenya's most competitive savings rates - up to 9.00% per annum, making us the preferred choice for smart investors.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-[#003366] text-xl font-semibold mb-4">
                    Fastest Loan Processing in Kenya
                  </h3>
                  <p className="text-gray-700">
                    Experience the quickest loan approvals in Kenya's microfinance sector, with flexible terms and competitive rates.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-[#003366] text-xl font-semibold mb-4">
                    Advanced Digital Banking
                  </h3>
                  <p className="text-gray-700">
                    Leading Kenya's digital banking revolution with 24/7 secure access to your accounts through our state-of-the-art platform.
                  </p>
                </div>
              </div>

              {/* Add social proof */}
              <div className="mt-12 text-center">
                <p className="text-[#003366] font-semibold mb-4">Trusted by Over 100,000 Kenyans</p>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#003366]">9.0/10</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#003366]">98%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#003366]">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
