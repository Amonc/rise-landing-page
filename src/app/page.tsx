"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Play,
  Shirt,
  Cloud,
  Calendar,
  Camera,
  Sparkles,
  TrendingUp,
  Apple,
} from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
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
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-ivory/90 border-b border-sand/30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg"></div>
            <span className="text-xl font-bold text-charcoal font-serif">RISE</span>
          </div>
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
          <Button className="bg-accent hover:bg-accent/90 text-ivory">Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sand via-surface to-ivory pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 font-serif">
              Your AI-Powered
              <span className="text-accent block"> Wardrobe Assistant</span>
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 max-w-2xl mx-auto">
              Organize your closet, track your outfits, and get weather-smart suggestions with RISE - the intelligent way to dress better every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-ivory text-lg px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-ivory"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="flex justify-center items-end gap-8">
              <motion.img 
                src="/images/mockup-left.png" 
                alt="RISE App - Left View"
                className="w-64 h-auto relative z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.img 
                src="/images/mockup-portrait.png" 
                alt="RISE App - Main View"
                className="w-72 h-auto relative z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">Powerful Features</h2>
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
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-ivory" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4 font-serif">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </Card>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-accent via-sand to-accent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-ivory mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-ivory/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-surface">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">Ready to Transform Your Wardrobe?</h2>
          <p className="text-charcoal/70 text-xl mb-12">Download RISE today and start your journey to smarter dressing</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-charcoal text-ivory hover:bg-charcoal/90 px-8 py-4">
              <Apple className="mr-2 h-6 w-6" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-ivory px-8 py-4">
              <Play className="mr-2 h-6 w-6" />
              Get it on Google Play
            </Button>
          </div>
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
    </div>
  );
}
