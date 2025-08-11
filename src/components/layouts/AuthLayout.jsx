import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import AuthIllustration from '../common/AuthIllustration'

const AuthLayout = ({ children, title, subtitle, illustration, type = 'login' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pastel-pink/30 via-white to-pastel-blue/30">
      <motion.div 
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Illustration */}
        <div className="hidden lg:block text-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AuthIllustration type={type} />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold font-poppins text-gray-800 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-2 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          className="w-full max-w-md mx-auto card p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-poppins text-gradient">
                Paper Decor
              </span>
            </Link>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AuthLayout

