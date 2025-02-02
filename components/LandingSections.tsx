import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, X } from "lucide-react";

// Swipe-up animation for the symbol
const swipeUpVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

const LandingSections = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Employ Chat Bots on your websites using Botic-AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The smart bot-building SaaS that enhances customer interactions, automates support, and scales with your business effortlessly
                </p>
              </div>
               <div className="flex flex-col items-center justify-center space-y-4">
      {/* Hover Text with Motion */}
      
      
      {/* Buttons */}
      <div className="space-x-4 mt-6">
        <Button asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#features">Learn More</Link>
        </Button>
        <motion.div
        variants={swipeUpVariants}
        initial="initial"
        animate="animate"
        className="flex justify-center mt-8"
      >
        Swipe Up 
        To see Bot in Action
      </motion.div>
      </div>
    </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                
                <h3 className="text-xl font-bold">Effortless Bot Deployment</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Easily integrate AI-powered bots on your website with minimal setup.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                
                <h3 className="text-xl font-bold">Smart & Adaptive AI</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Your bot learns from your data to deliver highly relevant and accurate responses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Enable multiple users to manage and optimize bot interactions in higher-tier plans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
               
                <h3 className="text-xl font-bold">Developer Assistance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Exclusive AI development support available in the Ultimate plan.
                </p>
              </div>
              {/* 5th */}
              <div className="flex flex-col items-center space-y-4 text-center">
               
                <h3 className="text-xl font-bold">Cross-Browser Compatibility</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Seamless performance across all devices and platforms.
                </p>
              </div>
              {/* 6th */} <div className="flex flex-col items-center space-y-4 text-center">
                
               <h3 className="text-xl font-bold">Scalable Plans</h3>
               <p className="text-gray-500 dark:text-gray-400">
               From free-tier basics to enterprise-level automation—choose what fits your needs!
               </p>
             </div>
            </div>
          </div>
        </section>
       
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$0</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Basic bot integration
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Simple search
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  10 free chats
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Scale up with more interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$50</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Up to 500 chat interactions per user
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Advanced AI responses
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Cross-browser synchronization
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade to Pro</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ultimate</CardTitle>
              <CardDescription>Unlock the full potential</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">Custom</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Contact us for pricing</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Unlimited chat interactions
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Exclusive developer assistance
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Premium AI customization
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Revolutionize Your Customer Interactions
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Join businesses worldwide leveraging Botic-AI to enhance engagement, streamline responses, and drive efficiency with AI-powered chatbots.
        </p>
      </div>
      <div className="w-full max-w-sm space-y-2">
        <Button className="w-full" asChild>
          <Link href="/signup">Get Started for Free</Link>
        </Button>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          No credit card required. Begin with our free plan and upgrade anytime.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Botic-AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingSections;
