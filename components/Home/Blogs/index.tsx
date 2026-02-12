"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  drift: number
  rotation: number
  glowIntensity: number
}

const blogData = [
  {
    id: 1,
    image: "/image/card.png",
    title: "AI-Powered Customer Support in the Government Sector: Enhancing...",
    description: "Artificial intelligence is transforming government services by enhancing ci...",
    author: {
      name: "Charles Fields",
      avatar: "/image/charles.jpg",
      link: "/authors/charles-fields",
    },
    date: "May 07, 2025",
  },
  {
    id: 2,
    image: "/image/card.png",
    title: "AI-Powered Customer Support in the Hospitality Industry: Elevating Guest...",
    description: "Artificial intelligence is revolutionizing the hospitality industry by enha...",
    author: {
      name: "Megan Pierce",
      avatar: "/image/megan.jpg",
      link: "/authors/megan-pierce",
    },
    date: "May 04, 2025",
  },
  {
    id: 3,
    image: "/image/card.png",
    title: "AI-Powered Customer Support in the Sports Industry: Enhancing Fan...",
    description: "Artificial intelligence is revolutionizing the sports industry by enhancing...",
    author: {
      name: "Charles Fields",
      avatar: "/image/charles.jpg",
      link: "/authors/charles-fields",
    },
    date: "May 01, 2025",
  },
]

export default function BlogSection() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate 3-5 dots at once for more dynamic effect
      const newDots: Dot[] = []
      const dotCount = Math.floor(Math.random() * 3) + 3

      for (let i = 0; i < dotCount; i++) {
        const newDot: Dot = {
          id: Date.now() + Math.random() + i,
          x: Math.random() * 100,
          y: 110, // Start slightly below screen
          size: Math.random() * 6 + 1, // 1-7px
          opacity: Math.random() * 0.8 + 0.3,
          speed: Math.random() * 1.5 + 0.8, // Slower, more graceful movement
          drift: (Math.random() - 0.5) * 0.5, // Horizontal drift
          rotation: Math.random() * 360,
          glowIntensity: Math.random() * 0.5 + 0.3,
        }
        newDots.push(newDot)
      }

      setDots((prevDots) => {
        const filteredDots = prevDots.filter((dot) => dot.y > -20 && dot.opacity > 0.05)
        return [...filteredDots, ...newDots]
      })
    }, 800) // Generate every 800ms

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          const newY = dot.y - dot.speed
          const newX = dot.x + dot.drift
          const newOpacity = newY < 50 ? dot.opacity * 0.98 : dot.opacity // Fade out near top
          const newRotation = dot.rotation + 1

          return {
            ...dot,
            y: newY,
            x: newX,
            opacity: newOpacity,
            rotation: newRotation,
          }
        }),
      )
    }, 60) // Smooth 60fps animation

    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Button className="text-blue-400 hover:text-blue-300 bg-blue-950/50 rounded-full mb-4 p-2">
            Read our latest blogs
          </Button>

          <h1 className="text-xl md:text-3xl font-bold text-white pt-5">Latest blogs & articles</h1>

          <p className="text-slate-300 text-lg max-w-3xl pt-3 mx-auto">
            We write about the latest trends in the tech industry, our journey, and the latest updates from our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogData.map((blog) => (
            <Card
              key={blog.id}
              className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative cursor-pointer overflow-hidden" onClick={() => {}}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-44 object-cover transition-all duration-300 ease-out hover:scale-110 hover:translate-z-10 hover:shadow-2xl active:scale-105 active:translate-y-1"
                  style={{
                    transform: "perspective(1000px)",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
              </div>

              <CardContent className="p-5">
                <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2">{blog.title}</h3>

                <p className="text-slate-300 text-sm mb-6 line-clamp-3">{blog.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={blog.author.avatar || "/placeholder.svg"}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <Link
                      href={blog.author.link}
                      className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {blog.author.name}
                    </Link>
                  </div>

                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="rgba(255,255,255,0.05)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 85%, 85% 95%, 15% 100%, 5% 85%, 0 15%)",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full transition-all duration-75 ease-out"
              style={{
                left: `${Math.max(0, Math.min(100, dot.x))}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                opacity: dot.opacity,
                transform: `translate(-50%, -50%) rotate(${dot.rotation}deg)`,
                background: `radial-gradient(circle, rgba(255,255,255,${dot.opacity}) 0%, rgba(255,255,255,${dot.opacity * 0.3}) 70%, transparent 100%)`,
                boxShadow: `0 0 ${dot.glowIntensity * 10}px rgba(255,255,255,${dot.opacity * 0.5})`,
                filter: `blur(${dot.size > 4 ? 0.5 : 0}px)`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-6  flex flex-col justify-center items-center text-center">
          <Button className="text-blue-400 hover:text-blue-300 mb-8 ">
            Use Cerebriq for free
          </Button>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-4xl">
            What are you waiting for?
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
            Help your users help themselves - with an automated customer experience. You can get started with Aidbase
            for free, no credit card required.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-20"
          >
            {"Let's go!"}
          </Button>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/35 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>
         <div className="relative pt-14 mb-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Weekly AI newsletter</h2>
                <p className="text-slate-400 md:text-base text-sm">Get news and updates about AI, No Code, and Cerebriq.</p>
              </div>
              <div className="flex-1 max-w-md w-full">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                  <Button className="bg-slate-700/90 hover:bg-slate-600 text-white px-4 py-2 mt-1 rounded-lg text-base transition-all duration-200 hover:scale-105 border border-slate-600/50">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

 
