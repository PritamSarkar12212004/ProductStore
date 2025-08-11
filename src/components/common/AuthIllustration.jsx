import React from 'react'
import { motion } from 'framer-motion'

const AuthIllustration = ({ type = 'login' }) => {
  const loginIllustration = (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto max-w-sm mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f28e4f" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f28e4f" />
          <stop offset="100%" stopColor="#e36729" />
        </linearGradient>
        <linearGradient id="secondary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      
      <rect width="400" height="300" fill="url(#bg)" rx="20" />
      
      {/* Paper flowers */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="150" cy="100" r="25" fill="url(#primary)" opacity="0.8" />
        <circle cx="140" cy="110" r="20" fill="url(#secondary)" opacity="0.6" />
        <circle cx="160" cy="115" r="15" fill="#fcd9c1" opacity="0.7" />
      </motion.g>
      
      {/* Decorative elements */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M250 150 L260 140 L270 150 L260 160 Z"
          fill="url(#primary)"
          opacity="0.3"
        />
      </motion.g>
      
      <motion.g
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="320" cy="80" r="8" fill="url(#secondary)" opacity="0.5" />
      </motion.g>
      
      {/* Main illustration */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <rect x="180" y="180" width="40" height="60" rx="20" fill="url(#primary)" />
        <circle cx="200" cy="160" r="30" fill="url(#secondary)" opacity="0.8" />
        <rect x="190" y="145" width="20" height="30" rx="10" fill="white" />
      </motion.g>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + i * 70}
          cy={50 + (i % 2) * 100}
          r={3}
          fill={i % 2 ? "url(#primary)" : "url(#secondary)"}
          opacity="0.4"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}
    </svg>
  )

  const registerIllustration = (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto max-w-sm mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e5f5" />
          <stop offset="100%" stopColor="#e8f5e8" />
        </linearGradient>
        <linearGradient id="accent1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="accent2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f28e4f" />
          <stop offset="100%" stopColor="#f59e6b" />
        </linearGradient>
      </defs>
      
      <rect width="400" height="300" fill="url(#bg2)" rx="20" />
      
      {/* Creative elements */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="100,80 110,100 90,100"
          fill="url(#accent1)"
          opacity="0.6"
        />
      </motion.g>
      
      <motion.g
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="280" y="60" width="30" height="30" rx="15" fill="url(#accent2)" opacity="0.7" />
      </motion.g>
      
      {/* Main creative scene */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <circle cx="200" cy="150" r="40" fill="url(#accent1)" opacity="0.3" />
        <circle cx="200" cy="150" r="25" fill="url(#accent2)" opacity="0.5" />
        <circle cx="200" cy="150" r="15" fill="white" />
      </motion.g>
      
      {/* Decorative paper cutouts */}
      <motion.g
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon
          points="150,200 170,180 190,200 170,220"
          fill="url(#accent1)"
          opacity="0.4"
        />
      </motion.g>
      
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon
          points="250,200 270,180 290,200 270,220"
          fill="url(#accent2)"
          opacity="0.4"
        />
      </motion.g>
      
      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.g
          key={i}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        >
          <path
            d={`M${100 + i * 35},${80 + (i % 3) * 50} L${105 + i * 35},${85 + (i % 3) * 50} L${100 + i * 35},${90 + (i % 3) * 50} L${95 + i * 35},${85 + (i % 3) * 50} Z`}
            fill={i % 2 ? "url(#accent1)" : "url(#accent2)"}
            opacity="0.6"
          />
        </motion.g>
      ))}
    </svg>
  )

  return type === 'register' ? registerIllustration : loginIllustration
}

export default AuthIllustration
