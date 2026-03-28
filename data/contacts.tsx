// data/contacts.tsx
import { Mail, Phone } from 'lucide-react';

// --- CUSTOM SVG ICONS ---
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.9 4.41-2.41 6.06-1.5 1.65-3.64 2.65-5.9 2.91-2.31.25-4.71-.06-6.75-1.16-1.95-1.05-3.48-2.73-4.27-4.75-.76-1.96-.86-4.14-.3-6.14.53-1.89 1.7-3.56 3.29-4.71 1.66-1.19 3.73-1.74 5.75-1.59v4.1c-1.24-.12-2.52.09-3.57.73-1.02.62-1.73 1.57-2.06 2.68-.32 1.08-.21 2.26.29 3.25.54 1.05 1.52 1.83 2.67 2.14 1.21.32 2.52.17 3.62-.43 1.14-.62 1.93-1.68 2.23-2.92.21-.86.22-1.75.21-2.62.01-6.16-.02-12.32.02-18.48z" /></svg>
);
const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.908 19.908 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
);
const LineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c0-4.229-4.264-7.668-9.5-7.668-5.235 0-9.5 3.439-9.5 7.668 0 3.81 3.406 7.037 8.01 7.575.928.167 2.18.513 2.51.815.356.326.242 1.042.115 1.603-.122.545-.589 3.522-.72 4.292-.162.946.435 1.348 1.134.922.502-.304 4.542-2.697 6.18-4.577 1.968-2.253 2.822-4.135 2.822-6.046zM7.025 11.516c0 .193-.156.35-.35.35H5.163c-.193 0-.35-.157-.35-.35V7.633c0-.193.157-.35.35-.35.193 0 .35.157.35.35v3.533h1.162c.193 0 .35.157.35.35zm2.844 0c0 .193-.157.35-.35.35H8.818c-.193 0-.35-.157-.35-.35V7.633c0-.193.157-.35.35-.35.193 0 .35.157.35.35v3.883zm4.569 0c0 .193-.156.35-.35.35h-1.618c-.193 0-.35-.157-.35-.35V7.633c0-.193.157-.35.35-.35.193 0 .35.157.35.35v3.883zm3.179-3.533v3.533c0 .193-.156.35-.35.35h-1.618c-.193 0-.35-.157-.35-.35V7.633c0-.193.157-.35.35-.35.193 0 .35.157.35.35v3.883z"/></svg>
);
const BeRealIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="monospace" fontWeight="900" fontSize="16" letterSpacing="-1">BR</text></svg>
);

export interface SocialMedia {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link: string;
}

export const socials: SocialMedia[] = [
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Dionisius Geovanni Caesario', link: 'https://www.linkedin.com/in/dionisius-geovanni-caesario-1a5419225/' },
  { icon: GithubIcon, label: 'GitHub', value: 'Hanashiro Yuriku', link: 'https://github.com/HanashiroYuriku' },
  { icon: Mail, label: 'Email', value: 'dionisiuscaesario@gmail.com', link: 'mailto:dionisiuscaesario@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+62 856 8000 747', link: 'https://wa.me/628568000747' },
  { icon: InstagramIcon, label: 'Instagram', value: '@d.geovannicaesario', link: 'https://instagram.com/d.geovannicaesario' },
  { icon: TiktokIcon, label: 'TikTok', value: 'Hanashiro Yuriku', link: 'https://tiktok.com/@hanashiroyuriku' },
  { icon: LineIcon, label: 'Line ID', value: 'Dionisius Geovanni', link: 'https://line.me/ti/p/~x_g_c_d_c_g_x' },
  { icon: DiscordIcon, label: 'Discord', value: 'Hanashiro Yuriku', link: 'https://discord.com/users/hanashiroyuriku' },
  { icon: BeRealIcon, label: 'BeReal', value: 'Riku', link: 'https://bere.al/hanashiroyuriku' },
];