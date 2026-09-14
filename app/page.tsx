import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Tools } from "@/components/tools"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Tools />
        <Process />
        <Services />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
