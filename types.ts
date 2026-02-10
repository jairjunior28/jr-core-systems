
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
