// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth/auth-options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-1 w-full px-8 py-10 lg:py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            👨‍💼 AI Professional Headshot Generator
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create Your Perfect Business Portrait in 3 Minutes with AI
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="/signin"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Generate Now
            </Link>
            <a href="#features" className="text-sm font-semibold leading-6">
              View Examples <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <section id="features" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p>Get your professional headshots in just 3 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
              <p>Business-ready portraits for your professional needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Multiple Styles</h3>
              <p>Choose from various professional styles and backgrounds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Upload Photos</h3>
              <p className="text-sm">Upload 3-5 photos of yourself</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Style</h3>
              <p className="text-sm">Select your preferred professional style</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">AI Training</h3>
              <p className="text-sm">Wait for AI to generate your headshots</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-sm">Get your professional headshots</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">👨‍💼</div>
              <h3 className="font-semibold">Business Professionals</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold">Students</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="font-semibold">Content Creators</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">👔</div>
              <h3 className="font-semibold">Job Seekers</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold">Creative Professionals</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">User Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Amazing! Got my professional headshots in 3 minutes. Looks better than studio photos!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Mark Thompson</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Better quality than traditional photo studios. Worth every penny!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Lisa Chen</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Best value for money, highly recommended. Updated my LinkedIn profile immediately!"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">How many photos do I need to upload?</h3>
              <p>We recommend 3-5 photos from different angles for best results.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">How long does generation take?</h3>
              <p>Usually 3-5 minutes to complete the AI training and generation.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">What styles are available?</h3>
              <p>Business, Casual, Artistic, and more. You can preview all styles in the app.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">Can I use these photos commercially?</h3>
              <p>Yes, all generated photos are royalty-free and can be used for personal and commercial purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AI Headshot Generator</h3>
              <p className="text-gray-300">Create professional headshots in minutes with AI technology.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="/examples" className="text-gray-300 hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-gray-300">📧 Email: support@yourdomain.com</p>
              <p className="text-gray-300">💬 Live Chat: Available 24/7</p>
              <p className="text-gray-300">🌐 Hours: Mon-Fri 9:00-18:00 EST</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 AI Headshot Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
