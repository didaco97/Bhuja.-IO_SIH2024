import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickLinkProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function QuickLink({ href, icon: Icon, title, description }: QuickLinkProps) {
  return (
    <a href={href} className="card group">
      <div className="bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-bold text-gray-800 mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </a>
  );
}