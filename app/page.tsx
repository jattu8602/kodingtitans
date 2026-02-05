'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LottieAnimation from '@/components/LottieAnimation'
import BentoCard from '@/components/BentoCard'
import welcomeAnimation from '@/animations/welcome.json'
import communityAnimation from '@/animations/community.json'
import collaborationAnimation from '@/animations/collaboration.json'
import thinkingAnimation from '@/animations/thinking.json'
import wellbeingAnimation from '@/animations/wellbeing.json'
import fireAnimation from '@/animations/fire.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl">🌱</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                TitanClean
              </h1>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Problem', 'Solution', 'Team', 'Tech', 'Plan'].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
            <motion.a
              href="https://titanclean.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              Visit Site <span>🚀</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block mb-4"
              >
                <span className="text-6xl">🗑️✨</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                TitanClean
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Citizen Waste Reporting & Cleanliness Reward App
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Guardians of City Cleanliness 🌍💚
                <br />
                Empowering citizens and authorities to enable timely cleanup and
                responsible waste management based on real-world conditions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#solution"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Explore Solution <span>👉</span>
                </motion.a>
                <motion.a
                  href="#problem"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  Learn More <span>📚</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <LottieAnimation
                animationData={welcomeAnimation}
                className="w-full h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">⚠️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Problem Statement
            </h2>
            <p className="text-xl text-gray-600">
              The challenges we're solving
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🚨</span>
              <div className="flex-1">
                <p className="text-lg text-gray-800 mb-4">
                  Urban cities generate <strong>~60%</strong> of total solid
                  waste, yet monitoring remains inefficient 📊
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  <strong>~40–50%</strong> waste collection struggles between
                  time, cost, and coverage ⚠️
                </p>
                <p className="text-lg text-gray-800">
                  Municipal bodies lack real-time data for <strong>~70%</strong>{' '}
                  reported waste issues 📉
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📋</span>
                <h3 className="text-2xl font-semibold text-blue-900">
                  Existing Methods or Systems
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span>•</span> Manual complaint registration 📝
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Photo-based reporting apps 📸
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Fixed-route waste collection 🚛
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Informal scrap collection (offline) 🗂️
                </li>
              </ul>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="https://s3.amazonaws.com/lms24x7/gsktestimonials/uploads/2023/01/01183255/Swachhata-App-Featured.jpg"
                  alt="Existing waste reporting app"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚫</span>
                <h3 className="text-2xl font-semibold text-orange-900">
                  Limitations and Challenges
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                These systems fail to address waste problems proactively and
                efficiently due to:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span>⏱️</span> No real-time waste monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span>🔮</span> No prediction using past data
                </li>
                <li className="flex items-center gap-2">
                  <span>👥</span> Low citizen participation (no incentives)
                </li>
                <li className="flex items-center gap-2">
                  <span>🔄</span> Repeated waste overflow at same locations
                </li>
              </ul>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="https://m.greaterkashmir.com/sortd-service/imaginary/v22-01/jpg/large/high?url=Z3JlYXRlcmthc2htaXItc29ydGQtcHJvLXByb2Qtc29ydGQvbWVkaWExNThmMWIwMC1lNGUxLTExZjAtOWY3Zi1kOTViNDVmMDFjMTYucG5n"
                  alt="Waste overflow problem"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💡</span>
              <h3 className="text-2xl font-semibold text-gray-900">Need</h3>
            </div>
            <p className="text-xl text-gray-800">
              A solution that empowers both citizens and authorities to enable
              timely cleanup and responsible waste management based on
              real-world conditions 🌍✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Features - Bento Grid */}
      <section
        id="solution"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">✨</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Proposed Solution
            </h2>
            <p className="text-xl text-gray-600">
              8 key features for smart waste management
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {[
              {
                number: '01',
                title: 'Citizen Waste Reporting',
                description:
                  'Enables citizens to capture and report waste issues using photos and live location for faster action.',
                emoji: '📸',
                span: 'col-span-1',
                animation: communityAnimation,
              },
              {
                number: '02',
                title: 'Real-Time Status Tracking',
                description:
                  'Shows live complaint status (reported, in-progress, resolved) for transparency and trust.',
                emoji: '⚡',
                span: 'col-span-1',
                animation: fireAnimation,
              },
              {
                number: '03',
                title: 'AI-Based Waste Prediction',
                description:
                  'Analyzes past cleanup data to predict waste overflow and trigger proactive cleaning.',
                emoji: '🤖',
                span: 'col-span-1',
                animation: thinkingAnimation,
              },
              {
                number: '04',
                title: 'Waste as a Resource System',
                description:
                  'Allows users to share, exchange, or sell recyclable waste through a digital platform.',
                emoji: '♻️',
                span: 'col-span-1',
                animation: wellbeingAnimation,
              },
              {
                number: '05',
                title: 'Priority-Based Cleanup Routing',
                description:
                  'Automatically prioritizes waste locations based on severity, location, and time.',
                emoji: '🎯',
                span: 'col-span-1 md:col-span-2',
                animation: collaborationAnimation,
              },
              {
                number: '06',
                title: 'Duplicate Complaint Detection',
                description:
                  'Uses AI and location matching to reduce repeated reports of the same issue.',
                emoji: '🔍',
                span: 'col-span-1',
                animation: thinkingAnimation,
              },
              {
                number: '07',
                title: 'Citizen Reward System',
                description:
                  'Rewards users with points for valid reports and responsible waste contributions.',
                emoji: '🎁',
                span: 'col-span-1',
                animation: wellbeingAnimation,
              },
              {
                number: '08',
                title: 'Municipal & NGO Dashboard',
                description:
                  'Provides authorities and partners with analytics, heatmaps, and performance insights.',
                emoji: '📊',
                span: 'col-span-1',
                animation: communityAnimation,
              },
            ].map((feature, index) => (
              <BentoCard
                key={index}
                span={feature.span as any}
                delay={index * 0.1}
                emoji={feature.emoji}
                className="group"
              >
                <div className="h-full flex flex-col">
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {feature.number}
                  </div>
                  <div className="mb-3 h-32 flex items-center justify-center">
                    <LottieAnimation
                      animationData={feature.animation}
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      speed={0.8}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {feature.description}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">👥</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-xl text-gray-600">Koding Titans 🚀</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'NITESH',
                college: 'LNCT',
                role: 'Leader : AI & ML',
                emoji: '🧠',
              },
              {
                name: 'RAMANAND',
                college: 'SRIT',
                role: 'App Developer',
                emoji: '📱',
              },
              {
                name: 'SHASHANK',
                college: 'LNCT',
                role: 'Full Stack Developer',
                emoji: '💻',
              },
              {
                name: 'MAITRI',
                college: 'LNCT',
                role: 'Designer',
                emoji: '🎨',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                >
                  {member.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.college}</p>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach Section */}
      <section
        id="tech"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">⚙️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Chosen Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Tools, platforms, and frameworks 🛠️
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Mobile App',
                tech: 'Flutter',
                emoji: '📱',
                desc: 'Cross-platform mobile application development.',
              },
              {
                category: 'Web Dashboard',
                tech: 'Next.js',
                emoji: '🌐',
                desc: 'Web dashboard for authorities and analytics.',
              },
              {
                category: 'Notifications',
                tech: 'Firebase (FCM)',
                emoji: '🔔',
                desc: 'Real-time notifications and alerts.',
              },
              {
                category: 'Database',
                tech: 'MongoDB',
                emoji: '🗄️',
                desc: 'NoSQL database for scalable waste data.',
              },
              {
                category: 'ORM',
                tech: 'Prisma ORM',
                emoji: '📋',
                desc: 'Type-safe database schema management.',
              },
              {
                category: 'AI/ML',
                tech: 'AI / ML Models',
                emoji: '🤖',
                desc: 'Waste prediction and image classification.',
              },
              {
                category: 'Maps',
                tech: 'Google Maps API',
                emoji: '🗺️',
                desc: 'Location tracking, routing, and heatmaps.',
              },
              {
                category: 'Storage',
                tech: 'Cloud Storage',
                emoji: '☁️',
                desc: 'Secure storage for images and data.',
              },
              {
                category: 'Version Control',
                tech: 'Git & GitHub',
                emoji: '📦',
                desc: 'Version control and team collaboration.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <div className="text-sm text-gray-500">{item.category}</div>
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {item.tech}
                </div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feasibility & Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">📈</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Feasibility and Impact
            </h2>
            <p className="text-xl text-gray-600">
              Why TitanClean works and its benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Practical Feasibility
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Uses existing mobile infrastructure</li>
                <li>• Integrates with municipal workflows</li>
                <li>• Built with proven technologies</li>
                <li>• City-wise deployment ready</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Expected Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster waste cleanup</li>
                <li>• Higher citizen participation</li>
                <li>• Reduced health risks</li>
                <li>• Better recycling rates</li>
                <li>• Improved accountability</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Scalability
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wards → Cities → States</li>
                <li>• Cloud-based architecture</li>
                <li>• AI improves with data</li>
                <li>• Long-term sustainability</li>
                <li>• NGO integration ready</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">🗺️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Implementation Plan
            </h2>
            <p className="text-xl text-gray-600">
              Development approach, timeline, and future scope 🎯
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'MVP Development',
                description:
                  'Build the core mobile app with waste reporting, photo upload, and location tagging to validate the concept quickly.',
                emoji: '🚀',
              },
              {
                step: '2',
                title: 'Backend & Data Integration',
                description:
                  'Set up backend services with MongoDB, APIs, and cloud storage to manage reports, users, and waste data securely.',
                emoji: '🔧',
              },
              {
                step: '3',
                title: 'AI & Prediction Module',
                description:
                  'Develop AI models to detect duplicate complaints and predict waste overflow using historical cleanup data.',
                emoji: '🧠',
              },
              {
                step: '4',
                title: 'Notifications & Rewards System',
                description:
                  'Integrate real-time notifications and a reward mechanism to encourage active citizen participation.',
                emoji: '🎁',
              },
              {
                step: '5',
                title: 'Pilot Deployment & Scaling',
                description:
                  'Launch a pilot in selected areas, collect feedback, optimize performance, and prepare for city-wide expansion.',
                emoji: '🌍',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {phase.step}
                  </div>
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{phase.emoji}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔮</span>
              <h3 className="text-3xl font-semibold text-gray-900">
                Future Scope
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'IoT-enabled smart bins',
                'Advanced AI forecasting models',
                'Government & NGO partnerships',
                'City-wide analytics dashboards',
                'Carbon footprint tracking',
                'CSR & sustainability programs',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/60 p-4 rounded-lg flex items-center gap-2"
                >
                  <span>✨</span>
                  <span className="text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <span>🌱</span> TitanClean
            </h3>
            <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
              <span>🏙️</span> Smart City | Civic Technology | Environmental
              Management
            </p>
            <p className="text-gray-500 text-sm mb-4 italic">
              "TitanClean doesn't just report waste — it predicts it, values it,
              and rewards citizens for managing it."
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://titanclean.in"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <span>🌐</span> titanclean.in
              </a>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>©</span> 2026 Koding Titans. Empowering citizens for a
              cleaner future. <span>💚</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
