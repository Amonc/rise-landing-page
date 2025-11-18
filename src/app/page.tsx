"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import {
  Shirt,
  Calendar,
  Camera,
  Sparkles,
  TrendingUp,
  Brain,
  Clock,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const features = [
    {
      icon: Camera,
      title: "Barcode Scanning",
      description: "Just scan the tag — RISE instantly adds it with brand, color, and style.",
      image: "/images/core-features/barcode-scan.png",
    },
    /* {
      icon: Zap,
      title: "Receipt Importing",
      description: "Upload receipts or email confirmations — your new items appear in your closet automatically.",
      image: "/images/core-features/receipt-import.png",
    }, */
    {
      icon: Sparkles,
      title: "AI Outfit Suggestions",
      description: "Get full outfits based on weather, occasion, and your style.",
      image: "/images/core-features/weather-match.png",
    },
    {
      icon: Shield,
      title: "Closet Type Onboarding",
      description: "Choose Masculine or Feminine closet, answer a quick survey, and start organized instantly.",
      image: "/images/core-features/masculine-feminine.png",
    },
    {
      icon: TrendingUp,
      title: "Color-Smart Styling",
      description: "RISE only suggests outfits that work together — no clashing colors, no bad fits.",
      image: "/images/core-features/color-match.png",
    },
    {
      icon: Calendar,
      title: "Worn Tracker",
      description: "Keep track of what you've worn, so you never repeat too soon.",
      image: "/images/core-features/worn-tracker.png",
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
      title: "Build Your Closet",
      description: "Build your closet with barcode scans, photos, or receipt imports.",
      icon: Camera,
    },
    {
      step: "02",
      title: "Get Outfit Suggestions",
      description: "Get outfit suggestions tailored to weather, events, and your closet.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Track & Evolve",
      description: "Track worn history and evolve your style.",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { number: "2 hrs", label: "Saved Weekly" },
    { number: "30 sec", label: "To Perfect Outfit" },
    { number: "100%", label: "Weather Matched" },
    { number: "Zero", label: "Fashion Mistakes" },
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-ivory/80 border-b border-sand/30">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.img 
              src="/images/icon.png"
              alt="RISE Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ 
                scale: { duration: 0.5 },
                rotate: { duration: 0.8, ease: "easeOut" }
              }}
            />
            <span className="text-xl sm:text-2xl font-bold text-charcoal font-serif">RISE</span>
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
            className="bg-accent hover:bg-accent/90 text-ivory shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Beta
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-sand via-surface to-ivory pt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                className="text-accent font-semibold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 font-serif"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Smarter Mornings Start Here
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 md:mb-6 font-serif leading-tight">
                Your Closet&apos;s
                <span className="text-accent block"> New Brain</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/70 mb-6 md:mb-8 max-w-4xl leading-relaxed mx-auto lg:mx-0">
                The only wardrobe app that truly understands your style. Organize, track, and get personalized outfit suggestions powered by cutting-edge AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-auto">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-ivory text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Sparkles className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                    Download Beta Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-auto">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-ivory text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300"
                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Watch RISE in Action
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0"
            >
              {/* Mockup container with exact dimensions */}
              <div className="relative w-64 sm:w-72 md:w-64 lg:w-56 xl:w-64">
                <motion.img 
                  src="/images/mockup-portrait.png" 
                  alt="RISE App Interface"
                  className="w-full relative z-10 drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Decorative background accent */}
                <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-150 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points & Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 sm:mb-12 md:mb-16 font-serif leading-tight">
              Why Your Mornings Feel Harder Than They Should
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Stats */}
            <div className="space-y-12">
              {/* Time spent deciding stat */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-8 group">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#F5EFE1"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#E44646"
                        strokeWidth="8"
                        strokeDasharray={`${(17/60) * 226} 226`}
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-error" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <motion.p 
                      className="text-4xl sm:text-5xl font-bold text-error mb-2 sm:mb-3 font-serif"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      17
                    </motion.p>
                    <p className="text-charcoal/80 text-xl leading-relaxed">
                      minutes wasted every morning, deciding what to wear
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Wardrobe actually worn stat */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="flex items-center gap-8 group">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#F5EFE1"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#E44646"
                        strokeWidth="8"
                        strokeDasharray={`${0.2 * 226} 226`}
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shirt className="h-8 w-8 text-error" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <motion.p 
                      className="text-4xl sm:text-5xl font-bold text-error mb-2 sm:mb-3 font-serif"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      20%
                    </motion.p>
                    <p className="text-charcoal/80 text-xl leading-relaxed">
                      of wardrobe is actually worn - money wasted on the rest
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Money spent on clothes stat */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-center gap-8 group">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#F5EFE1"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="36"
                        fill="none"
                        stroke="#E44646"
                        strokeWidth="8"
                        strokeDasharray={`${(1800/2000) * 226} 226`}
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-error" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <motion.p 
                      className="text-4xl sm:text-5xl font-bold text-error mb-2 sm:mb-3 font-serif"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      $1,800
                    </motion.p>
                    <p className="text-charcoal/80 text-xl leading-relaxed">
                      The average person spends ~$1,800 a year on new clothes — and still feels like they have nothing to wear
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Split screen visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/split-sad-person.jpeg"
                  alt="Split screen showing the struggle of choosing outfits vs organized wardrobe with RISE"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                {/* Overlay gradient for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Closing Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent font-serif text-center leading-relaxed">
              RISE fixes this in seconds — turning your closet into a smart, personal stylist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">Core Features</h2>
            <p className="text-charcoal/70 text-xl">Visual blocks showcasing RISE&apos;s powerful capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="scale-95"
                >
                  <div className="overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-lg h-full">
                  {/* Square image with text overlay */}
                  <div className="relative aspect-square">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Icon overlay */}
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-ivory/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    
                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/80 to-transparent p-6 pt-12">
                      <h3 className="text-xl font-bold text-ivory mb-2 font-serif">
                        {feature.title}
                      </h3>
                      <p className="text-ivory/90 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/95">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ivory mb-4 font-serif">Why RISE is Different</h2>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">How RISE Works</h2>
            <p className="text-charcoal/70 text-xl">3 simple steps to transform your wardrobe experience</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Connecting line (hidden on mobile, visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-accent to-transparent -z-10" />
                )}
                
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated background circle */}
                  <motion.div 
                    className="absolute inset-0 w-24 h-24 mx-auto bg-accent/20 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  {/* Main icon circle */}
                  <div className="relative w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    {index === 0 && (
                      // Camera scanning animation for Build Your Closet
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Camera className="h-12 w-12 text-ivory" />
                        <motion.div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-ivory/50"
                          animate={{ 
                            scaleX: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    )}
                    {index === 1 && (
                      // Sparkles floating animation for Get Outfit Suggestions
                      <div className="relative">
                        <Sparkles className="h-12 w-12 text-ivory relative z-10" />
                        <motion.div
                          className="absolute -top-2 -right-2"
                          animate={{ 
                            y: [-10, -20, -10],
                            x: [0, 5, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: 0
                          }}
                        >
                          <Star className="h-4 w-4 text-ivory fill-ivory" />
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-2 -left-2"
                          animate={{ 
                            y: [10, 20, 10],
                            x: [0, -5, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        >
                          <Star className="h-3 w-3 text-ivory fill-ivory" />
                        </motion.div>
                        <motion.div
                          className="absolute top-0 left-0"
                          animate={{ 
                            y: [-5, -15, -5],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: 1
                          }}
                        >
                          <Star className="h-3 w-3 text-ivory fill-ivory" />
                        </motion.div>
                      </div>
                    )}
                    {index === 2 && (
                      // Growing chart animation for Track & Evolve
                      <div className="relative w-12 h-12">
                        <TrendingUp className="h-12 w-12 text-ivory absolute inset-0" />
                        <motion.svg
                          className="absolute inset-0 w-12 h-12"
                          viewBox="0 0 48 48"
                        >
                          <motion.path
                            d="M8 32 L16 24 L24 28 L40 12"
                            fill="none"
                            stroke="rgba(251, 244, 225, 0.5)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.circle
                            cx="40"
                            cy="12"
                            r="3"
                            fill="rgba(251, 244, 225, 0.8)"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Step number */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-10 h-10 bg-sand rounded-full flex items-center justify-center text-sm font-bold text-charcoal shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.3 }}
                  >
                    {step.step}
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-serif">{step.title}</h3>
                  <p className="text-charcoal/70 text-lg max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animation */}
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
                  className="text-3xl sm:text-4xl font-bold text-ivory mb-1 sm:mb-2 font-serif"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-ivory/90 text-base sm:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle / Social Proof Section */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">Loved by Early Adopters</h2>
            <p className="text-charcoal/70 text-xl">Join thousands who are already transforming their mornings</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Lifestyle Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-xl mx-auto">
                <Image
                  src="/images/outfits-hanger.png"
                  alt="Stylish outfits on hangers curated by RISE - showcasing perfectly coordinated looks"
                  width={600}
                  height={750}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
                
                {/* "Suggested by RISE" overlay */}
                <motion.div
                  className="absolute bottom-6 left-6 bg-charcoal/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-ivory font-semibold">Suggested by RISE</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Testimonials and Metrics */}
            <div className="space-y-8">
              {/* Testimonial quotes */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-lg border border-sand/20"
              >
                <div className="flex items-start gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-lg italic mb-4">
                  &quot;RISE completely changed my morning routine. I save so much time and actually feel confident in what I wear every day.&quot;
                </p>
                <p className="text-charcoal font-semibold">— Sarah K., Beta User</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-surface p-8 rounded-2xl shadow-lg border border-sand/20"
              >
                <div className="flex items-start gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-lg italic mb-4">
                  &quot;The AI suggestions are spot-on. It&apos;s like having a personal stylist who knows my closet better than I do.&quot;
                </p>
                <p className="text-charcoal font-semibold">— Michael R., Early Adopter</p>
              </motion.div>

              {/* Credibility metric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center bg-gradient-to-r from-accent to-sand rounded-2xl p-8"
              >
                <motion.p 
                  className="text-4xl sm:text-5xl font-bold text-ivory mb-2 font-serif"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  50K+
                </motion.p>
                <p className="text-ivory/90 text-lg sm:text-xl font-semibold">Beta Testers</p>
                <p className="text-ivory/80 mt-2">Join now and help shape RISE</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Waitlist CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sand/20 to-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Main CTA */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-ivory text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold mb-6"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-3 h-6 w-6" />
                Get Beta Access
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>

            {/* Social Proof Line */}
            <motion.p
              className="text-2xl text-charcoal/80 font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join <span className="text-accent font-bold">2K+</span> already testing RISE
            </motion.p>

            {/* Supporting Line */}
            <motion.p
              className="text-lg text-charcoal/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Beta now available on TestFlight
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Waitlist Signup Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Headlines */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-ivory mb-4 font-serif">
                Start Using RISE Today
              </h2>
              <p className="text-xl md:text-2xl text-ivory/80">
                Join the beta and get instant access via TestFlight. Help shape the future of RISE!
              </p>
            </div>

            {/* Inline Signup Form */}
            <motion.form 
              className="bg-ivory/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-ivory/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                
                try {
                  const response = await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email,
                      firstName,
                      lastName,
                    }),
                  });

                  const data = await response.json();
                  
                  if (response.ok) {
                    setIsSubmitted(true);
                    setAlreadyExists(data.alreadyExists || false);
                  } else {
                    alert(data.error || 'Something went wrong. Please try again.');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  alert('Failed to join waitlist. Please try again.');
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              {!isSubmitted ? (
                <>
                  <div className="space-y-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-ivory/80 mb-2 font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-5 py-4 rounded-lg bg-ivory/20 border border-ivory/30 text-ivory placeholder-ivory/50 focus:border-accent focus:bg-ivory/25 focus:outline-none transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-ivory/80 mb-2 font-medium">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-5 py-4 rounded-lg bg-ivory/20 border border-ivory/30 text-ivory placeholder-ivory/50 focus:border-accent focus:bg-ivory/25 focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-ivory/80 mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-lg bg-ivory/20 border border-ivory/30 text-ivory placeholder-ivory/50 focus:border-accent focus:bg-ivory/25 focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-accent hover:bg-accent/90 text-ivory text-xl py-6 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold disabled:opacity-50"
                    >
                      {isLoading ? "Joining..." : "Join Now"}
                      {!isLoading && <ArrowRight className="ml-2 h-6 w-6" />}
                    </Button>
                  </motion.div>

                  {/* Incentive line */}
                  <p className="text-center text-ivory/70 mt-6 text-lg">
                    ✨ Beta testers get exclusive early features + insider perks
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {alreadyExists ? (
                      <Shield className="h-20 w-20 text-accent mx-auto mb-6" />
                    ) : (
                      <CheckCircle className="h-20 w-20 text-accent mx-auto mb-6" />
                    )}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-ivory mb-3 font-serif">
                    {alreadyExists ? "You're Already In!" : "Welcome to RISE Beta!"}
                  </h3>
                  <p className="text-ivory/80 text-lg">
                    {alreadyExists
                      ? "Great news! You're already signed up for the beta."
                      : "Check your email for TestFlight download links and get started now!"
                    }
                  </p>
                  <p className="text-accent mt-4 text-lg font-semibold">
                    {alreadyExists
                      ? "Check your inbox for TestFlight download links!"
                      : "Download the app and start organizing your wardrobe!"
                    }
                  </p>
                  {alreadyExists && (
                    <motion.button
                      onClick={() => {
                        setIsSubmitted(false);
                        setAlreadyExists(false);
                        setEmail("");
                        setFirstName("");
                        setLastName("");
                      }}
                      className="mt-6 text-ivory/60 underline hover:text-ivory/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try with a different email
                    </motion.button>
                  )}
                </motion.div>
              )}
            </motion.form>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center items-center mt-10">
              <motion.div 
                className="flex items-center gap-2 text-ivory/70"
                whileHover={{ x: -5 }}
              >
                <Shield className="h-5 w-5 text-accent" />
                100% Privacy Protected
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-ivory/70"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-5 w-5 text-accent" />
                No Spam, Ever
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-ivory/70"
                whileHover={{ x: 5 }}
              >
                <Star className="h-5 w-5 text-accent" />
                Instant Beta Access
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/images/icon.png"
                  alt="RISE Logo"
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-bold text-ivory font-serif">RISE</span>
              </div>
              <p className="text-ivory/70 mb-6 max-w-md">
                Your closet&apos;s new brain. Get personalized outfit suggestions based on weather, occasions, and your style.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center text-ivory/70 hover:bg-accent hover:text-ivory transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center text-ivory/70 hover:bg-accent hover:text-ivory transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-ivory font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-ivory/70 hover:text-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-ivory/70 hover:text-accent transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-ivory/70 hover:text-accent transition-colors">
                    Join Beta
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-ivory font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-ivory/70 hover:text-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ivory/70 hover:text-accent transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ivory/70 hover:text-accent transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-ivory/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-ivory/60 text-sm">
                &copy; 2025 RISE. All rights reserved.
              </p>
              <p className="text-ivory/60 text-sm">
                Made with ❤️ for smarter mornings
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
