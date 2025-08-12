"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Shirt,
  Cloud,
  Calendar,
  Camera,
  Sparkles,
  TrendingUp,
  Brain,
  Clock,
  Zap,
  Shield,
  X,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const features = [
    {
      icon: Shirt,
      title: "Smart Closet Organization",
      description: "AI-powered categorization and tagging of your garments",
    },
    {
      icon: Cloud,
      title: "Weather-Smart Suggestions",
      description: "Get outfit recommendations based on real-time weather data",
    },
    {
      icon: Calendar,
      title: "Outfit Tracking",
      description: "Keep track of what you wear and discover your style patterns",
    },
  ];

  const differentiators = [
    {
      icon: Brain,
      title: "AI That Learns Your Style",
      description: "Unlike basic closet apps, RISE uses advanced AI to understand your personal style preferences and evolves with you",
      highlight: "Most Advanced AI",
    },
    {
      icon: Zap,
      title: "Instant Outfit Generation",
      description: "Generate complete outfits in seconds based on occasion, weather, and your calendar - no other app comes close",
      highlight: "10x Faster",
    },
    {
      icon: Clock,
      title: "Save 20 Minutes Every Morning",
      description: "Stop wasting time deciding what to wear. RISE users report saving over 2 hours per week on outfit decisions",
      highlight: "Proven Time Saver",
    },
    {
      icon: Shield,
      title: "Secure Cloud Storage",
      description: "Your wardrobe data is securely stored in the cloud with enterprise-grade encryption, accessible across all your devices",
      highlight: "Secure & Synced",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Capture & Catalog",
      description: "Take photos of your clothes and let AI categorize them automatically",
      icon: Camera,
    },
    {
      step: "02",
      title: "Get Suggestions",
      description: "Receive personalized outfit recommendations based on weather and occasions",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Track & Improve",
      description: "Monitor your wearing patterns and discover new style combinations",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "2M+", label: "Garments Cataloged" },
    { number: "95%", label: "User Satisfaction" },
    { number: "4.8★", label: "App Store Rating" },
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-ivory/80 border-b border-sand/30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <motion.circle 
                  cx="20" 
                  cy="20" 
                  r="18" 
                  fill="#9A917A" 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.path 
                  d="M20 8 L28 20 L20 32 L12 20 Z" 
                  fill="#FBF4E1"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-charcoal font-serif">RISE</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-charcoal/70 hover:text-charcoal transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-charcoal/70 hover:text-charcoal transition-colors">
              How it Works
            </a>
            <a href="#download" className="text-charcoal/70 hover:text-charcoal transition-colors">
              Download
            </a>
          </div>
          <Button 
            className="bg-accent hover:bg-accent/90 text-ivory shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setShowWaitlist(true)}
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-sand via-surface to-ivory pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                className="text-accent font-semibold text-2xl md:text-3xl mb-4 font-serif"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Smarter Mornings Start Here
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 font-serif">
                Your AI-Powered
                <span className="text-accent block"> Wardrobe Assistant</span>
              </h1>
              <p className="text-xl text-charcoal/70 mb-8 max-w-4xl">
                The only wardrobe app that truly understands your style. Organize, track, and get personalized outfit suggestions powered by cutting-edge AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-ivory text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() => setShowWaitlist(true)}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Join the Waitlist
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.img 
                src="/images/mockup-portrait.png" 
                alt="RISE App Interface"
                className="w-full max-w-48 lg:max-w-56 xl:max-w-64 relative z-10 drop-shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {/* Decorative background accent */}
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-150 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/95">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivory mb-4 font-serif">Why RISE is Different</h2>
            <p className="text-ivory/80 text-xl">No other wardrobe app comes close</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div 
                  className="bg-ivory/10 backdrop-blur-sm border border-ivory/20 rounded-2xl p-8 hover:bg-ivory/15 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-6 h-full">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-ivory" />
                    </div>
                    <div className="flex-1">
                      <span className="text-accent font-bold text-sm">{item.highlight}</span>
                      <h3 className="text-2xl font-bold text-ivory mb-3 font-serif">{item.title}</h3>
                      <p className="text-ivory/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">Core Features</h2>
            <p className="text-charcoal/70 text-xl">Everything you need for a smarter wardrobe</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-sand/20 hover:border-accent/30">
                    <motion.div 
                      className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-ivory" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4 font-serif">{feature.title}</h3>
                    <p className="text-charcoal/70">{feature.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">How RISE Works</h2>
            <p className="text-charcoal/70 text-xl">Simple steps to transform your wardrobe experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-ivory" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-sand rounded-full flex items-center justify-center text-sm font-bold text-charcoal">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 font-serif">{step.title}</h3>
                <p className="text-charcoal/70 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-accent via-sand to-accent relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundImage: [
              "radial-gradient(circle at 20% 50%, #FBF4E1 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #FBF4E1 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #FBF4E1 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              >
                <motion.div 
                  className="text-4xl font-bold text-ivory mb-2 font-serif"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-ivory/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-surface via-ivory to-sand relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold mb-6">
              <Star className="h-4 w-4 fill-accent" />
              Limited Early Access
              <Star className="h-4 w-4 fill-accent" />
            </div>
            
            <h2 className="text-5xl font-bold text-charcoal mb-4 font-serif">Be Among the First</h2>
            <p className="text-2xl text-accent font-semibold mb-2 font-serif">Smarter Mornings Start Here</p>
            <p className="text-charcoal/70 text-xl mb-12 max-w-2xl mx-auto">
              Join our exclusive waitlist for early access to RISE. Be part of the wardrobe revolution.
            </p>

            <motion.div 
              className="max-w-md mx-auto mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-ivory text-xl px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => setShowWaitlist(true)}
              >
                <ArrowRight className="mr-2 h-6 w-6" />
                Join the Waitlist Now
              </Button>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div 
                className="flex items-center gap-2 text-charcoal/70"
                whileHover={{ x: -5 }}
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                Early bird pricing
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-charcoal/70"
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                Exclusive features
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-charcoal/70"
                whileHover={{ scale: 1.1 }}
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                Shape the future of RISE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 border-t border-charcoal/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg"></div>
                <span className="text-xl font-bold text-ivory font-serif">RISE</span>
              </div>
              <p className="text-ivory/70">Your AI-powered wardrobe assistant for smarter dressing every day.</p>
            </div>

            <div>
              <h4 className="text-ivory font-semibold mb-4 font-serif">Features</h4>
              <ul className="space-y-2 text-ivory/70">
                <li>Smart Organization</li>
                <li>Weather Suggestions</li>
                <li>Outfit Tracking</li>
              </ul>
            </div>

            <div>
              <h4 className="text-ivory font-semibold mb-4 font-serif">Company</h4>
              <ul className="space-y-2 text-ivory/70">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-ivory font-semibold mb-4 font-serif">Connect</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-ivory/70 hover:text-ivory">
                  <FaTwitter className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-ivory/70 hover:text-ivory">
                  <FaInstagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-ivory/20 mt-8 pt-8 text-center text-ivory/70">
            <p>&copy; 2024 RISE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWaitlist(false)}
          >
            <motion.div
              className="bg-ivory rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal font-serif">Join the RISE Waitlist</h3>
                <button
                  onClick={() => setShowWaitlist(false)}
                  className="text-charcoal/50 hover:text-charcoal transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  <p className="text-charcoal/70 mb-6">
                    Be among the first to experience the future of wardrobe management. 
                    Get exclusive early access and special pricing.
                  </p>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-sand/30 focus:border-accent focus:outline-none mb-4"
                      required
                    />
                    
                    <Button 
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-ivory"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                  
                  <p className="text-sm text-charcoal/50 mt-4 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2 font-serif">You're on the list!</h4>
                  <p className="text-charcoal/70">
                    We'll notify you as soon as RISE is ready for you.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
