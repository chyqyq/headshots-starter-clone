"use client";

// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { UserAuthForm } from "@/components/user-auth-form";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { authOptions } from "@/lib/auth/auth-options";

export default function Home() {
  // 移除身份验证逻辑，直接渲染页面内容
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/dashboard");
  // }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-1 w-full px-8 py-10 lg:py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            📸 AI Professional Portrait Studio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform Your Photos into Premium Headshots in Minutes
          </p>
          
          {/* 添加人像图片展示区域 */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Professional Headshot Sample 1" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Professional Headshot Sample 2" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Professional Headshot Sample 3" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="/login"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Create Your Portraits
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Simple 4-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Upload Images</h3>
              <p className="text-sm mb-4">Share 4-6 clear photos showing different angles</p>
              <div className="overflow-hidden rounded-lg shadow-md bg-white h-40 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="Upload Images Example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Select Your Look</h3>
              <p className="text-sm mb-4">Browse our collection of professional styles</p>
              <div className="overflow-hidden rounded-lg shadow-md bg-white h-40 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="Select Style Example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">AI Magic</h3>
              <p className="text-sm mb-4">Our advanced algorithms create your custom portraits</p>
              <div className="overflow-hidden rounded-lg shadow-md bg-white h-40 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="AI Processing Example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Download & Share</h3>
              <p className="text-sm mb-4">Use your new headshots across all platforms</p>
              <div className="overflow-hidden rounded-lg shadow-md bg-white h-40 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="Final Results Example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ideal For</h2>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">👨‍💼</div>
              <h3 className="font-semibold">Corporate Leaders</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold">Academic Professionals</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="font-semibold">Digital Influencers</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">👔</div>
              <h3 className="font-semibold">Career Advancers</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold">Creative Industry Experts</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Why Choose Us 部分 */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Results</h3>
                  <p>Premium quality headshots delivered in under 5 minutes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Studio-Quality Output</h3>
                  <p>Professional results that rival traditional photography</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-3">🎨</div>
                  <h3 className="text-xl font-semibold mb-2">Versatile Styles</h3>
                  <p>Customize with diverse professional backgrounds and looks</p>
                </div>
              </div>
            </div>
            
            {/* Common Questions 部分 */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">What's the optimal number of photos to upload?</h3>
                  <p>We recommend 4-6 high-quality photos with varied expressions and angles for optimal results.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">What's the processing timeframe?</h3>
                  <p>Your portfolio of professional portraits will be ready in just 3-5 minutes.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">What professional styles do you offer?</h3>
                  <p>Executive, Corporate, Creative, Academic, and more - all customizable to your preferences.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Are there usage restrictions?</h3>
                  <p>None! Your generated portraits are yours to use for any personal or professional purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                    alt="Emma Richardson" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Emma Richardson</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Absolutely impressed! These portraits gave my professional profile an instant upgrade. Worth every cent!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                    alt="David Wilson" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">David Wilson</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"The quality surpassed my expectations. My colleagues couldn't believe these weren't taken by a professional photographer."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                    alt="Michelle Zhang" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Michelle Zhang</h3>
                  <div className="text-yellow-500 flex">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Perfect for my executive LinkedIn profile. Received compliments within hours of updating my headshot!"</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AI Professional Portrait Studio</h3>
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
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <p className="text-gray-300">📧 Email: chenyqyq17666@gmail.com</p>
              <p className="text-gray-300">🌐 Business Hours: Mon-Fri 8:00-20:00 GMT</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 AI Professional Portrait Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
