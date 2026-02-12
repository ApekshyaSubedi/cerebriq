import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Fully customizable",
    desc: "Customize branding, colors, logos to fit your style, brand, and tone of voice.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No Code",
    desc: "Deploy your chatbot, ticket forms, and email inbox with no coding required.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6C5.47 2 4.96 2.21 4.59 2.59C4.21 2.96 4 3.47 4 4V20C4 20.53 4.21 21.04 4.59 21.41C4.96 21.79 5.47 22 6 22H18C18.53 22 19.04 21.79 19.41 21.41C19.79 21.04 20 20.53 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Collect leads",
    desc: "Collect user information such as name and email, and follow up with them later.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 8C18 6.41 17.37 4.88 16.24 3.76C15.12 2.63 13.59 2 12 2C10.41 2 8.88 2.63 7.76 3.76C6.63 4.88 6 6.41 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8H2L3 12H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8H22L21 12H17L18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18L12 22L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Webhooks",
    desc: "Connect your chatbot, ticket forms, and email inbox to your favorite tools through webhooks.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 17H7V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Control with JavaScript",
    desc: "Control the behavior of your chatbot and ticket forms using JavaScript.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 2C16.97 2 21 4.69 21 8C21 11.31 16.97 14 12 14C7.03 14 3 11.31 3 8C3 4.69 7.03 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "React Library",
    desc: "Use our React library to embed chatbots and ticket forms in your React/NextJS app.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="9" cy="6" r="1" fill="currentColor" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Hosted website",
    desc: "Share a link to your chatbot or ticket form on your hosted website.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3C8.69 3 6 5.69 6 9C6 10.9 6.9 12.58 8.33 13.67L9 18H15L15.67 13.67C17.1 12.58 18 10.9 18 9C18 5.69 15.31 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Discover knowledge gaps",
    desc: "See where your chatbot is missing knowledge to answer and correct it for the future.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10 13C10.43 13.57 10.98 14.05 11.61 14.39C12.24 14.74 12.93 14.94 13.65 14.99C14.36 15.04 15.08 14.94 15.75 14.69C16.42 14.44 17.03 14.05 17.54 13.54L20.54 10.54C21.45 9.60 21.95 8.33 21.94 7.02C21.93 5.71 21.41 4.46 20.48 3.53C19.55 2.60 18.30 2.08 16.99 2.07C15.68 2.06 14.41 2.56 13.47 3.47L11.75 5.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11C13.57 10.43 13.02 9.95 12.39 9.61C11.76 9.26 11.07 9.06 10.35 9.01C9.64 8.96 8.92 9.06 8.25 9.31C7.58 9.56 6.97 9.95 6.46 10.46L3.46 13.46C2.55 14.40 2.05 15.67 2.06 16.98C2.07 18.29 2.59 19.54 3.52 20.47C4.45 21.40 5.70 21.92 7.01 21.93C8.32 21.94 9.59 21.44 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Link & image replies",
    desc: "The chatbot replies with links and images to help users understand better.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 21V19C20 17.94 19.58 16.92 18.83 16.17C18.08 15.42 17.06 15 16 15H8C6.94 15 5.92 15.42 5.17 16.17C4.42 16.92 4 17.94 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Support personas",
    desc: "Create the face of your support team with support personas for your ticket forms.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21V19C17 17.94 16.58 16.92 15.83 16.17C15.08 15.42 14.06 15 13 15H5C3.94 15 2.92 15.42 2.17 16.17C1.42 16.92 1 17.94 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21V19C23 18.13 22.74 17.29 22.24 16.56C21.75 15.82 21.04 15.24 20.22 14.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13C16.86 3.48 17.60 4.08 18.11 4.85C18.63 5.61 18.91 6.51 18.91 7.44C18.91 8.36 18.63 9.26 18.11 10.02C17.60 10.79 16.86 11.39 16 11.74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Invite your team",
    desc: "Invite your team to collaborate on tickets, emails, managing knowledge, and more.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "GDPR Compliant",
    desc: "All data is encrypted and stored securely within the borders of EU. We are GDPR compliant.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-950/50  text-blue-400 text-sm px-4 py-1.5 rounded-full mb-4">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">All the tools you need</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto pt-3">
            Aidbase is a complete support solution for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Card key={i} className=" border border-gray-800 shadow-none">
              <CardContent className="flex items-start gap-2 p-6">
        <span className="flex items-center justify-center  h-6 w-8 rounded-full bg-[#10192b] shadow-[inset_0_0_6px_rgba(255,255,255,0.1),_0_4px_12px_rgba(0,0,0,0.4)]">
  {f.icon}
</span>
                <div>
                  <h3 className="  text-xl font-semibold mb-1 text-blue-600">{f.title}</h3>
                  <p className="text-gray-300 ">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
