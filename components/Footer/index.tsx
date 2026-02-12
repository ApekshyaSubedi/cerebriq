"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerData = {
  products: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Chatbot", href: "/chatbot" },
    { name: "Tickets", href: "/tickets" },
    { name: "Email Support", href: "/email-support" },
    { name: "Cerebriq Elements", href: "/elements" },
  ],
  company: [
    { name: "Terms and conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Data Processing Agreement", href: "/data-processing" },
    { name: "Brand Kit", href: "/brand-kit" },
    { name: "FounderStack", href: "/founderstack" },
  ],
  support: [
    { name: "Sign in", href: "/signin" },
    { name: "Sign up", href: "/signup" },
    { name: "Contact us", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export default function Footer() {
  return (
    <div className="">
    <div className=" mt-12 py-12">
      <div className="container mx-auto px-6">
       <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-24 max-w-6xl mx-auto items-center text-center lg:items-start lg:text-left">
     <div className="mb-10 lg:mb-0 lg:w-1/4">
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Cerebriq</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        An AI-powered support ecosystem built to give your users an outstanding customer experience - on autopilot.
      </p>
    </div>

    <div className="flex justify-center lg:justify-start space-x-6 mb-6">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <Link
            key={social.label}
            href={social.href}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label={social.label}
          >
            <IconComponent className="w-5 h-5" />
          </Link>
        )
      })}
    </div>

    <p className="text-slate-500 text-sm">Cerebriq © 2025 - All rights reserved.</p>
  </div>

  <div className="mb-10 lg:mb-0 lg:w-1/4">
    <h4 className="text-white font-semibold mb-4">Products</h4>
    <ul className="space-y-3">
      {footerData.products.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  <div className="mb-10 lg:mb-0 lg:w-1/4">
    <h4 className="text-white font-semibold mb-4">Company</h4>
    <ul className="space-y-3">
      {footerData.company.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

    <div className="lg:w-1/4">
    <h4 className="text-white font-semibold mb-4">Support</h4>
    <ul className="space-y-3">
      {footerData.support.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>
</div>
</div>

  )
}
