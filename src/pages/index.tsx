import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HeroSection from '../template/Hero';
import StartedNow from '../template/StartedNow';
import HelpSection from '../template/HelpSection';
import InfoSection from '../template/InfoSection';

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
        <InfoSection
          title='Employee Survey Guidance'
          description='Capturing employee feedback is important to ensure your organization workforce is happy and motived to preform at their best levels. The online survey market is cluttered with tools, many of which are low quality, highly priced, or hard to use. Having a company to help guide you through the process can be extremely valuable.'
          linkName='View the guide'
          linkURL='#'
        />
        <InfoSection
          title='Employee Survey Guidance'
          description='Capturing customer feedback is important to ensure your organization is meeting customer needs. The online survey market is cluttered with tools, many of which are low quality, highly priced, or hard to use. Having a company to help guide you through the process can be extremely valuable.'
          linkName='View the guide'
          linkURL='#'
        />
        <InfoSection
          title='Create a fresh survey'
          description='Add as many questions as you want, use skip logic, display logic, and collect unlimited responses. No other survey builder has this many tools!'
          linkName='View the guide'
          linkURL='#'
        />
        <StartedNow />
      </main>
    </Layout>
  );
}
