import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, FileText, Inbox, HelpCircle, BarChart2, Webhook, ArrowRight, FileCode2 } from "lucide-react"
import { Button } from '@/components/ui/button'

const integrations = [
  { src: '/logo/gpt4.webp', label: 'openAI' },
  { src: '/logo/whatsapp.webp', label: 'WhatsApp' },
  { src: '/logo/slack.webp', label: 'Slack' },
  { src: '/logo/notion.webp', label: 'Notion' },
  { src: '/logo/messenger.webp', label: 'Messenger' },
  { src: '/logo/shopify.webp', label: 'Shopify' },
  { src: '/logo/wordpress.webp', label: 'WordPress' },
  { src: '/logo/zapier.webp', label: 'Zapier' },
  { src: '/logo/webflow.webp', label: 'Webflow' },
  { src: '/logo/youtube.webp', label: 'YouTube' },
];

interface IntegrationButtonProps {
  src: string;
  label: string;
}

const IntegrationButton = ({ src, label }: IntegrationButtonProps) => (
  <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium py-2 px-5 rounded-full transition-colors duration-200 shadow-lg w-full backdrop-blur-md border border-white/10" style={{ minHeight: '44px' }}>
    <Image src={src} alt={label} width={22} height={22} className="object-contain" />
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

const Expect = () => {
  return (
    <div className="text-white py-2 px-4 md:px-8 rounded-3xl overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-950/50 px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-blue-400 text-sm">✦</span>
            <span className="text-blue-400 text-sm">What to expect</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Spend less time on support</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 pt-3">
          A complete support ecosystem to help you spend less time supporting your users - and more time growing your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-gray-800 bg-transparent hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Chatbot</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-400 text-sm">Create an AI chatbot and make it an expert on your business.</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-transparent hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ticket Form</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-300 text-sm">Create a custom ticket form to collect information from your users.</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-transparent hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Inbox className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email Inbox</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-300 text-sm">Handle incoming support emails from one unified inbox.</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-transparent hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">FAQ & Knowledge Base</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-300 text-sm">Create a knowledge base for both users and support to search for answers.</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-transparent hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <BarChart2 className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Identify knowledge gaps</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-300 text-sm">Identify knowledge gaps, improve and retrain your AI models.</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-transparent hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            <CardHeader className="pb-0">
              <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Webhook className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">SDKs, APIs & Webhooks</h3>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-gray-300 text-sm">Our solution is built to be integrated with your existing tools.</p>
            </CardContent>
          </Card>
        </div>

       
        <section className="py-16 shadow-2xl rounded-3xl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 md:gap-0 items-stretch rounded-3xl overflow-hidden" >
            <div className="flex-1 flex items-center justify-center bg-transparent relative p-0">
              <div className="w-full h-full flex flex-col items-center justify-center px-8 py-12">
                <div className="absolute left-8 top-8 w-24 h-24 rounded-full blur-2xl z-0" />
                <div className="relative z-10 flex flex-col items-start mb-8 w-full">
                  <div className="flex items-center mb-4">
                    <div className=" w-14 h-14 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.29.07 2.573-1.065z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-2xl  font-medium text-white">Connect with your tool of choice</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-full text-sm text-center">
                  {integrations.map((integration) => (
                    <IntegrationButton key={integration.label} src={integration.src} label={integration.label} />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="flex-1 flex items-center justify-center bg-transparent">
              <div className="w-full h-full flex flex-col justify-center px-8 py-12">
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/image/kyle-prinsloo.webp" alt="Kyle Prinsloo" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-blue-900" />
                  <div>
                    <div className="text-white font-semibold text-lg">Kyle Prinsloo</div>
                    <div className="text-gray-400 text-sm">Founder, ClientManager</div>
                  </div>
                </div>
                <p className=" text-base text-muted-foreground text-left">
                  "Aidbase has reduced our response time by over 70%. It saves us thousands of dollars every year, and more importantly, our users get helpful instant responses. The ticketing system is the best out there. It simply costs more NOT using it (and it's more stressful). Highly recommend it!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

   <section className="flex flex-col relative mt-2 container">
        <div className="mx-24 px-4 py-8 relative z-10">
          <div className="p-8 relative shadow-2xl rounded-3xl py-16">
            <div className="flex flex-col lg:flex-row items-start gap-4">
              <div className="w-full lg:w-2/3 ">
                <Image
                  src="/image/ticket-feature.webp"
                  alt="Ticket interface showing conversation"
                  width={900}
                  height={500}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>

              <div className="w-full lg:w-1/3 text-white mt-8 lg:mt-20 shadow-3xl">
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-blue-400 px-3 py-1.5 rounded-md">
                    <span className="text-blue-400 mr-2">✦</span>
                    <span className="text-sm font-medium">AI-Assisted Ticket Handling</span>
                  </div>
                </div>
                <h1 className="text-xl md:text-2xl font-medium mb-6">Handle tickets and emails faster with AI.</h1>
                <p className="text-base text-gray-300 mb-8">
                  Handle all tickets and emails from Aidbase's unified inbox. Our AI will learn - not only from your
                  knowledge base - but from all your previous tickets.
                </p>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-6 justify-center">
        <Card className="w-full lg:w-1/2 border border-gray-800 text-white backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="h-14 w-14 mr-4 rounded-full overflow-hidden">
                <Image
                  src="/image/sam.webp"
                  alt="Sam G."
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Sam G.</h3>
                <p className="text-blue-400">Marketing Manager</p>
              </div>
            </div>

            <blockquote className="text-lg text-slate-300 leading-relaxed">
              <span className="text-blue-400">"</span> This was very easy to setup and get off the ground! It learned
              from our website, PDF's of our literature, and videos. On top of that, it was easy to integrate into our
              website and have clients start using it. It makes our customer service team look amazing and people are
              even starting to use it inside the office to get the right info. <span className="text-blue-400">"</span>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-1/2 border border-gray-800 text-white backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 mr-4 bg-[#1a1f2e] rounded-full flex items-center justify-center">
                <FileCode2 className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold">Works with your tech stack</h2>
            </div>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Add the chatbot and ticket form to your website or app in minutes using our CDN or npm packages.
            </p>

            <div className="bg-[#1a1f2e] rounded-lg p-4 mb-6 font-mono">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">npm</span>
                <span className="text-white">install</span>
                <span className="text-blue-400">@aidbase/chat</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded-md">
                <span className="mr-2">📄</span>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-md">
                <span className="mr-2">⚛️</span>
                <span>React / Next.js</span>
              </div>
              <div className="flex items-center bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-md">
                <span className="mr-2">🌐</span>
                <span>HTML / CSS</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    </div>
  )
}

export default Expect

