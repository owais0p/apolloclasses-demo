import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center text-white font-bold">A</div>
            <p className="font-serif font-bold text-primary tracking-tight">APOLLO CLASSES</p>
          </div>
          
          <div className="flex gap-8 text-sm font-sans text-primary/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>

          <p className="text-sm font-sans text-primary/40">
            © 2026 Apollo Classes Kota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
