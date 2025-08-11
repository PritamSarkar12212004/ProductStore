import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Search,
  Grid,
  List,
  SlidersHorizontal,
  Star,
  Heart,
  ShoppingBag,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  Tag,
  TrendingUp,
  Package,
  Users,
  Zap,
  ArrowRight,
  Eye,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "all",
    event: searchParams.get("event") || "all",
    priceRange: [0, 5000],
    sortBy: "popularity",
    sortOrder: "desc",
  });

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced mock products data with more fields
  const mockProducts = [
    {
      id: 1,
      title: "Elegant Wedding Paper Flowers",
      price: 2999,
      originalPrice: 3999,
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0da6623ec63?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      ],
      category: "wedding",
      event: "wedding",
      rating: 4.8,
      reviews: 124,
      description:
        "Beautiful handcrafted paper flowers perfect for wedding decorations",
      shortDescription: "Handcrafted wedding paper flowers",
      dimensions: { length: 30, width: 20, height: 15 },
      color: "White, Pink, Red",
      material: "Premium Eco-friendly Paper",
      specialOffer: "Free customization for orders above ₹2000",
      stock: 25,
      bulkPrices: [
        { qty: "5-10 pieces", price: 2699, discount: "10% off" },
        { qty: "11-25 pieces", price: 2399, discount: "20% off" },
        { qty: "26+ pieces", price: 1999, discount: "33% off" },
      ],
      isPopular: true,
      isTrending: true,
    },
    {
      id: 2,
      title: "Birthday Party Decoration Kit",
      price: 1999,
      originalPrice: 2499,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515431307686-15436ed2fe3d?w=500&h=500&fit=crop",
      ],
      category: "birthday",
      event: "birthday",
      rating: 4.9,
      reviews: 89,
      description:
        "Complete birthday party decoration set with colorful paper elements",
      shortDescription: "Colorful birthday party kit",
      dimensions: { length: 25, width: 15, height: 10 },
      color: "Multicolor",
      material: "Recycled Paper",
      specialOffer: "Buy 2 get 1 free balloon arch",
      stock: 18,
      bulkPrices: [
        { qty: "3-5 kits", price: 1799, discount: "10% off" },
        { qty: "6-10 kits", price: 1599, discount: "20% off" },
        { qty: "11+ kits", price: 1399, discount: "30% off" },
      ],
      isPopular: true,
      isTrending: false,
    },
    {
      id: 3,
      title: "Festival Paper Lanterns",
      price: 3499,
      originalPrice: 4499,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&h=500&fit=crop",
      ],
      category: "festival",
      event: "diwali",
      rating: 4.7,
      reviews: 156,
      description: "Traditional festival lanterns made from eco-friendly paper",
      shortDescription: "Traditional festival lanterns",
      dimensions: { length: 40, width: 40, height: 60 },
      color: "Golden, Red, Orange",
      material: "Handmade Paper",
      specialOffer: "Free LED lights with every purchase",
      stock: 12,
      bulkPrices: [
        { qty: "2-4 sets", price: 3149, discount: "10% off" },
        { qty: "5-9 sets", price: 2799, discount: "20% off" },
        { qty: "10+ sets", price: 2449, discount: "30% off" },
      ],
      isPopular: false,
      isTrending: true,
    },
    {
      id: 4,
      title: "Custom Paper Art Backdrop",
      price: 5999,
      originalPrice: 7999,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
      ],
      category: "custom",
      event: "anniversary",
      rating: 5.0,
      reviews: 67,
      description: "Personalized paper art backdrop for special occasions",
      shortDescription: "Custom personalized backdrop",
      dimensions: { length: 200, width: 150, height: 5 },
      color: "Customizable",
      material: "Premium Art Paper",
      specialOffer: "Free design consultation",
      stock: 8,
      bulkPrices: [
        { qty: "2-3 pieces", price: 5399, discount: "10% off" },
        { qty: "4-6 pieces", price: 4799, discount: "20% off" },
        { qty: "7+ pieces", price: 4199, discount: "30% off" },
      ],
      isPopular: false,
      isTrending: false,
    },
    {
      id: 5,
      title: "Paper Rose Bouquet",
      price: 2499,
      originalPrice: 2999,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0da6623ec63?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0da6623ec63?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop",
      ],
      category: "wedding",
      event: "valentines",
      rating: 4.6,
      reviews: 98,
      description:
        "Romantic paper rose bouquet for weddings and special events",
      shortDescription: "Romantic paper rose bouquet",
      dimensions: { length: 35, width: 25, height: 40 },
      color: "Red, Pink, White",
      material: "Tissue Paper",
      specialOffer: "Free gift wrapping",
      stock: 15,
      bulkPrices: [
        { qty: "3-5 bouquets", price: 2249, discount: "10% off" },
        { qty: "6-10 bouquets", price: 1999, discount: "20% off" },
        { qty: "11+ bouquets", price: 1749, discount: "30% off" },
      ],
      isPopular: true,
      isTrending: false,
    },
    {
      id: 6,
      title: "Kids Birthday Banner Set",
      price: 1599,
      originalPrice: 1999,
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
      ],
      category: "birthday",
      event: "birthday",
      rating: 4.8,
      reviews: 142,
      description: "Colorful birthday banner set perfect for kids parties",
      shortDescription: "Kids birthday banner set",
      dimensions: { length: 300, width: 30, height: 2 },
      color: "Rainbow Colors",
      material: "Cardstock Paper",
      specialOffer: "Free name customization",
      stock: 22,
      bulkPrices: [
        { qty: "2-4 sets", price: 1439, discount: "10% off" },
        { qty: "5-9 sets", price: 1279, discount: "20% off" },
        { qty: "10+ sets", price: 1119, discount: "30% off" },
      ],
      isPopular: true,
      isTrending: true,
    },
    {
      id: 7,
      title: "Diwali Decoration Package",
      price: 4299,
      originalPrice: 5299,
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      ],
      category: "festival",
      event: "diwali",
      rating: 4.9,
      reviews: 203,
      description:
        "Complete Diwali decoration package with traditional elements",
      shortDescription: "Complete Diwali decoration",
      dimensions: { length: 50, width: 40, height: 30 },
      color: "Golden, Red",
      material: "Traditional Handmade Paper",
      specialOffer: "Free rangoli stencils",
      stock: 10,
      bulkPrices: [
        { qty: "2-3 packages", price: 3869, discount: "10% off" },
        { qty: "4-6 packages", price: 3439, discount: "20% off" },
        { qty: "7+ packages", price: 3009, discount: "30% off" },
      ],
      isPopular: false,
      isTrending: true,
    },
    {
      id: 8,
      title: "Baby Shower Paper Decor",
      price: 3299,
      originalPrice: 4299,
      image:
        "https://images.unsplash.com/photo-1515431307686-15436ed2fe3d?w=500&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1515431307686-15436ed2fe3d?w=500&h=500&fit=crop",
      ],
      category: "custom",
      event: "baby-shower",
      rating: 4.7,
      reviews: 76,
      description:
        "Adorable paper decorations perfect for baby shower celebrations",
      shortDescription: "Baby shower decorations",
      dimensions: { length: 35, width: 25, height: 20 },
      color: "Pastel Pink, Blue",
      material: "Soft Paper",
      specialOffer: "Free photo props",
      stock: 14,
      bulkPrices: [
        { qty: "2-4 sets", price: 2969, discount: "10% off" },
        { qty: "5-8 sets", price: 2639, discount: "20% off" },
        { qty: "9+ sets", price: 2309, discount: "30% off" },
      ],
      isPopular: false,
      isTrending: false,
    },
  ];

  // Event types for filtering
  const events = [
    {
      id: "all",
      name: "All Events",
      icon: Calendar,
      count: mockProducts.length,
    },
    {
      id: "wedding",
      name: "Wedding",
      icon: Heart,
      count: mockProducts.filter((p) => p.event === "wedding").length,
    },
    {
      id: "birthday",
      name: "Birthday",
      icon: Package,
      count: mockProducts.filter((p) => p.event === "birthday").length,
    },
    {
      id: "festival",
      name: "Festival",
      icon: Zap,
      count: mockProducts.filter(
        (p) => p.event === "festival" || p.event === "diwali"
      ).length,
    },
    {
      id: "anniversary",
      name: "Anniversary",
      icon: Heart,
      count: mockProducts.filter((p) => p.event === "anniversary").length,
    },
    {
      id: "baby-shower",
      name: "Baby Shower",
      icon: Users,
      count: mockProducts.filter((p) => p.event === "baby-shower").length,
    },
    {
      id: "valentines",
      name: "Valentine's Day",
      icon: Heart,
      count: mockProducts.filter((p) => p.event === "valentines").length,
    },
  ];

  const categories = [
    { id: "all", name: "All Categories", count: mockProducts.length },
    {
      id: "birthday",
      name: "Birthday",
      count: mockProducts.filter((p) => p.category === "birthday").length,
    },
    {
      id: "wedding",
      name: "Wedding",
      count: mockProducts.filter((p) => p.category === "wedding").length,
    },
    {
      id: "festival",
      name: "Festival",
      count: mockProducts.filter((p) => p.category === "festival").length,
    },
    {
      id: "custom",
      name: "Custom",
      count: mockProducts.filter((p) => p.category === "custom").length,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.search.toLowerCase())
      );
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Event filter
    if (filters.event && filters.event !== "all") {
      if (filters.event === "festival") {
        filtered = filtered.filter(
          (product) =>
            product.event === "festival" || product.event === "diwali"
        );
      } else {
        filtered = filtered.filter(
          (product) => product.event === filters.event
        );
      }
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Sorting
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (filters.sortBy) {
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        case "reviews":
          aValue = a.reviews;
          bValue = b.reviews;
          break;
        case "popularity":
          aValue = a.isPopular ? 1 : 0;
          bValue = b.isPopular ? 1 : 0;
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (filters.sortOrder === "desc") {
        return bValue > aValue ? 1 : -1;
      }
      return aValue > bValue ? 1 : -1;
    });

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));

    // Update URL params
    const newSearchParams = new URLSearchParams(searchParams);
    if (value && value !== "all" && value !== "") {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
    setSearchParams(newSearchParams);
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "all",
      priceRange: [0, 100],
      sortBy: "name",
      sortOrder: "asc",
    });
    setSearchParams({});
  };

  // Enhanced Product Card Component
  const ProductCard = ({ product, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          viewMode === "list" ? "w-64 flex-shrink-0" : ""
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className={`${
            viewMode === "list" ? "w-full h-56" : "w-full h-64"
          } object-cover group-hover:scale-110 transition-transform duration-500`}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            {product.event}
          </span>
          {product.isPopular && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <TrendingUp className="h-3 w-3" />
              Popular
            </span>
          )}
          {product.isTrending && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Zap className="h-3 w-3" />
              Trending
            </span>
          )}
        </div>

        {/* Heart & Quick View */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Eye className="h-4 w-4 text-gray-600 hover:text-primary-500" />
          </motion.button>
        </div>

        {/* Discount Badge */}
        {product.originalPrice > product.price && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % OFF
            </span>
          </div>
        )}
      </div>

      <div
        className={`${isMobile ? "p-3" : "p-6"} flex-1 ${
          viewMode === "list" ? "flex flex-col justify-between" : ""
        }`}
      >
        {/* Product Info */}
        <div className={`${isMobile ? "mb-3" : "mb-4"}`}>
          <h3
            className={`${isMobile ? "text-sm" : "text-xl"} font-bold ${
              isMobile ? "mb-1" : "mb-2"
            } text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2`}
          >
            {product.title}
          </h3>
          {!isMobile && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.shortDescription}
            </p>
          )}

          {/* Rating */}
          <div
            className={`flex items-center gap-1 ${isMobile ? "mb-2" : "mb-3"}`}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`${isMobile ? "h-3 w-3" : "h-4 w-4"} ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span
              className={`${
                isMobile ? "text-xs" : "text-sm"
              } font-medium text-gray-700`}
            >
              {product.rating}
            </span>
            {!isMobile && (
              <span className="text-xs text-gray-500">({product.reviews})</span>
            )}
          </div>

          {/* Stock Status - Only show on desktop */}
          {!isMobile && (
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  product.stock > 10
                    ? "bg-green-500"
                    : product.stock > 5
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              ></div>
              <span
                className={`text-xs font-medium ${
                  product.stock > 10
                    ? "text-green-600"
                    : product.stock > 5
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {product.stock > 10
                  ? "In Stock"
                  : product.stock > 5
                  ? "Low Stock"
                  : "Almost Sold Out"}
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className={`${isMobile ? "mb-3" : "mb-4"}`}>
          <div
            className={`flex items-center ${
              isMobile ? "gap-1 mb-1 flex-col items-start" : "gap-2 mb-1"
            }`}
          >
            <span
              className={`${
                isMobile ? "text-lg" : "text-2xl"
              } font-bold text-primary-600`}
            >
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span
                className={`${
                  isMobile ? "text-sm" : "text-lg"
                } text-gray-400 line-through`}
              >
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          {!isMobile && (
            <p className="text-xs text-green-600 font-medium">
              {product.specialOffer}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`${isMobile ? "space-y-2" : "space-y-3"}`}>
          <Link to={`/products/${product.id}`} className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${
                isMobile ? "py-2 text-xs" : "py-3"
              } bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold flex items-center justify-center gap-2`}
            >
              <Eye className={`${isMobile ? "h-3 w-3" : "h-4 w-4"}`} />
              {isMobile ? "View" : "View Details"}
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(product)}
            className={`w-full ${
              isMobile ? "py-2 text-xs" : "py-3"
            } bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
          >
            <ShoppingBag className={`${isMobile ? "h-3 w-3" : "h-4 w-4"}`} />
            {isMobile ? "Add" : "Add to Cart"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover our beautiful collection of handcrafted paper decorations
              for every celebration
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-full px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Event-Based Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-6 mb-8 mx-auto max-w-6xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Shop by Event
            </h3>
            {!isMobile && (
              <div className="text-sm text-gray-500">
                Find perfect decorations for your special occasion
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {events.map((event) => {
              const Icon = event.icon;
              return (
                <motion.button
                  key={event.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterChange("event", event.id)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                    filters.event === event.id
                      ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 mb-2 ${
                      filters.event === event.id
                        ? "text-white"
                        : "text-primary-500"
                    }`}
                  />
                  <span className="text-sm font-medium text-center">
                    {event.name}
                  </span>
                  <span className="text-xs opacity-75 mt-1">
                    ({event.count})
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Search and Controls Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 font-medium"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-white shadow-md text-primary-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-white shadow-md text-primary-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filters Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-lg"
              >
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </motion.button>

              {/* Sort */}
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split("-");
                  handleFilterChange("sortBy", sortBy);
                  handleFilterChange("sortOrder", sortOrder);
                }}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-800 font-medium"
              >
                <option value="popularity-desc">Most Popular</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
                <option value="rating-desc">Top Rated</option>
                <option value="reviews-desc">Most Reviewed</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(filters.search ||
            filters.category !== "all" ||
            filters.event !== "all") && (
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-600">
                Active filters:
              </span>
              {filters.search && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  Search: "{filters.search}"
                  <button
                    onClick={() => handleFilterChange("search", "")}
                    className="hover:bg-primary-200 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.span>
              )}
              {filters.category !== "all" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium capitalize"
                >
                  {filters.category}
                  <button
                    onClick={() => handleFilterChange("category", "all")}
                    className="hover:bg-secondary-200 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.span>
              )}
              {filters.event !== "all" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium capitalize"
                >
                  {events.find((e) => e.id === filters.event)?.name}
                  <button
                    onClick={() => handleFilterChange("event", "all")}
                    className="hover:bg-green-200 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm font-medium text-red-600 hover:text-red-700 px-2 py-1 rounded-md hover:bg-red-50 transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-8 max-w-7xl mx-auto">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-80 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary-500" />
                      Categories
                    </h4>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-center cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={category.id}
                            checked={filters.category === category.id}
                            onChange={(e) =>
                              handleFilterChange("category", e.target.value)
                            }
                            className="text-primary-500 focus:ring-primary-500 h-4 w-4"
                          />
                          <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                            {category.name}
                          </span>
                          <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary-500" />
                      Price Range
                    </h4>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="6000"
                        value={filters.priceRange[1]}
                        onChange={(e) =>
                          handleFilterChange("priceRange", [
                            0,
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm font-medium text-gray-600">
                        <span>₹0</span>
                        <span className="text-primary-600 font-bold">
                          ₹{filters.priceRange[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-500 border-t-transparent mx-auto"></div>
                <p className="text-gray-600 mt-6 text-lg font-medium">
                  Loading amazing products...
                </p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No products found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center mb-8 bg-white rounded-xl p-4 shadow-lg"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Showing {filteredProducts.length} of {products.length}{" "}
                      products
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Find the perfect decorations for your celebration
                    </p>
                  </div>
                  {!isMobile && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4" />
                      <span>Sorted by {filters.sortBy}</span>
                    </div>
                  )}
                </motion.div>

                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "flex flex-col gap-6"
                  }
                >
                  {filteredProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
