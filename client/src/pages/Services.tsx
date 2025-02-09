import { motion } from "framer-motion";
import {
  Code,
  FileText,
  Search,
  LineChart,
  Edit,
  PenTool,
  Layout
} from "lucide-react";

const services = [
  {
    icon: <Layout />,
    title: "Front-end Development",
    description:
      "Building responsive and user-friendly web interfaces with modern technologies.",
    features: [
      "Responsive Design",
      "Interactive UI/UX",
      "Modern Frameworks",
      "Performance Optimization",
    ],
  },
  {
    icon: <Code />,
    title: "Customized Web Solutions",
    description:
      "Tailored web applications and solutions designed to meet your specific needs.",
    features: [
      "Custom Web Apps",
      "E-commerce Solutions",
      "API Integration",
      "Web Portals",
    ],
  },
  {
    icon: <FileText />,
    title: "Word Document Creations",
    description:
      "Professional document creation and formatting services for all your needs.",
    features: [
      "Business Documents",
      "Technical Documentation",
      "Report Writing",
      "Template Design",
    ],
  },
  {
    icon: <LineChart />,
    title: "Research and Analysis",
    description:
      "In-depth research and data analysis to drive informed decision-making.",
    features: [
      "Market Research",
      "Competitor Analysis",
      "Data Visualization",
      "Trend Analysis",
    ],
  },
  {
    icon: <Search />,
    title: "SEO & Sales",
    description:
      "Boost your online visibility and drive sales with expert SEO strategies.",
    features: [
      "Search Engine Optimization",
      "Sales Strategies",
      "Digital Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    icon: <Edit />,
    title: "Editing Services",
    description:
      "Professional editing and proofreading services for all types of content.",
    features: [
      "Content Editing",
      "Proofreading",
      "Grammar Correction",
      "Style Enhancement",
    ],
  },
  {
    icon: <PenTool />,
    title: "Content Services",
    description:
      "High-quality content creation tailored to your brand and audience.",
    features: [
      "Content Writing",
      "Blog Posts",
      "Social Media Content",
      "Copywriting",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
            We combine creativity and expertise to deliver exceptional results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-muted-foreground dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}