import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Phone,
  Clock,
  MapPin,
  Mail,
  Menu,
  X,
  Stethoscope,
  Activity,
  Baby,
  AlertCircle,
  FlaskConical,
  HeartPulse,
  Building2,
  Users,
  DollarSign,
  UserCheck,
  Award,
  Star,
  Ambulance,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useSubmitInquiry } from "./hooks/useQueries";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const submitInquiry = useSubmitInquiry();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "facilities", label: "Facilities" },
    { id: "why-choose-us", label: "Why Us" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Medicine",
      description:
        "Comprehensive medical care for common illnesses and health concerns with experienced physicians.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Surgery",
      description:
        "Advanced surgical procedures performed by skilled surgeons using modern equipment and techniques.",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Maternity & Child Care",
      description:
        "Complete maternal and pediatric services ensuring the health of mothers and children.",
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Emergency & Trauma Care",
      description:
        "24/7 emergency services with rapid response teams and state-of-the-art trauma facilities.",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Diagnostics & Lab",
      description:
        "Comprehensive diagnostic services with accurate testing and quick result turnaround times.",
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "ICU & Critical Care",
      description:
        "Intensive care unit with advanced life support systems and 24/7 specialized monitoring.",
    },
  ];

  const facilities = [
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services with dedicated trauma specialists.",
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Modern Operation Theatres",
      description: "State-of-the-art surgical facilities with advanced equipment.",
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "Advanced Diagnostic Equipment",
      description: "Latest medical technology for accurate diagnosis and treatment.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "In-house Pharmacy",
      description: "Fully stocked pharmacy with all essential medications available.",
    },
    {
      icon: <Ambulance className="w-10 h-10" />,
      title: "Ambulance Service",
      description: "24/7 ambulance service for emergency medical transportation.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Medical Staff",
      description:
        "Highly qualified doctors and nurses with years of expertise in their specialties.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description:
        "Always open to serve you - day or night, weekday or weekend, we're here for you.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Treatment",
      description:
        "Quality healthcare at reasonable costs, making health accessible to everyone.",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description:
        "Compassionate approach focusing on individual patient needs and comfort.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Modern Infrastructure",
      description:
        "Well-equipped facilities with the latest medical technology and clean environment.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent care during my surgery. The doctors and staff were very professional and caring. Highly recommend!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Quick emergency response saved my father's life. Forever grateful to Royal Treat Hospital's team.",
    },
    {
      name: "Anita Devi",
      rating: 5,
      text: "Wonderful maternity care. The nurses made me feel comfortable and the facilities are top-notch.",
    },
    {
      name: "Mohan Borah",
      rating: 5,
      text: "Best hospital in North Lakhimpur. Affordable prices and quality treatment. Thank you!",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await submitInquiry.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      });

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast.error("Failed to send message. Please try again or call us directly.");
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/logo-transparent-transparent.dim_400x100.png"
                alt="Royal Treat Hospital"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="ml-4 shadow-glow-sm hover:shadow-glow transition-all"
                onClick={() => (window.location.href = "tel:+918812992999")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-3 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="w-full shadow-glow-sm hover:shadow-glow transition-all"
                onClick={() => (window.location.href = "tel:+918812992999")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-hospital.dim_1920x800.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent">
              24/7 Emergency Care Available
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Committed to Compassionate
              <br />& Advanced Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              24/7 Emergency & Multi-Specialty Care in North Lakhimpur, Assam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all"
                onClick={() => (window.location.href = "tel:+918812992999")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Royal Treat Hospital
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Royal Treat Hospital is a premier multi-specialty healthcare facility
                serving the community of North Lakhimpur, Assam. We are dedicated to
                providing compassionate, high-quality medical care with a patient-first
                approach.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To deliver accessible, affordable, and advanced healthcare
                      services to every individual, ensuring the highest standards of
                      medical excellence and compassionate care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the most trusted healthcare provider in Assam, recognized
                      for our commitment to patient welfare, medical innovation, and
                      community health advancement.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-muted-foreground mt-8">
                With state-of-the-art facilities, experienced medical professionals, and
                24/7 emergency services, we stand committed to the health and well-being
                of our community.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Medical Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive healthcare services delivered by experienced specialists
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                World-Class Facilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern infrastructure and equipment to ensure the best patient care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-accent/5 transition-colors duration-300 border"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Royal Treat Hospital?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Excellence in healthcare with a patient-first approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Patients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from the people we've had the privilege to serve
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="font-heading text-lg">
                      {testimonial.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help. Reach out to us for appointments or inquiries.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-muted-foreground">
                          North Lakhimpur, Assam – 787031, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a
                          href="tel:+918812992999"
                          className="text-primary hover:underline"
                        >
                          +91 88129 92999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Operating Hours</p>
                        <p className="text-muted-foreground">
                          Open 24 Hours - All Days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href="mailto:info@royaltreathospital.com"
                          className="text-primary hover:underline"
                        >
                          info@royaltreathospital.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Map */}
                <Card className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113158.28285815654!2d94.01837!3d27.23518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c44a26cb6b89%3A0x51bd5e6f4e0799fa!2sNorth%20Lakhimpur%2C%20Assam!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Royal Treat Hospital Location"
                  />
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full shadow-glow-sm hover:shadow-glow transition-all"
                      disabled={submitInquiry.isPending}
                    >
                      {submitInquiry.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">
                Royal Treat Hospital
              </h3>
              <p className="text-primary-foreground/90 text-sm mb-4">
                Committed to providing compassionate, high-quality healthcare to the community of North Lakhimpur, Assam.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">
                Emergency Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <a
                    href="tel:+918812992999"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    +91 88129 92999
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-primary-foreground/90">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ambulance className="w-5 h-5" />
                  <span className="text-primary-foreground/90">
                    Ambulance Service
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-sm text-primary-foreground/80">
              © 2026 Royal Treat Hospital. All rights reserved. Built with{" "}
              <Heart className="inline w-4 h-4 fill-red-400 text-red-400" /> using{" "}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
