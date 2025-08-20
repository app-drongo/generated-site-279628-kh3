// Template-enhanced component
// Generated: 2025-08-20T03:07:42.659Z
// Section: services
// Category: services
// Template ID: services-c002

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function ServicesListDescriptions() {
  const services = [
    {
      id: "sap-integration",
      title: "SAP Integration Services",
      description: "Seamless integration of your SAP systems with modern technologies",
      longDescription: "Our SAP integration experts help you unlock the full potential of your SAP investments. We design and implement custom solutions that connect your SAP systems with other enterprise applications, enabling data-driven decision making and streamlined business processes.",
      icon: Cpu,
      benefits: [
        "Comprehensive SAP integration strategy",
        "Middleware and API development",
        "Real-time data synchronization",
        "Improved operational efficiency"
      ],
      pricing: "Custom quotes available",
      timeline: "4-12 weeks per project",
      featured: true,
      badge: "SAP Certified"
    },
    {
      id: "business-transformation",
      title: "Business Transformation",
      description: "Reimagine your business with data-driven strategies",
      longDescription: "Our business transformation services help you navigate complex challenges and identify growth opportunities. We work closely with your team to develop actionable plans that drive measurable results, leveraging the power of SAP technologies.",
      icon: BarChart3,
      benefits: [
        "Digital transformation roadmap",
        "Process optimization and automation",
        "Change management and adoption",
        "Performance analytics and reporting"
      ],
      pricing: "Starting at $10,000/month",
      timeline: "6-12 months typical engagement"
    },
    {
      id: "custom-development",
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technology",
      longDescription: "We create custom software solutions that perfectly align with your business processes and goals. From web applications to enterprise systems, we deliver robust, scalable solutions.",
      icon: Code2,
      benefits: [
        "Full-stack development expertise",
        "Agile methodology",
        "Cloud-native architecture",
        "Continuous integration/deployment"
      ],
      pricing: "Project-based pricing",
      timeline: "4-12 weeks per project"
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      description: "Comprehensive security assessment and compliance",
      longDescription: "Protect your SAP-powered business with our thorough security audits. We identify vulnerabilities, ensure compliance with industry standards, and provide actionable recommendations.",
      icon: Shield,
      benefits: [
        "Vulnerability assessment",
        "Penetration testing",
        "Compliance certification support",
        "Security training for teams"
      ],
      pricing: "Custom quotes available",
      timeline: "1-2 weeks per audit",
      badge: "Essential"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Power of SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with Our Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seamless integration, business transformation, and custom solutions tailored to your SAP ecosystem
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Explore SAP Solutions
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Unlock the Full Potential of SAP</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP integration experts are ready to help you transform your business. Schedule a consultation to get started.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}