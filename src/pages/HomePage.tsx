import React from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import services from '../data/services';
import { Calculator, CalendarCheck, Phone, FileText, Building, Store, Calendar, LineChart, Umbrella } from 'lucide-react';

const iconMap: { [key: string]: React.ReactElement } = {
  FileText: <FileText />,
  Building: <Building />,
  Store: <Store />,
  Calendar: <Calendar />,
  LineChart: <LineChart />,
  Umbrella: <Umbrella />
};

const HomePage = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
              Trusted Tax Experts in Saskatoon for Over 25 Years
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 slide-up" style={{ animationDelay: '0.2s' }}>
              Year-round tax preparation services with a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="primary" to="/contact">
                Book an Appointment
              </Button>
              <Button variant="outline" href="tel:3063746322" className="border-white text-white hover:bg-white hover:text-navy-800">
                <Phone className="inline-block mr-2 h-5 w-5" /> Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 fade-in">
              <img 
                src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="B Jolly Accounting team" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-emerald-600 font-medium mb-2 fade-in">ABOUT B JOLLY ACCOUNTING</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">Family-run, caring, and always available.</h2>
              <p className="text-gray-600 mb-6 fade-in">
                Since 1998, B Jolly Accounting has been providing personalized tax services to Saskatoon residents and businesses. We pride ourselves on our attention to detail, friendly service, and deep knowledge of Canadian tax regulations.
              </p>
              <p className="text-gray-600 mb-8 fade-in">
                Unlike seasonal tax services, we're here for you all year round to answer questions, plan strategies, and make sure you're always in compliance.
              </p>
              <Button variant="secondary" to="/about" className="fade-in">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-emerald-600 font-medium mb-2 fade-in">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">
              Comprehensive Tax Solutions
            </h2>
            <p className="text-gray-600 fade-in">
              From personal tax returns to corporate accounting, we offer a complete range of services to meet your tax and financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="fade-in">
                <ServiceCard
                  icon={
                    // @ts-ignore - We know these icons exist
                    ({ className }) => React.cloneElement(iconMap[service.icon], { className })
                  }
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" to="/services" className="fade-in">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-emerald-600 font-medium mb-2 fade-in">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 fade-in">
              We're proud of the long-term relationships we've built with our clients over the years.
            </p>
          </div>

          <div className="fade-in">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Have tax questions? We're here to help all year.
            </h2>
            <p className="text-xl mb-8 fade-in">
              Don't wait until tax season. Our team is available year-round to answer your questions and provide guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
              <Button variant="secondary" href="tel:3063746322" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Phone className="inline-block mr-2 h-5 w-5" /> Call Now
              </Button>
              <Button variant="secondary" to="/contact" className="bg-navy-800 hover:bg-navy-900">
                <CalendarCheck className="inline-block mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;