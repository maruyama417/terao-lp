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
            Full Name
          </Label>
          <Input
            id="fullName"
            required
            className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-stone-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            required
            className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="text-stone-300">
            Country
          </Label>
          <Select>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500">
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
            Property Type
          </Label>
          <Select>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500">
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
            Preferred Timeframe
          </Label>
          <Select>
            <SelectTrigger className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500">
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
            rows={4}
            className="bg-stone-700 border-stone-600 text-white focus:border-stone-500 focus:ring-stone-500"
            placeholder="Please share any specific requirements or questions you may have."
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-stone-100 hover:bg-white text-stone-900 rounded-none px-8 py-6 text-base tracking-widest transition-all duration-300"
        >
          {isSubmitting ? "Submitting..." : "Apply for Consultation"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
