import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/60 text-lg">Feel free to reach out to me through any of these channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <a 
                  href="mailto:info.amanmauryas@gmail.com" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  info.amanmauryas@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <MapPin className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <p className="text-white/60">India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Phone className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">Phone</h3>
                <p className="text-white/60">+91 7985637880</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Github className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">GitHub</h3>
                <a 
                  href="https://github.com/amanmauryas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  github.com/amanmauryas
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Linkedin className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/amanmauryas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  linkedin.com/in/amanmauryas
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Twitter className="w-6 h-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">Twitter</h3>
                <a 
                  href="https://twitter.com/amanmauryas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  twitter.com/amanmauryas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;