"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-stone-800 border border-stone-700 p-10 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h3 className="text-2xl font-light mb-4">Thank you for your interest</h3>
        <p className="text-stone-300">
          We have received your consultation request. A member of our team will contact you within 48 hours to arrange
          your private consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-800 border border-stone-700 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-stone-300">
            Full Name <span className="text-amber-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            required
            aria-required="true"
            className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-stone-300">
            Email Address <span className="text-amber-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="text-stone-300">
            Country <span className="text-amber-500">*</span>
          </Label>
          <Select name="country" required>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500 h-12">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="eu">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyType" className="text-stone-300">
            Property Type <span className="text-amber-500">*</span>
          </Label>
          <Select name="propertyType" required>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500 h-12">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private-residence">Private Residence</SelectItem>
              <SelectItem value="estate">Estate</SelectItem>
              <SelectItem value="commercial">Commercial Property</SelectItem>
              <SelectItem value="hotel">Hotel/Resort</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="timeframe" className="text-stone-300">
            Preferred Timeframe <span className="text-amber-500">*</span>
          </Label>
          <Select name="timeframe" required>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500 h-12">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-12-months">6-12 months</SelectItem>
              <SelectItem value="more-than-year">More than a year</SelectItem>
              <SelectItem value="just-exploring">Just exploring options</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message" className="text-stone-300">
            Additional Information
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            className="bg-stone-700 border-stone-600 text-white focus:border-amber-500 focus:ring-amber-500"
            placeholder="Please share any specific requirements or questions you may have."
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-amber-700 hover:bg-amber-600 text-white rounded-none px-8 py-6 text-base tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? "Submitting..." : "Apply for Consultation"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
