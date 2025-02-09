import { SiFacebook, SiLinkedin } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              DABAA
            </h3>
            <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
              Your ideas, our expertise! Creating digital solutions with precision
              and creativity.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="mailto:hello@dabaa.digital"
                  className="text-gray-300 hover:text-primary transition-all duration-200"
                >
                  hello@dabaa.digital
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="tel:+8801853450158"
                  className="text-gray-300 hover:text-primary transition-all duration-200"
                >
                  +880 1853 450158
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/dabaa333"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                  <SiFacebook className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/dabaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                  <SiLinkedin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} DABAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}