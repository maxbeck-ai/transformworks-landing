'use client'

import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Your Team Should Be Evaluating Deals, Not Formatting Data</h1>
            <p className="text-xl mb-8">We handle the tedious data prep and analysis work, so your investment professionals can focus on what they do best: making investment decisions.</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                View Sample Analysis
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sound Familiar?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Investment teams spend countless hours on basic data preparation and analysis - time that could be spent on strategic decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hours Wasted on Data Prep",
                description: "Your analysts spend 70% of their time cleaning data and creating basic visualizations instead of analyzing opportunities"
              },
              {
                title: "Inconsistent Analysis",
                description: "Different team members use different approaches, making it hard to compare opportunities effectively"
              },
              {
                title: "Delayed Decisions",
                description: "Basic data preparation bottlenecks hold up your entire investment process"
              }
            ].map((pain, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">The Solution: Outsource the Grunt Work</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We handle all initial data analysis and formatting, delivering investment-grade insights so you can focus on making decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Before Transformworks</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  70% time spent on data preparation
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Analysts buried in Excel formatting
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Delayed investment decisions
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">With Transformworks</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Receive ready-to-use analysis packages
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Focus on strategic assessment
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Make faster investment decisions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Analysis Services</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Standardized, investment-grade outputs delivered in your preferred format
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Analysis",
                features: ["Retention & cohort analysis", "Customer lifetime value", "Churn risk assessment"],
                timeframe: "24-48 hour delivery"
              },
              {
                title: "Financial Analysis",
                features: ["Revenue segmentation", "Margin breakdown", "Growth trajectory modeling"],
                timeframe: "24-48 hour delivery"
              },
              {
                title: "Operational Metrics",
                features: ["Unit economics", "Efficiency metrics", "KPI dashboards"],
                timeframe: "24-48 hour delivery"
              },
              {
                title: "Custom Analysis",
                features: ["Industry-specific metrics", "Scenario modeling", "Bespoke visualizations"],
                timeframe: "48-72 hour delivery"
              },
              {
                title: "Full Data Room Service",
                features: ["Complete data inventory", "Initial analysis package", "Red flag identification"],
                timeframe: "72 hour delivery",
                waitlist: true
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                {service.waitlist && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                    Waitlist
                  </span>
                )}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500">
                  {service.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "90%",
                description: "Time saved on initial data analysis"
              },
              {
                number: "50%",
                description: "Cost reduction vs. traditional analyst hours"
              },
              {
                number: "2x",
                description: "More deals evaluated per month"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Focus on What Matters?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop wasting time on data prep. Start making faster, better-informed investment decisions.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              View Sample Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Transformworks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
