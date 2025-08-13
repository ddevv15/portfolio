import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Dev Shah',
  description: 'Get in touch with Dev Shah - Software Engineer available for opportunities and collaborations.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "👤",
      label: "Name",
      value: "Dev Shah"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chicago, IL 60607"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1 718‑687‑0634",
      href: "tel:+17186870634"
    },
    {
      icon: "📧",
      label: "Email",
      value: "devkishorkumar1583@gmail.com",
      href: "mailto:devkishorkumar1583@gmail.com"
    }
  ]

  const socialLinks = [
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/devshah1583",
      href: "https://www.linkedin.com/in/devshah1583/"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/ddevv15",
      href: "https://github.com/ddevv15"
    },
    {
      icon: "🌐",
      label: "Website",
      value: "shahdev.com",
      href: "https://shahdev.com"
    }
  ]

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Contact Information
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-green-400 rounded p-6">
              <h2 className="text-xl font-semibold text-green-400 mb-4">Get In Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-green-300 text-sm opacity-80">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-green-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border border-green-400 rounded p-6">
              <h2 className="text-xl font-semibold text-green-400 mb-4">Connect Online</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    <div>
                      <p className="text-green-300 text-sm opacity-80">{link.label}</p>
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        {link.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border border-green-400 rounded p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Let&apos;s Collaborate</h2>
            <div className="space-y-4 text-green-300">
              <p>
                I&apos;m always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you&apos;re looking for:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Full-time software engineering positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Freelance development work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Open source collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Technical consulting</span>
                </li>
              </ul>
              
              <p className="mt-4">
                Feel free to reach out! I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
