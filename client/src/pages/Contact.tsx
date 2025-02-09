import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      console.log("Form submitted:", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10 dark:via-transparent dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto font-sans">
              Have a project in mind? We'd love to hear from you. Get in touch with
              us and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email",
                content: "contact@digiserv.com",
                link: "mailto:contact@digiserv.com",
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone",
                content: "(123) 456-7890",
                link: "tel:+1234567890",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Address",
                content: "123 Digital Street, Tech City",
                link: "https://maps.google.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-8 bg-card dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 font-sans">
                  {item.content}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground dark:text-white mb-6">
              Send us a Message
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="font-sans"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-sans" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            className="font-sans"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-sans" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Message subject"
                          className="font-sans"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-sans" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px] font-sans"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-sans" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-sans">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}