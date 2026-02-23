/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Server, 
  Terminal,
  ChevronRight,
  Download
} from 'lucide-react';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-10">
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-slate-900 mb-1"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xs font-semibold uppercase tracking-wider text-indigo-600"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ExperienceCard = ({ role, company, period, sections, side, icon: Icon, image, color }: any) => {
  const card = (
    <motion.div 
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-slate-100 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 w-full"
    >
      <div className="mb-6">
        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">{role}</h3>
        <p className="text-slate-400 font-medium text-sm lg:text-base">{company}</p>
      </div>
      {image && (
        <div className="mb-6 rounded-2xl overflow-hidden border border-slate-100">
          <img src={image} alt={role} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
      )}
      <div className="space-y-6">
        {sections.map((section: any, i: number) => (
          <div key={i} className="group">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{section.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">{section.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const dateLabel = (
    <span 
      className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border shadow-sm bg-white inline-block"
      style={{ color: color || '#94a3b8', borderColor: color ? `${color}40` : '#f1f5f9' }}
    >
      {period}
    </span>
  );

  return (
    <div className="flex w-full mb-12 lg:mb-24 relative flex-col lg:flex-row items-start justify-between">
      {/* Node (Desktop) */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center shadow-sm hidden lg:flex"
        style={{ borderColor: color || '#e2e8f0' }}
      >
        {Icon ? <Icon size={18} style={{ color: color || '#6366f1' }} /> : <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color || '#6366f1' }} />}
      </div>

      {/* Left Side (Desktop) */}
      <div className={`hidden lg:flex w-[45%] items-start ${side === 'left' ? 'justify-end' : 'justify-end pr-16 pt-2'}`}>
        {side === 'left' ? card : dateLabel}
      </div>

      {/* Right Side (Desktop) */}
      <div className={`hidden lg:flex w-[45%] items-start ${side === 'right' ? 'justify-start' : 'justify-start pl-16 pt-2'}`}>
        {side === 'right' ? card : dateLabel}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full pl-12 relative">
        <div 
          className="absolute left-0 top-0 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center shadow-sm"
          style={{ borderColor: color || '#e2e8f0' }}
        >
          {Icon ? <Icon size={14} style={{ color: color || '#6366f1' }} /> : <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color || '#6366f1' }} />}
        </div>
        <div className="mb-4">
          {dateLabel}
        </div>
        {card}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, period, image, categoryTag }: any) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4">
        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded uppercase tracking-wider">
          {categoryTag}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [filter, setFilter] = React.useState('All');

  const projects = [
    {
      title: "2-Player Maze Game",
      description: "A PACMAN-style multiplayer game incorporating real-time UDP network communication for synchronization. Features dynamic collision detection and random maze generation.",
      tags: ["UDP Networking", "Game Physics"],
      categoryTag: "C++ & SFML",
      category: "Game Dev",
      image: "https://picsum.photos/seed/maze/600/400"
    },
    {
      title: "Scalable Music Architecture",
      description: "Spotify-like backend handling unstructured audio data via BLOB storage. Features a robust RESTful API and optimized SQL schema for high-performance retrieval.",
      tags: ["REST API", "SQL Optimization"],
      categoryTag: "Python & BLOB",
      category: "Backend/Cloud",
      image: "https://picsum.photos/seed/music/600/400"
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Real-time detection system using facial landmark recognition to calculate Eye Aspect Ratio. Triggers buzzers upon identifying sustained eyelid closure.",
      tags: ["Computer Vision", "Real-time"],
      categoryTag: "OpenCV & AI",
      category: "AI / CV",
      image: "https://picsum.photos/seed/driver/600/400"
    },
    {
      title: "Autonomous Taxi Optimization",
      description: "Modeled taxi domain as a Markov Decision Process. Implemented Value/Policy Iteration, Q-learning, and Sarsa to learn optimal passenger pickup/drop-off policies.",
      tags: ["Reinforcement Learning", "MDP"],
      categoryTag: "Reinforcement Learning",
      category: "AI / CV",
      image: "https://picsum.photos/seed/taxi/600/400"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">VK</div>
            <span className="text-lg font-bold tracking-tighter text-slate-900">Varshitha Kalluri</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a 
              href="mailto:varshithareddykalluri@gmail.com" 
              className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-all text-[10px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-6 bg-white scroll-mt-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium mb-8 border border-indigo-100">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  Open to Opportunities
                </div>

                <h2 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Varshitha</span>
                </h2>

                <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-8">
                  I am a <span className="text-slate-900">CS Graduate @ IIT Delhi</span>
                </p>

                <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-xl">
                  A passionate Backend Engineer with expertise in building scalable systems, cloud infrastructure, and AI-driven solutions. Currently optimizing global operations at Air India.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <Code2 size={18} />
                    HackerRank Profile
                  </a>
                  <a 
                    href="mailto:varshithareddykalluri@gmail.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <Mail size={18} />
                    Email Me
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100">
                  <div>
                    <p className="text-3xl font-bold text-slate-900 mb-1">CS</p>
                    <p className="text-xs text-slate-400 font-medium">MTech & BTech</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 mb-1">IIT</p>
                    <p className="text-xs text-slate-400 font-medium">Delhi Graduate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 mb-1">2+</p>
                    <p className="text-xs text-slate-400 font-medium">Years Exp</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image with Floating Badges */}
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img 
                    src="/image.jpeg" 
                    alt="Varshitha Kalluri" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                    onError={(e) => {
                      // Fallback if the image fails to load
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/varshitha-professional/800/1000";
                    }}
                  />
                </div>

                {/* Floating Badge 1: Cloud */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -left-12 top-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Server size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cloud Expert</p>
                    <p className="text-sm font-bold text-slate-900">Azure & AWS</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Database */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-8 bottom-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Database size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Database</p>
                    <p className="text-sm font-bold text-slate-900">MongoDB / SQL</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white overflow-hidden scroll-mt-16">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600 mb-4">CAREER PATH</p>
            <h2 className="text-4xl font-bold text-slate-900">Professional Experience</h2>
          </div>

          {/* Continuous Central Line */}
          <div className="absolute left-1/2 top-48 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden lg:block" />
          <div className="absolute left-6 top-48 bottom-0 w-px bg-slate-100 lg:hidden" />

          <div className="relative z-10">
            <ExperienceCard 
              side="right"
              role="Backend Engineer"
              company="Air India Limited"
              period="Nov 2024 — Present"
              icon={Server}
              color="#ef4444"
              sections={[
                {
                  title: "BAGGAGE CONTROL",
                  content: "Streamlined ground operations by designing a robust data synchronization pipeline using Spring Scheduler and SOAP APIs. Enabled instant PIR generation and ensured data integrity for high-volume data via concurrency management."
                },
                {
                  title: "LEAVE & WORK MANAGEMENT",
                  content: "Built a system linking employee leaves with facial recognition (30% efficiency boost). Architected a resilient pipeline using MongoDB, Azure Service Bus, and Kafka for real-time alerts."
                },
                {
                  title: "WORKPLACE",
                  content: "Engineered a unified Elasticsearch layer for a social enterprise platform, increasing user interactions by 70%."
                }
              ]}
            />

            <ExperienceCard 
              side="left"
              role="Software Developer"
              company="Roadcast"
              period="May 2023 — July 2024"
              icon={Cpu}
              color="#3b82f6"
              sections={[
                {
                  title: "LOGISTICS & FLEET TECH",
                  content: "Engineered an AI-powered chatbot using Pinecone, LangChain, and OpenAI to analyze information from multiple data sources for complex queries."
                },
                {
                  title: "DASHBOARD",
                  content: "Deployed an interactive dashboard using Angular to visualize analysis results, significantly reducing analysis time and improving decision-making efficiency."
                }
              ]}
            />

            <ExperienceCard 
              side="right"
              role="5G Security Research"
              company="Authentication Relay Attack"
              period="Research"
              icon={Terminal}
              color="#a855f7"
              image="https://picsum.photos/seed/security/800/400"
              sections={[
                {
                  title: "NETWORK SIMULATION",
                  content: "Implemented relay attack on 5G network simulator Open5GS using malicious UE and Fake base-station."
                },
                {
                  title: "THREAT ANALYSIS",
                  content: "Demonstrated critical threats including location tracking and Denial of Service (DoS) by bypassing network controls."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600 mb-4">Portfolio</p>
              <h2 className="text-4xl font-bold text-slate-900">Key Projects</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['All', 'Backend/Cloud', 'AI / CV', 'Game Dev'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    filter === cat 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Technical">Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Java</li>
                <li>Python</li>
                <li>C/C++</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Databases</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Backend</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Spring Boot</li>
                <li>Kafka</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">AI</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>LangChain</li>
                <li>OpenAI</li>
                <li>OpenCV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            © 2026 Varshitha Kalluri
          </p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/varshitha-reddy-6315091a0" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
