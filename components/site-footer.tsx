import { Instagram, Mail, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="py-16 bg-stone-800 text-stone-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-light text-white mb-2">Terao Engei Doboku Co., Ltd.</h3>
              <p className="text-sm text-stone-400 mb-6">50 Years of Japanese Garden Mastery – From Hiroshima, Japan</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>private@teraoengei.jp</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+81-82-xxx-xxxx</span>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5" />
                <span>@japanesegarden_terao</span>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Terao Engei Doboku. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
