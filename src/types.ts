export interface Service {
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface Stylist {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Transformation {
  id: string;
  before: string;
  after: string;
  stylist: string;
  service: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
