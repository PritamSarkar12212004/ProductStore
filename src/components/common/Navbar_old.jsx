import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  Heart, 
  Search,
  LogOut,
  Settings,
  Package
} from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const { getCartItemsCount } = useCart()
  const { user, logout, isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/products?category=all' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
    navigate('/')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg"
            >
              <Package className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold font-poppins text-gradient">
              Paper Decor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${\n                  location.pathname === item.path\n                    ? 'text-primary-600'\n                    : 'text-gray-700 hover:text-primary-600'\n                }`}
              >\n                {item.name}\n                {location.pathname === item.path && (\n                  <motion.div\n                    layoutId="activeTab"\n                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"\n                  />\n                )}\n              </Link>\n            ))}\n          </div>\n\n          {/* Search Bar */}\n          <div className="hidden lg:block">\n            <form onSubmit={handleSearch} className="relative">\n              <input\n                type="text"\n                placeholder="Search products..."\n                value={searchQuery}\n                onChange={(e) => setSearchQuery(e.target.value)}\n                className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"\n              />\n              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />\n            </form>\n          </div>\n\n          {/* Right Side Icons */}\n          <div className="flex items-center space-x-4">\n            {/* Cart Icon */}\n            <Link to="/cart" className="relative p-2">\n              <motion.div\n                whileHover={{ scale: 1.1 }}\n                whileTap={{ scale: 0.9 }}\n              >\n                <ShoppingCart className="h-6 w-6 text-gray-700" />\n                {getCartItemsCount() > 0 && (\n                  <motion.span\n                    initial={{ scale: 0 }}\n                    animate={{ scale: 1 }}\n                    className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"\n                  >\n                    {getCartItemsCount()}\n                  </motion.span>\n                )}\n              </motion.div>\n            </Link>\n\n            {/* User Menu */}\n            {isAuthenticated ? (\n              <div className="relative">\n                <button\n                  onClick={() => setShowUserMenu(!showUserMenu)}\n                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"\n                >\n                  <img\n                    src={user.avatar}\n                    alt={user.name}\n                    className="h-8 w-8 rounded-full object-cover"\n                  />\n                  <span className="hidden md:block text-sm font-medium text-gray-700">\n                    {user.name}\n                  </span>\n                </button>\n\n                <AnimatePresence>\n                  {showUserMenu && (\n                    <motion.div\n                      initial={{ opacity: 0, scale: 0.95, y: -10 }}\n                      animate={{ opacity: 1, scale: 1, y: 0 }}\n                      exit={{ opacity: 0, scale: 0.95, y: -10 }}\n                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1"\n                    >\n                      <div className="px-4 py-2 border-b border-gray-100">\n                        <p className="text-sm font-medium text-gray-900">{user.name}</p>\n                        <p className="text-xs text-gray-500">{user.email}</p>\n                      </div>\n                      \n                      <Link\n                        to="/profile"\n                        onClick={() => setShowUserMenu(false)}\n                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"\n                      >\n                        <User className="h-4 w-4 mr-2" />\n                        Profile\n                      </Link>\n                      \n                      <Link\n                        to="/orders"\n                        onClick={() => setShowUserMenu(false)}\n                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"\n                      >\n                        <Package className="h-4 w-4 mr-2" />\n                        Orders\n                      </Link>\n                      \n                      <Link\n                        to="/wishlist"\n                        onClick={() => setShowUserMenu(false)}\n                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"\n                      >\n                        <Heart className="h-4 w-4 mr-2" />\n                        Wishlist\n                      </Link>\n                      \n                      {isAdmin && (\n                        <Link\n                          to="/admin"\n                          onClick={() => setShowUserMenu(false)}\n                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"\n                        >\n                          <Settings className="h-4 w-4 mr-2" />\n                          Admin Panel\n                        </Link>\n                      )}\n                      \n                      <hr className="my-1" />\n                      \n                      <button\n                        onClick={handleLogout}\n                        className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"\n                      >\n                        <LogOut className="h-4 w-4 mr-2" />\n                        Logout\n                      </button>\n                    </motion.div>\n                  )}\n                </AnimatePresence>\n              </div>\n            ) : (\n              <div className="flex items-center space-x-2">\n                <Link\n                  to="/login"\n                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"\n                >\n                  Login\n                </Link>\n                <Link\n                  to="/register"\n                  className="btn-primary text-sm"\n                >\n                  Sign Up\n                </Link>\n              </div>\n            )}\n\n            {/* Mobile Menu Button */}\n            <button\n              onClick={() => setIsOpen(!isOpen)}\n              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"\n            >\n              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}\n            </button>\n          </div>\n        </div>\n      </div>\n\n      {/* Mobile Menu */}\n      <AnimatePresence>\n        {isOpen && (\n          <motion.div\n            initial={{ opacity: 0, height: 0 }}\n            animate={{ opacity: 1, height: 'auto' }}\n            exit={{ opacity: 0, height: 0 }}\n            className="md:hidden bg-white border-t border-gray-100"\n          >\n            <div className="px-4 py-4 space-y-2">\n              {/* Mobile Search */}\n              <form onSubmit={handleSearch} className="relative mb-4">\n                <input\n                  type="text"\n                  placeholder="Search products..."\n                  value={searchQuery}\n                  onChange={(e) => setSearchQuery(e.target.value)}\n                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"\n                />\n                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />\n              </form>\n\n              {navItems.map((item) => (\n                <Link\n                  key={item.name}\n                  to={item.path}\n                  onClick={() => setIsOpen(false)}\n                  className={`block px-3 py-2 rounded-md text-base font-medium ${\n                    location.pathname === item.path\n                      ? 'text-primary-600 bg-primary-50'\n                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'\n                  }`}\n                >\n                  {item.name}\n                </Link>\n              ))}\n              \n              {!isAuthenticated && (\n                <div className="pt-4 border-t border-gray-100">\n                  <Link\n                    to="/login"\n                    onClick={() => setIsOpen(false)}\n                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"\n                  >\n                    Login\n                  </Link>\n                  <Link\n                    to="/register"\n                    onClick={() => setIsOpen(false)}\n                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50"\n                  >\n                    Sign Up\n                  </Link>\n                </div>\n              )}\n            </div>\n          </motion.div>\n        )}\n      </AnimatePresence>\n    </motion.nav>\n  )\n}\n\nexport default Navbar
