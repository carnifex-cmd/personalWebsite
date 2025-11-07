import { FaGithub, FaLinkedin, FaHome, FaEnvelope } from 'react-icons/fa';

const links = [
  {
    href: '#home',
    label: 'Back to hero',
    icon: <FaHome />,
    external: false,
  },
  {
    href: 'mailto:shardul855@gmail.com',
    label: 'Email Shardul',
    icon: <FaEnvelope />,
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/shardulsawant855',
    label: 'LinkedIn profile',
    icon: <FaLinkedin />,
    external: true,
  },
  {
    href: 'https://github.com/carnifex-cmd',
    label: 'GitHub profile',
    icon: <FaGithub />,
    external: true,
  },
];

const MobileActionBar = () => {
  return (
    <nav className="mobile-action-bar" aria-label="Quick navigation">
      {links.map(({ href, label, icon, external }, index) => (
        <a
          key={label}
          href={href}
          className="mobile-action-button"
          aria-label={label}
          onClick={(event) => event.currentTarget.blur()}
          style={{ '--pill-index': index }}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default MobileActionBar;
