"use client"

import type React from "react"
import Header from "../components/layout/Header"
import Hero from "../components/sections/Hero"
import Card from "../components/common/Card"
import Button from "../components/common/Button"
import { SAMPLE_PROPERTIES } from "../constants"

const HomePage: React.FC = () => {
  const handlePropertyClick = (id: string) => {
    console.log(`Viewing property ${id}`)
  }

  const handleWishlistToggle = (id: string) => {
    console.log(`Toggling wishlist for property ${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked by our team for exceptional experiences and outstanding value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SAMPLE_PROPERTIES.map((property) => (
              <div key={property.id} className="animate-fade-in">
                <Card
                  {...property}
                  onClick={() => handlePropertyClick(property.id)}
                  onWishlistToggle={handleWishlistToggle}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-600 mb-2">10M+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-600 mb-2">500K+</div>
              <div className="text-gray-600">Properties</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-600 mb-2">200+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent mb-4">
                ALX Listing App
              </h3>
              <p className="text-gray-400">Your gateway to extraordinary travel experiences around the world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Host
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refer Friends
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ALX Listing App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
