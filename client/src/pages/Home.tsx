import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
              Digital Solutions for the{" "}
              <span className="text-primary">Modern World</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We create innovative digital experiences that transform businesses
              and delight users.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive suite of digital services to help your
              business thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description:
                  "Custom websites and web applications built with modern technologies.",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications for iOS and Android.",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Design",
                description:
                  "User-centered design solutions that create engaging experiences.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">{service.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mb-8 text-primary-foreground">
              Let's create something amazing together.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-gray-100"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}