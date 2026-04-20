export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Program extends CosmicObject {
  type: 'programs';
  metadata: {
    name?: string;
    age_range?: string;
    short_description?: string;
    description?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    features?: string[] | string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    position?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    qualifications?: string;
    email?: string;
    department?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    summary?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    related_program?: Program;
    outcome?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name?: string;
    role?: string;
    quote?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    additional_info?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}