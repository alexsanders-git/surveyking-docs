import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HeroSection from '../template/Hero';
import HelpSection from '../template/HelpSection';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

const linksLeft = {
  left: {
    title: 'Get Started',
    columns: [
      [{ text: 'A Summary of Survey Software', href: '#' }],
      [{ text: 'Templates', href: '#' }],
      [{ text: 'Understanding Results', href: '#' }],
      [{ text: 'Survey Logic', href: '#' }],
      [{ text: 'Answer Piping', href: '#' }],
      [{ text: 'Survey Completion Redirect', href: '#' }],
      [{ text: 'Create a Survey', href: '#' }],
    ]
  },
  right: [
    {
      title: 'Question Types',
      columns: [
        [
          { text: 'Multiple Choice', href: '#' },
          { text: 'Dropdown', href: '#' },
          { text: 'Input Box', href: '#' },
          { text: 'Multiple Text Boxes', href: '#' },
          { text: 'Van Westendorp', href: '#' },
          { text: 'Rating', href: '#' }
        ],
        [
          { text: 'Matrix', href: '#' },
          { text: 'Ranking', href: '#' },
          { text: 'Net Promoter Score', href: '#' },
          { text: 'Likert Scale', href: '#' },
          { text: 'Semantic Differential', href: '#' }
        ],
        [
          { text: 'File Upload', href: '#' },
          { text: 'Checkbox Grid', href: '#' },
          { text: 'MaxDiff', href: '#' },
          { text: 'Conjoint Analysis', href: '#' },
          { text: 'Gabor Granger', href: '#' }
        ]
      ]
    },
    {
      title: 'Collecting Responses',
      columns: [
        [
          { text: 'Survey Web Link', href: '#' },
          { text: 'Anonymous Surveys', href: '#' }
        ],
        [
          { text: 'Text Message Surveys', href: '#' },
          { text: 'Email Surveys', href: '#' }
        ],
        [
          { text: 'QR Code Surveys', href: '#' },
          { text: 'White Label Surveys', href: '#' }
        ]
      ]
    }
  ]
};

const linksRight = {
  left: [
    {
      title: 'Analyzing Results',
      columns: [
        [
          { text: 'Summary Results', href: '#' },
          { text: 'Cross Tabulation Analysis', href: '#' },
          { text: 'Individual Results', href: '#' },
        ]
      ]
    }
  ],
  right: {
    title: 'Popular Templates',
    columns: [
      [{ text: 'Employee Satisfaction', href: '#' }],
      [{ text: 'Employee Benefits', href: '#' }],
      [{ text: 'Net Promoter Score', href: '#' }],
    ]
  }
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HeroSection />
        <HelpSection content={linksLeft} largerBlockPosition='right' />
        <HelpSection content={linksRight} largerBlockPosition='left' />
      </main>
    </Layout>
  );
}
