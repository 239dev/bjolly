import React from 'react';
import Button from '../components/Button';
import { Calendar, Award, Users, Briefcase } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 slide-up">
              About B Jolly Accounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
              Trusted tax professionals serving Saskatoon families and businesses for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-navy-800 mb-6 fade-in">Our Story</h2>
              <p className="text-gray-600 mb-4 fade-in">
                B Jolly Accounting began as a small operation dedicated to helping Saskatoon residents navigate the complexities of tax season.
              </p>
              <p className="text-gray-600 mb-4 fade-in">
                Over the years, we've grown our expertise and client base, but we've never lost sight of our core values: personal attention, technical excellence, and unwavering integrity.
              </p>
              <p className="text-gray-600 mb-8 fade-in">
                Today, we serve hundreds of individuals and businesses across Saskatchewan, combining the warmth of a family business with the expertise you'd expect from a large firm.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 fade-in">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="B Jolly Accounting team working together" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">
              Our Core Values
            </h2>
            <p className="text-gray-600 fade-in">
              These principles have guided our practice for over two decades and define how we work with every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in">
              <div className="mx-auto p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Family First</h3>
              <p className="text-gray-600">
                We treat our clients like family, providing personalized attention to every individual and business we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="mx-auto p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We stay current with tax regulations and use our expertise to deliver accurate, reliable service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Calendar className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Year-Round Support</h3>
              <p className="text-gray-600">
                Tax concerns don't just happen during tax season. We're here for you all year long.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="mx-auto p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards and transparency in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Ready to work with our team?
            </h2>
            <p className="text-xl text-gray-200 mb-8 fade-in">
              Let's discuss how we can help with your tax and accounting needs.
            </p>
            <Button variant="primary" to="/contact" className="fade-in">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;