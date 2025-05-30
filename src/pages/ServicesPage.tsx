import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import services from '../data/services';
import { FileText, Building, Store, Calendar, LineChart, Umbrella, CheckCircle } from 'lucide-react';

const iconMap: { [key: string]: React.ReactElement } = {
  FileText: <FileText />,
  Building: <Building />,
  Store: <Store />,
  Calendar: <Calendar />,
  LineChart: <LineChart />,
  Umbrella: <Umbrella />
};

const ServicesPage = () => {
  const individualServices = services.filter(
    service => service.category === 'individual' || service.category === 'both'
  );
  
  const corporateServices = services.filter(
    service => service.category === 'corporate' || service.category === 'both'
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 slide-up">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive tax and accounting solutions for individuals and businesses in Saskatoon.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-emerald-600 font-medium mb-2 fade-in">FOR INDIVIDUALS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">
              Personal Tax Services
            </h2>
            <p className="text-gray-600 fade-in">
              We provide expert tax preparation for individuals and families, ensuring you receive all eligible deductions and credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {individualServices.map((service) => (
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

          <div className="bg-gray-50 rounded-xl p-8 md:p-10 fade-in">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6">Why Choose Us for Personal Tax Services?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Maximized Refunds</h4>
                  <p className="text-gray-600">We work diligently to ensure you receive every dollar you're entitled to.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Personalized Service</h4>
                  <p className="text-gray-600">We take the time to understand your unique financial situation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Year-Round Support</h4>
                  <p className="text-gray-600">We're here for you whenever tax questions arise, not just during tax season.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">CRA Communication</h4>
                  <p className="text-gray-600">We handle communications with the CRA on your behalf if questions arise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-emerald-600 font-medium mb-2 fade-in">FOR BUSINESSES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 fade-in">
              Corporate Tax & Accounting
            </h2>
            <p className="text-gray-600 fade-in">
              From small businesses to corporations, we provide tailored solutions to help your company thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {corporateServices.map((service) => (
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

          <div className="bg-white rounded-xl p-8 md:p-10 shadow-md fade-in">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6">Why Choose Us for Business Services?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Tax Optimization</h4>
                  <p className="text-gray-600">We structure your business finances to minimize tax liabilities legally.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Compliance Assurance</h4>
                  <p className="text-gray-600">We keep your business compliant with ever-changing tax regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Business Strategy</h4>
                  <p className="text-gray-600">We provide financial insights to help drive business decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-800 mb-1">Dedicated Support</h4>
                  <p className="text-gray-600">A dedicated accountant who understands your specific business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Ready to make tax season stress-free?
            </h2>
            <p className="text-xl text-gray-200 mb-8 fade-in">
              Let's discuss your tax and accounting needs and how we can help.
            </p>
            <Button variant="primary" to="/contact" className="fade-in">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;