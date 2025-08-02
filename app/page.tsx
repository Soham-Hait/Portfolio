"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, GraduationCap, Code, Award, ExternalLink } from "lucide-react" // Removed Eye icon
import { downloadResumeAsPDF } from "@/utils/downloadResume" // Removed viewResumeInNewTab

export default function Portfolio() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const aboutText =
    "I'm a passionate Computer Science student with a love for building innovative solutions and exploring new technologies. From web development to cloud computing, I enjoy diving into different areas of software development and bringing ideas to life through code. I'm always excited to learn and experiment with new tools and frameworks, constantly pushing myself to grow as a developer."

  useEffect(() => {
    if (currentIndex < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + aboutText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, aboutText])

  // Auto-scroll effect for certifications
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardWidth = 216 // 192px card + 24px gap
        const totalWidth = cardWidth * certifications.length
        const newPosition = prev + 1
        return newPosition >= totalWidth ? 0 : newPosition
      })
    }, 50) // Adjust speed here (lower = faster)

    return () => clearInterval(scrollInterval)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    const sections = [heroRef, educationRef, skillsRef, projectsRef, certificationsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  const projects = [
    {
      title: "CineTix - Movie Booking Website",
      description:
        "Developed an interactive front-end using **Next.js**, **TypeScript**, and **Tailwind CSS**, enabling users to browse movies, view details, and book tickets seamlessly. Built a high-performance backend using **Node.js** and **Express**, integrating a RESTful API to handle client requests efficiently. Utilized **MongoDB** for secure storage of user data, employing **bcrypt** and **JWT-based** authentications to encrypt sensitive information such as passwords.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "JWT", "bcrypt"],
      date: "May 2025",
      githubUrl: "https://github.com/Soham-Hait/Online-Movie-Booking-System",
    },
    {
      title: "Containerized Web Hosting on Azure VM",
      description:
        "Deployed and managed a containerized web application using **Docker** and **Apache** on an **Azure Virtual Machine**, ensuring scalable and efficient hosting. Configured the **Azure VM** environment to optimize performance and leverage features such as secure networking, automated backups, and resource monitoring. Performed all setup, configuration, and deployment tasks through the command-line interface (**CLI**) of the **Azure Linux Virtual Machine**.",
      tech: ["Docker", "Apache", "MS Azure", "Linux", "VM Management"],
      date: "May 2025",
      githubUrl: "https://github.com/Soham-Hait/Containerized-Web-Hosting-on-Azure-using-Docker-and-Apache",
    },
    {
      title: "Linear Regression Models",
      description:
        "Utilized **pandas**, **numpy**, **scikit-learn**, **seaborn**, and **matplotlib** libraries within **Jupyter Notebook**, leveraging **Kaggle datasets** for comprehensive data analysis and machine learning workflows. Conducted exploratory data analysis and built machine learning models to predict house prices using key real estate features and market trends. Performed data preprocessing, visualization, and classification modeling on the **Iris dataset** to accurately predict iris flower species based on morphological characteristics.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
      date: "August 2023",
      githubUrl: "https://github.com/Soham-Hait/EDA-Projects",
    },
  ]

  const certifications = [
    {
      title: "Object-Oriented Data Structures in C++",
      issuer: "Professional Certification",
      date: "2024",
      certificateUrl: "https://drive.google.com/file/d/1veGUWg_2Ot2NZccwYsis24BUe4_iiBtt/view?usp=sharing",
    },
    {
      title: "Interactive Programming in Python",
      issuer: "Professional Certification",
      date: "2024",
      certificateUrl: "https://drive.google.com/file/d/1UTARRMI7bNfMS2dSW4dOM5qcecE4vxJ4/view?usp=sharing",
    },
    {
      title: "Introduction to DevOps",
      issuer: "Professional Certification",
      date: "2024",
      certificateUrl: "https://drive.google.com/file/d/1fVB2D0TdPZSnGCKNYi8iFQ2P3p0pVkI9/view?usp=sharing",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Professional Certification",
      date: "2024",
      certificateUrl: "https://drive.google.com/file/d/1jv7067dJA77JLqKozZFfgND_v7fCCbCa/view?usp=sharing",
    },
    {
      title: "Google Cloud Skills Boost",
      issuer: "Google Cloud",
      date: "2024",
      certificateUrl: "https://www.cloudskillsboost.google/public_profiles/e1b3e492-5192-4318-a712-94787dff54f3",
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Professional Certification",
      date: "2024",
      certificateUrl: "https://drive.google.com/file/d/1TFEAxxq-adx7KDr6C5kKDltbIJBrKop3/view?usp=drive_link",
    },
  ]

  // Function to render text with bold formatting
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section - Purple/Pink Theme */}
      <div
        ref={heroRef}
        id="hero"
        className={`container mx-auto px-6 py-16 transition-all duration-1000 ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Hi, I'm Soham Hait.
                </h1>
              </div>
              <div className="text-xl lg:text-2xl text-gray-300 min-h-[120px]">
                <p className="mb-4 text-purple-300 font-semibold">About Me</p>
                <p className="leading-relaxed">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Resume Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={downloadResumeAsPDF}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-full transition-all duration-300 group transform hover:scale-105 shadow-lg backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5 group-hover:animate-bounce text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="font-medium text-purple-200">Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image - Shifted Left */}
          <div className="flex-shrink-0 lg:-ml-8">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/IMG-20230704-WA0086.jpg" alt="Soham" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                <Code className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section - Blue Theme */}
      <div
        ref={educationRef}
        id="education"
        className={`container mx-auto px-6 py-8 transition-all duration-1000 delay-200 ${
          visibleSections.has("education") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <div className="bg-blue-900/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-white">B.Tech. Computer Science and Engineering</h3>
              <p className="text-lg text-gray-200 font-medium">Narula Institute of Technology, Kolkata</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-2 text-blue-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  CGPA: 8.22 (Current)
                </span>
                <span className="flex items-center gap-2 text-blue-200">
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  2022 - Present
                </span>
              </div>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Higher Secondary (ISC Board)</h3>
              <p className="text-lg text-gray-200 font-medium">Don Bosco School Park Circus</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-2 text-cyan-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  91.0%
                </span>
                <span className="flex items-center gap-2 text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                  2022
                </span>
              </div>
            </div>

            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Secondary (ICSE Board)</h3>
              <p className="text-lg text-gray-200 font-medium">Don Bosco School Park Circus</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-2 text-sky-300">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  95.0%
                </span>
                <span className="flex items-center gap-2 text-sky-200">
                  <span className="w-2 h-2 bg-sky-300 rounded-full"></span>
                  2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Green Theme */}
      <div
        ref={skillsRef}
        id="skills"
        className={`container mx-auto px-6 py-8 transition-all duration-1000 delay-300 ${
          visibleSections.has("skills") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="bg-green-900/20 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30">
          <div className="flex items-center gap-4 mb-6">
            <Code className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python (for ML)", "C++", "Java"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-emerald-600/30 rounded-full text-emerald-200 border border-emerald-400/40 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Computer Fundamentals</h3>
                <div className="flex flex-wrap gap-2">
                  {["Operating Systems", "Computer Networks", "OOPs", "DBMS"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 border border-green-400/40 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript (Basic)",
                    "HTML",
                    "CSS",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Next.js",
                    "GitHub",
                    "Microsoft Azure",
                    "Docker",
                    "Jupyter Notebook",
                    "Kaggle Datasets",
                    "MongoDB",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-lime-600/30 rounded-full text-lime-200 border border-lime-400/40 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Non Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {["Team Management", "Leadership", "Communication", "Team Building"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-teal-600/30 rounded-full text-teal-200 border border-teal-400/40 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section - Orange/Red Theme */}
      <div
        ref={projectsRef}
        id="projects"
        className={`container mx-auto px-6 py-8 transition-all duration-1000 delay-400 ${
          visibleSections.has("projects") ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-orange-900/20 backdrop-blur-lg rounded-3xl p-8 border border-orange-500/30">
          <div className="flex items-center gap-4 mb-8">
            <Code className="w-8 h-8 text-orange-400" />
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-red-900/20 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-orange-300">{project.date}</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed">{renderTextWithBold(project.description)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-amber-600/30 rounded-full text-sm text-amber-200 border border-amber-400/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded-full transition-colors duration-300 group text-sm"
                  >
                    <Github className="w-4 h-4 group-hover:animate-spin" />
                    <span className="font-medium">View on GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section - Yellow/Gold Theme */}
      <div
        ref={certificationsRef}
        id="certifications"
        className={`container mx-auto px-6 py-8 transition-all duration-1000 delay-500 ${
          visibleSections.has("certifications") ? "opacity-100 rotate-0" : "opacity-0 rotate-3"
        }`}
      >
        <div className="bg-yellow-900/20 backdrop-blur-lg rounded-3xl p-8 border border-yellow-500/30">
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">Certifications</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* First set of certifications */}
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-48 bg-amber-900/20 backdrop-blur-lg rounded-2xl p-4 border border-amber-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-yellow-500/30 transition-colors">
                      <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white text-center mb-2 leading-tight group-hover:text-yellow-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-yellow-300 text-center mb-1">{cert.issuer}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-yellow-200">{cert.date}</p>
                    <p className="text-xs text-amber-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </p>
                  </div>
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {certifications.map((cert, index) => (
                <a
                  key={`duplicate-${index}`}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-48 bg-amber-900/20 backdrop-blur-lg rounded-2xl p-4 border border-amber-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-yellow-500/30 transition-colors">
                      <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white text-center mb-2 leading-tight group-hover:text-yellow-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-yellow-300 text-center mb-1">{cert.issuer}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-yellow-200">{cert.date}</p>
                    <p className="text-xs text-amber-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Indigo/Violet Theme */}
      <div
        ref={contactRef}
        id="contact"
        className={`container mx-auto px-6 py-16 transition-all duration-1000 delay-600 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="bg-indigo-900/20 backdrop-blur-lg rounded-3xl p-8 border border-indigo-500/30">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">{"Let's Connect"}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:soham.hait.work@gmail.com"
              className={`flex items-center gap-3 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-full transition-all duration-500 group ${
                visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-medium">soham.hait.work@gmail.com</span>
            </a>
            <a
              href="https://github.com/Soham-Hait"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 bg-indigo-700 hover:bg-indigo-600 rounded-full transition-all duration-500 group ${
                visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <Github className="w-5 h-5 group-hover:animate-spin" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/soham-hait-8baa59268/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-500 group ${
                visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
