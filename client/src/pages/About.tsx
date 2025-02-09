import { motion } from "framer-motion";
import { Award, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl">
            We are a team of passionate digital creators, developers, and designers
            committed to delivering exceptional digital solutions that drive
            business growth.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Our Values</h2>
            <p className="text-muted-foreground dark:text-gray-300">
              The principles that guide our work and relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every project we undertake.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description:
                  "We embrace new technologies and creative solutions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-gray-900 p-8 rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4 inline-block">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">{value.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Our Team</h2>
            <p className="text-muted-foreground dark:text-gray-300">
              Meet the talented individuals behind our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                bio: "15+ years of experience in digital transformation",
              },
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                bio: "Award-winning designer with a passion for innovation",
              },
              {
                name: "Michael Chen",
                role: "Technical Lead",
                bio: "Expert in modern web technologies and architecture",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <div className="w-24 h-24 bg-muted dark:bg-gray-800 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground dark:text-white text-center">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center">{member.role}</p>
                </div>
                <p className="text-muted-foreground dark:text-gray-300 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}