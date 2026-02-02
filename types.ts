
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface UniversityRecommendation {
  name: string;
  location: string;
  reason: string;
  matchScore: number;
}

export interface AIAdvisorResponse {
  summary: string;
  recommendations: UniversityRecommendation[];
}
