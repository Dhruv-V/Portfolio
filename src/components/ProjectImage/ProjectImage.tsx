import React from 'react';
import './ProjectImage.scss';

interface ProjectImageProps {
  projectId: string;
  title: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ projectId, title }) => {
  // Different SVG illustrations for different project types
  
  const renderProjectIllustration = () => {
    switch (projectId) {
      case 'scheduling-platform':
        return (
          <svg viewBox="0 0 400 300" className="project-svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            {/* Calendar/Scheduling Icon */}
            <rect x="50" y="40" width="300" height="220" rx="10" fill="url(#grad1)" opacity="0.2"/>
            <rect x="50" y="40" width="300" height="60" rx="10" fill="url(#grad1)"/>
            <text x="200" y="75" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">📅</text>
            
            {/* Calendar grid */}
            <rect x="70" y="120" width="60" height="50" rx="5" fill="#667eea" opacity="0.3"/>
            <rect x="140" y="120" width="60" height="50" rx="5" fill="#667eea" opacity="0.5"/>
            <rect x="210" y="120" width="60" height="50" rx="5" fill="#667eea" opacity="0.4"/>
            <rect x="280" y="120" width="60" height="50" rx="5" fill="#667eea" opacity="0.3"/>
            
            <rect x="70" y="180" width="60" height="50" rx="5" fill="#764ba2" opacity="0.4"/>
            <rect x="140" y="180" width="60" height="50" rx="5" fill="#764ba2" opacity="0.3"/>
            <rect x="210" y="180" width="60" height="50" rx="5" fill="#764ba2" opacity="0.5"/>
            <rect x="280" y="180" width="60" height="50" rx="5" fill="#764ba2" opacity="0.3"/>
          </svg>
        );

      case 'legacy-modernization':
        return (
          <svg viewBox="0 0 400 300" className="project-svg">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            {/* Old to New transformation */}
            <rect x="40" y="80" width="140" height="140" rx="8" fill="#555" opacity="0.5"/>
            <text x="110" y="155" textAnchor="middle" fill="white" fontSize="20">Legacy</text>
            
            <text x="200" y="155" textAnchor="middle" fill="url(#grad2)" fontSize="40" fontWeight="bold">→</text>
            
            <rect x="220" y="80" width="140" height="140" rx="8" fill="url(#grad2)"/>
            <text x="290" y="155" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">React</text>
            
            {/* Performance badge */}
            <circle cx="340" cy="100" r="30" fill="#4caf50"/>
            <text x="340" y="100" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">40%</text>
            <text x="340" y="115" textAnchor="middle" fill="white" fontSize="10">Faster</text>
          </svg>
        );

      case 'health-tracking-app':
        return (
          <svg viewBox="0 0 400 300" className="project-svg">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            {/* Mobile phone mockup */}
            <rect x="120" y="30" width="160" height="240" rx="20" fill="url(#grad3)"/>
            <rect x="130" y="50" width="140" height="200" rx="5" fill="white" opacity="0.1"/>
            
            {/* Health icons */}
            <text x="200" y="120" textAnchor="middle" fontSize="40">💓</text>
            <text x="200" y="170" textAnchor="middle" fontSize="40">📊</text>
            <text x="200" y="220" textAnchor="middle" fontSize="40">🔒</text>
          </svg>
        );

      case 'ui-component-library':
        return (
          <svg viewBox="0 0 400 300" className="project-svg">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            {/* Component blocks */}
            <rect x="50" y="50" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.7"/>
            <rect x="150" y="50" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.8"/>
            <rect x="270" y="50" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.6"/>
            
            <rect x="50" y="150" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.6"/>
            <rect x="150" y="150" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.9"/>
            <rect x="270" y="150" width="80" height="80" rx="10" fill="url(#grad4)" opacity="0.7"/>
            
            {/* Component icons */}
            <text x="90" y="100" textAnchor="middle" fontSize="30">🧩</text>
            <text x="190" y="100" textAnchor="middle" fontSize="30">⚙️</text>
            <text x="310" y="100" textAnchor="middle" fontSize="30">🎨</text>
            
            <text x="90" y="200" textAnchor="middle" fontSize="30">📋</text>
            <text x="190" y="200" textAnchor="middle" fontSize="30">✨</text>
            <text x="310" y="200" textAnchor="middle" fontSize="30">🔧</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 300" className="project-svg">
            <defs>
              <linearGradient id="gradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <rect x="50" y="50" width="300" height="200" rx="15" fill="url(#gradDefault)" opacity="0.3"/>
            <text x="200" y="160" textAnchor="middle" fill="white" fontSize="60">💻</text>
          </svg>
        );
    }
  };

  return (
    <div className="project-image-wrapper">
      {renderProjectIllustration()}
      <div className="image-overlay">
        <p className="image-label">{title}</p>
      </div>
    </div>
  );
};

export default ProjectImage;

