"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Benefits",
          id: "benefits",
        },
        {
          name: "Solutions",
          id: "solutions",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Process",
          id: "process",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Webild Agency"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Your Business Deserves a Premium Online Presence."
      description="Professional design, lightning-fast hosting, and 24/7 maintenance. Launched in just 48 hours."
      buttons={[
        {
          text: "Get Started for $299",
          href: "#contact",
        },
        {
          text: "View Portfolio",
          href: "#solutions",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-vector/grand-re-opening-social-media-stories_23-2148541571.jpg",
          imageAlt: "Responsive web design for a local business on devices",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-digital-tablet-repair-garage_1170-1404.jpg",
          imageAlt: "MacBook showing a modern local shop website",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-smartphone-rocks-arrangement_23-2149672672.jpg",
          imageAlt: "iPhone displaying a clean cafe website",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page-with-photo_23-2148248050.jpg",
          imageAlt: "Tablet showing an automotive repair service website",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-psd/stop-fake-news-web-page_23-2149004001.jpg",
          imageAlt: "Laptop with a professional real estate website",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-landing-page-template-cyber-monday-sale_23-2150842106.jpg",
          imageAlt: "Variety of devices showing a local business website",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="benefits" data-section="benefits">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Total Care: Managed Hosting & Concierge Support for Just $29/mo."
      description="Experience peace of mind with our comprehensive website service. We handle all the technical details, security, and updates so you can focus on your business."
      bulletPoints={[
        {
          title: "Bulletproof Security",
          description: "We handle SSL, firewalls, and daily backups to keep your site safe and sound.",
        },
        {
          title: "Ultra-Fast Hosting",
          description: "Your site stays online and loads instantly on all devices, ensuring a seamless user experience.",
        },
        {
          title: "Unlimited Updates",
          description: "Need to change a price or a photo? Just text us, and we'll handle the updates for you, no fuss.",
        },
        {
          title: "Mobile Optimized",
          description: "Your professional website will be perfectly responsive for customers on the go, looking great on any screen size.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/factory-engineers-using-green-screen-laptop-increase-energy-output_482257-120517.jpg"
      imageAlt="Laptop showing website management and security features"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="solutions" data-section="solutions">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "hospitality",
          name: "Hospitality",
          price: "Boost Bookings",
          imageSrc: "http://img.b2bpic.net/free-psd/delicious-food-landing-page_23-2149019901.jpg",
          imageAlt: "Website mockup for a bar or restaurant",
        },
        {
          id: "services",
          name: "Services",
          price: "Attract Clients",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-small-business_23-2149196200.jpg",
          imageAlt: "Website mockup for a salon or auto repair shop",
        },
        {
          id: "professional",
          name: "Professional",
          price: "Enhance Credibility",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-senior-man-pointing-laptop-video-conference_482257-4945.jpg",
          imageAlt: "Website mockup for a consulting or real estate agency",
        },
      ]}
      title="Tailored Solutions for Local Businesses."
      description="Whether you run a bar, a salon, or a real estate agency, we craft custom websites that connect you with your local customers and drive engagement."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "setup",
          badge: "One-Time",
          price: "$299",
          subtitle: "Setup Fee",
          features: [
            "Professional Design & Build",
            "Custom Content Integration",
            "Initial SEO Setup",
            "Site Launch in 48 Hours",
          ],
        },
        {
          id: "monthly",
          badge: "Monthly",
          price: "$29/mo",
          subtitle: "Managed Hosting & Support",
          features: [
            "Bulletproof Security (SSL, Firewalls, Backups)",
            "Ultra-Fast Hosting",
            "Unlimited Content Updates (Just text us!)",
            "Mobile Optimization & Responsiveness",
            "24/7 Technical Support",
          ],
        },
      ]}
      title="Transparent Pricing, Unbeatable Value."
      description="No hidden fees, no surprises. Just a clear, affordable path to a premium online presence for your local brand."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "The Brief: 10-Minute Discovery",
          description: "A quick, focused call to understand your brand, goals, and unique vision for your online presence. We listen, you talk.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-rate-charts-papers-with-analysis-information-desk-man-woman-looking-files-plan-project-presentation-startup-office-colleagues-doing-teamwork-strategy_482257-28125.jpg",
          imageAlt: "Illustration of a business brief",
        },
        {
          id: 2,
          title: "The Build: Custom Site in 48 Hours",
          description: "Leveraging advanced design and rapid development, we engineer your custom website with precision and speed, pixel-perfect.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-construction-template_23-2147745727.jpg",
          imageAlt: "Illustration of website building process",
        },
        {
          id: 3,
          title: "The Launch: 24/7 Management Begins",
          description: "Your premium site goes live, ready to attract customers. We then begin our continuous 24/7 managed hosting and concierge support.",
          imageSrc: "http://img.b2bpic.net/free-vector/startup-modern-landing-page_52683-7667.jpg",
          imageAlt: "Illustration of website launch",
        },
      ]}
      title="Your Premium Website in 3 Simple Steps."
      description="Get your business online faster than ever before with our streamlined process, designed for efficiency and exceptional results."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to elevate your local business? Get your premium website launched in just 48 hours. Fill out the form below or call us now!\n\n(Fields for Name, Business Type, and Phone Number - form to be implemented via WhatsApp integration.)"
      buttons={[
        {
          text: "Call Now",
          href: "tel:+1234567890",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Web Design",
              href: "#solutions",
            },
            {
              label: "Managed Hosting",
              href: "#benefits",
            },
            {
              label: "24/7 Support",
              href: "#benefits",
            },
            {
              label: "SEO Optimization",
              href: "#process",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Our Process",
              href: "#process",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Webild Agency"
      copyrightText="© 2024 | Webild Agency. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
