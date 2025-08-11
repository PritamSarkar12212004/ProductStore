import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { 
  ShoppingBag, 
  Star, 
  ArrowRight, 
  Sparkles,
  Heart,
  MapPin,
  Calendar,
  Tag,
  Filter
} from 'lucide-react'
import { useCart } from '../context/CartContext'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HomePage = () => {
  const { addToCart } = useCart()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCity, setSelectedCity] = useState('Maharashtra')
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Banner data with different sizes
  const banners = [
    {
      id: 1,
      title: "Festival Season Sale",
      subtitle: "Up to 50% Off on Diwali Decorations",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      size: 'large',
      cta: "Shop Festival Collection",
      discount: "50% OFF"
    },
    {
      id: 2,
      title: "Wedding Special",
      subtitle: "Premium Paper Flowers",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
      size: 'medium',
      cta: "Explore Wedding",
      discount: "30% OFF"
    },
    {
      id: 3,
      title: "Birthday Bonanza",
      subtitle: "Party Decorations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      size: 'medium',
      cta: "Party Time",
      discount: "25% OFF"
    },
    {
      id: 4,
      title: "Custom Art",
      subtitle: "Personalized Designs",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
      size: 'small',
      cta: "Customize",
      discount: "Free Design"
    },
    {
      id: 5,
      title: "Eco Collection",
      subtitle: "Sustainable Decor",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
      size: 'small',
      cta: "Go Green",
      discount: "15% OFF"
    }
  ]

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Diwali Decoration Workshop",
      date: "2024-11-02",
      time: "10:00 AM - 2:00 PM",
      location: "Mumbai, Maharashtra",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      spots: "12 spots left"
    },
    {
      id: 2,
      title: "Wedding Decor Masterclass",
      date: "2024-11-15",
      time: "2:00 PM - 6:00 PM",
      location: "Pune, Maharashtra",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=200&fit=crop",
      spots: "8 spots left"
    },
    {
      id: 3,
      title: "Kids Birthday Party Setup",
      date: "2024-11-22",
      time: "11:00 AM - 3:00 PM",
      location: "Nagpur, Maharashtra",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop",
      spots: "15 spots left"
    }
  ]

  // City-based product data
  const cityProducts = {
    'Maharashtra': [
      {
        id: 1,
        title: "Mumbai Festival Lights",
        price: 1299,
        originalPrice: 1699,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        city: "Mumbai",
        category: "Festival",
        rating: 4.8,
        reviews: 124,
        delivery: "Same day delivery"
      },
      {
        id: 2,
        title: "Pune Wedding Ensemble",
        price: 2499,
        originalPrice: 3299,
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop",
        city: "Pune",
        category: "Wedding",
        rating: 4.9,
        reviews: 89,
        delivery: "Next day delivery"
      },
      {
        id: 3,
        title: "Nagpur Birthday Special",
        price: 899,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        city: "Nagpur",
        category: "Birthday",
        rating: 4.7,
        reviews: 156,
        delivery: "2-3 days"
      },
      {
        id: 4,
        title: "Nashik Custom Art",
        price: 1899,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
        city: "Nashik",
        category: "Custom",
        rating: 5.0,
        reviews: 67,
        delivery: "3-5 days"
      },
      {
        id: 5,
        title: "Thane Anniversary Collection",
        price: 1599,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop",
        city: "Thane",
        category: "Anniversary",
        rating: 4.6,
        reviews: 98,
        delivery: "Next day delivery"
      },
      {
        id: 6,
        title: "Aurangabad Party Pack",
        price: 1199,
        originalPrice: 1599,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=400&fit=crop",
        city: "Aurangabad",
        category: "Party",
        rating: 4.5,
        reviews: 75,
        delivery: "2-3 days"
      }
    ]
  }

  const cities = ['Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Tamil Nadu']

  // Get products for mobile (first 3 rows = 6 products)
  const getMobileProducts = () => {
    return cityProducts[selectedCity]?.slice(0, 6) || []
  }

  // Get products for desktop
  const getDesktopProducts = () => {
    return cityProducts[selectedCity] || []
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Main Banner */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[0].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {banners[0].discount}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
                {banners[0].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {banners[0].subtitle}
              </p>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 rounded-full shadow-2xl"
                >
                  {banners[0].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-20 text-yellow-400 opacity-70"
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Multiple Banners Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these amazing deals for your celebrations
            </p>
          </motion.div>
          
          {/* Desktop Banner Layout */}
          <div className="hidden md:grid grid-cols-12 gap-6">
            {/* Medium Banner 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-6 relative group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={banners[1].image} 
                  alt={banners[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {banners[1].discount}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{banners[1].title}</h3>
                  <p className="mb-4 opacity-90">{banners[1].subtitle}</p>
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {banners[1].cta}
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Medium Banner 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-6 relative group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={banners[2].image} 
                  alt={banners[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {banners[2].discount}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{banners[2].title}</h3>
                  <p className="mb-4 opacity-90">{banners[2].subtitle}</p>
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {banners[2].cta}
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Small Banners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-6 relative group cursor-pointer"
            >
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={banners[3].image} 
                  alt={banners[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-between p-6 text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{banners[3].title}</h3>
                    <p className="text-sm opacity-90 mb-2">{banners[3].subtitle}</p>
                    <span className="bg-blue-500 text-xs px-2 py-1 rounded">{banners[3].discount}</span>
                  </div>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100">
                    {banners[3].cta}
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-6 relative group cursor-pointer"
            >
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={banners[4].image} 
                  alt={banners[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-between p-6 text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{banners[4].title}</h3>
                    <p className="text-sm opacity-90 mb-2">{banners[4].subtitle}</p>
                    <span className="bg-green-600 text-xs px-2 py-1 rounded">{banners[4].discount}</span>
                  </div>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100">
                    {banners[4].cta}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Mobile Banner Layout - Only show first 2 banners */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {banners.slice(1, 3).map((banner, index) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {banner.discount}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                    <p className="mb-4 opacity-90">{banner.subtitle}</p>
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      {banner.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">Upcoming Events & Workshops</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our creative workshops and learn to make beautiful decorations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-2xl shadow-lg overflow-hidden"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString('en-IN')} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary-600">{event.price}</span>
                    <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                      {event.spots}
                    </span>
                  </div>
                  <button className="w-full btn-primary">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City-Based Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Products Near You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Discover decorations available in your city with faster delivery
            </p>
            
            {/* City Selector */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center bg-white rounded-full p-1 shadow-md">
                <MapPin className="h-5 w-5 text-primary-500 ml-3 mr-2" />
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-transparent border-none outline-none px-3 py-2 text-gray-800 font-medium cursor-pointer"
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <Filter className="h-4 w-4 text-gray-400 mr-3" />
              </div>
            </div>
          </motion.div>
          
          {/* Products Grid - Mobile shows 6 products (3 rows), Desktop shows all */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isMobile ? getMobileProducts() : getDesktopProducts()).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <MapPin className="h-3 w-3 text-primary-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700">{product.city}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                      {product.delivery}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Link to={`/products/${product.id}`}>
                      <button className="w-full py-2 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Button for Mobile */}
          {isMobile && cityProducts[selectedCity]?.length > 6 && (
            <div className="text-center mt-8">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="btn-secondary px-8 py-3 rounded-full"
                >
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Join Our Creative Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get exclusive access to new designs, special offers, and DIY tutorials
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              * No spam, only beautiful decorations and inspiration
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
