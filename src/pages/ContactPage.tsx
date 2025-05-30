import React from 'react';
import { MapPin, Phone, Mail, Clock, CalendarCheck } from 'lucide-react';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 slide-up">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
              Have questions or ready to schedule an appointment? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="fade-in space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <MapPin className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Our Office</h3>
                  <p className="text-gray-600">
                    280A 2600 8th Street East<br />
                    Saskatoon, SK
                  </p>
                </div>
              </div>
                
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <Phone className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:3063746322" className="hover:text-emerald-600 transition-colors">
                      (306) 374-6322
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <Mail className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:bjollyaccounting@hotmail.com" className="hover:text-emerald-600 transition-colors">
                      bjollyaccounting@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <Clock className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Business Hours</h3>
                  <div className="text-gray-600 grid grid-cols-2 gap-x-6">
                    <p>Monday - Friday:</p>
                    <p>9:00 AM - 5:00 PM</p>
                    
                    <p>Saturday:</p>
                    <p>10:00 AM - 2:00 PM</p>
                    
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="flex items-center text-lg font-semibold text-navy-800 mb-3">
                  <CalendarCheck className="text-emerald-600 w-5 h-5 mr-2" />
                  Book an Appointment
                </h3>
                <p className="text-gray-600 mb-4">
                  Prefer to schedule a specific time? Call us directly or request an appointment using our contact form.
                </p>
                <Button href="tel:3063746322" variant="primary">
                  Call to Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="fade-in">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Find Us</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5833377538366!2d-106.5627180230712!3d52.11727087169726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f33b61bc6e6f%3A0xc98c5e65de56ee70!2s280A%202600%208%20St%20E%2C%20Saskatoon%2C%20SK%20S7H%200V7%2C%20Canada!5e0!3m2!1sen!2sus!4v1718391168813!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="B Jolly Accounting location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center fade-in">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md fade-in">
                <h3 className="text-xl font-semibold text-navy-800 mb-3">
                  Do you work with clients outside of Saskatoon?
                </h3>
                <p className="text-gray-600">
                  Yes! While our office is located in Saskatoon, we serve clients throughout Saskatchewan. We offer virtual meetings and can handle most tax matters remotely.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">
                  When should I start preparing for tax season?
                </h3>
                <p className="text-gray-600">
                  We recommend gathering your documents as early as January. This gives you time to ensure everything is in order before the April deadline.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">
                  What documents do I need to bring for my tax preparation?
                </h3>
                <p className="text-gray-600">
                  Typically, you'll need T4s, T5s, receipts for deductible expenses, previous year's tax return, and any notices from CRA. We'll provide a detailed checklist based on your specific situation.
                </p>
              </div>
            </div>
          
            <div className="text-center mt-10 fade-in">
              <p className="text-gray-600 mb-4">
                Have more questions? We're happy to help.
              </p>
              <Button variant="secondary" href="tel:3063746322">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;