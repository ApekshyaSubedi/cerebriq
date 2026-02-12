import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-3">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 lg:divide-x lg:divide-slate-700">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl lg:text-2xl font-bold text-white leading-normal">
              Transform your customer experience starting today!
            </h1>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/image/samg.webp"
                    alt="Sam G."
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Sam G.</h3>
                  <p className="text-slate-400 text-sm">Marketing Manager</p>
                </div>
              </div>

              <h4 className="text-slate-300 leading-relaxed">
                "This was very easy to setup and get off the ground! It learned from our website, PDF's of our
                literature, and videos. On top of that, it was easy to integrate into our website and have clients start
                using it. It makes our customer service team look amazing and people are even starting to use it inside
                the office to get the right info."
              </h4>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col justify-center space-y-8 lg:pl-16">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-white">Sign up</h2>
            <p className="text-slate-400">
              Already a user?{" "}
              <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign in.
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            <Button
              variant="outline"
              className="w-full h-12 bg-slate-800 border-slate-600 text-white "
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-slate-400">Or sign up with email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="pl-10 h-12 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="password"
                  placeholder="Choose a password"
                  className="pl-10 h-12 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>

            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
              Sign up
            </Button>

            <p className="text-sm text-slate-400 text-center">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </Link>{" "}
              and acknowledge our{" "}
              <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
