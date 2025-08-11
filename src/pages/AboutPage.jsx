import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Star, 
  Users, 
  Award, 
  Leaf, 
  Sparkles,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Creativity',
      description: 'We believe every celebration deserves beautiful, handcrafted decorations that tell a story.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'All our products are made from sustainable, recyclable materials that care for our planet.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We work closely with local artisans and support small businesses in our community.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every piece is carefully crafted with attention to detail and built to create lasting memories.'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '100,000+', label: 'Decorations Created' },
    { number: '500+', label: 'Unique Designs' },
    { number: '5 Years', label: 'Of Excellence' }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b7179c45?w=300&h=300&fit=crop&crop=face',
      bio: 'Sarah founded Paper Decor with a vision to make beautiful celebrations accessible to everyone.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Mike brings 10 years of design experience and leads our creative team with innovation.'
    },
    {
      name: 'Emily Davis',
      role: 'Sustainability Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Emily ensures all our products meet the highest environmental standards.'
    }
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="container-responsive py-16 md:py-24">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-poppins text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting <span className="gradient-text">Memorable</span> Moments
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Since 2019, Paper Decor has been transforming ordinary celebrations into extraordinary memories 
            through beautiful, eco-friendly paper decorations handcrafted with love and attention to detail.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-responsive py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-primary-600" />
                  <h2 className="text-3xl font-bold font-poppins text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To make every celebration special by providing beautiful, sustainable, and affordable 
                  paper decorations that bring joy to people's most important moments. We believe that 
                  everyone deserves to celebrate in style, regardless of budget or occasion.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="h-6 w-6 text-secondary-600" />
                  <h2 className="text-3xl font-bold font-poppins text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's leading provider of eco-friendly celebration decorations, 
                  inspiring creativity and spreading joy while protecting our planet for future generations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop" 
                alt="Paper decorations" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-responsive py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="card p-8 text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50">
        <div className="container-responsive py-16 md:py-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The passionate people behind Paper Decor
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary-100"
                />
                <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-responsive py-16 md:py-24">
        <motion.div
          className="card p-12 md:p-16 text-center bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of happy customers who have made their celebrations unforgettable with Paper Decor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2">
              <span>Shop Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="btn-ghost text-white hover:bg-white/10 inline-flex items-center gap-2">
              <span>Contact Us</span>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutPage
