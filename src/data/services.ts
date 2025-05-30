export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'individual' | 'corporate' | 'both';
}

const services: Service[] = [
  {
    id: 'personal-tax',
    title: 'Personal Tax Preparation',
    description: 'Expert preparation of your personal tax returns with a focus on maximizing refunds and minimizing liability. We handle simple to complex situations.',
    icon: 'FileText',
    category: 'individual'
  },
  {
    id: 'corporate-tax',
    title: 'Corporate Tax Services',
    description: 'Comprehensive corporate tax preparation and planning to ensure compliance while optimizing your business tax position.',
    icon: 'Building',
    category: 'corporate'
  },
  {
    id: 'small-business',
    title: 'Small Business Accounting',
    description: 'Bookkeeping, financial statements, and business advisory services tailored to small business owners in Saskatoon.',
    icon: 'Store',
    category: 'corporate'
  },
  {
    id: 'year-round',
    title: 'Year-Round Support',
    description: 'Tax planning and advice throughout the year, not just during tax season. We\'re here when you need us.',
    icon: 'Calendar',
    category: 'both'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning & Strategy',
    description: 'Proactive tax planning to reduce future tax liabilities and develop strategies aligned with your financial goals.',
    icon: 'LineChart',
    category: 'both'
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Specialized tax advice for retirees and pre-retirees to maximize income and minimize taxes during retirement.',
    icon: 'Umbrella',
    category: 'individual'
  }
];

export default services;