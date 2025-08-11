import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  HelpCircle,
  ShoppingBag,
  Heart,
  CheckCircle,
  Calendar
} from 'lucide-react'

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [messageSent, setMessageSent] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@paperdecor.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Craft Street, Design City, DC 12345',
      subtitle: 'Come see our workshop!'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      subtitle: 'Weekends: 10AM-4PM EST'
    }
  ]

  const faqItems = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping (2-3 days) is available for an additional fee.'
    },
    {
      question: 'Are your products eco-friendly?',
      answer: 'Yes! All our decorations are made from 100% recyclable and biodegradable paper materials.'
    },
    {
      question: 'Can I request custom designs?',
      answer: 'Absolutely! We offer custom design services. Contact us with your ideas and we\'ll bring them to life.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in their original packaging.'
    }
  ]

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setMessageSent(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setMessageSent(false)
    }, 5000)
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="container-responsive py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-poppins text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about our products or need help with your order? 
            We'd love to hear from you and help make your celebration perfect.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                className="card p-6 text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-500">
                  {info.subtitle}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <section className="container-responsive">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {messageSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2 mb-6"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input 
                    {...register('firstName', { required: 'First name is required' })} 
                    type="text"
                    className={`input-field ${errors.firstName ? 'input-error' : ''}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input 
                    {...register('lastName', { required: 'Last name is required' })} 
                    type="text"
                    className={`input-field ${errors.lastName ? 'input-error' : ''}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })} 
                  type="email"
                  className={`input-field ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  {...register('phone')} 
                  type="tel"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select 
                  {...register('subject', { required: 'Please select a subject' })}
                  className={`input-field ${errors.subject ? 'input-error' : ''}`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="custom">Custom Design Request</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea 
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className={`input-field ${errors.message ? 'input-error' : ''}`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container-responsive">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to common questions about our products and services.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="card p-8 mt-8 bg-gradient-to-br from-primary-50 to-secondary-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:hello@paperdecor.com"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                  <a 
                    href="tel:+15551234567"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Map Section */}
      <section className="container-responsive py-16 md:py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4">
            Visit Our Workshop
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come see how we create our beautiful decorations and get inspired for your next celebration!
          </p>
        </motion.div>

        <motion.div
          className="card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg p-16 mb-6">
            <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
              Paper Decor Workshop
            </h3>
            <p className="text-gray-600 text-lg">
              123 Craft Street, Design City, DC 12345
            </p>
          </div>
          <p className="text-gray-600 mb-6">
            Our workshop is open for visits by appointment. Book a tour to see our artisans at work 
            and learn about our creative process!
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Schedule a Visit
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
