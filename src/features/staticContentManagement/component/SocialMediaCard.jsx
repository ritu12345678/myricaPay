import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaCard = () => {
  const [socials, setSocials] = useState([
    { id: 1, platform: 'Facebook', url: 'https://facebook.com/fintechpro' },
    { id: 2, platform: 'Twitter', url: 'https://twitter.com/fintechpro' },
  ]);
  const [nextId, setNextId] = useState(3);

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Facebook': return <FacebookIcon color="primary" />;
      case 'Twitter': return <TwitterIcon color="info" />;
      case 'LinkedIn': return <LinkedInIcon color="primary" />;
      case 'Instagram': return <InstagramIcon color="error" />;
      default: return <ShareIcon />;
    }
  };

  const handleAddSocial = () => {
    const newPlatform = socials.length % 2 === 0 ? 'LinkedIn' : 'Instagram';
    setSocials(prev => [...prev, { id: nextId, platform: newPlatform, url: '' }]);
    setNextId(prev => prev + 1);
  };

  const handleRemoveSocial = (id) => {
    setSocials(prev => prev.filter(social => social.id !== id));
  };

  const handleChange = (id, value) => {
    setSocials(prev =>
      prev.map(social => (social.id === id ? { ...social, url: value } : social))
    );
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <ShareIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" component="h2" className="mb-0 fw-bold">
              Social Media Links
            </Typography>
          </div>
          <button type="button" className="btn btn-primary btn-sm d-flex align-items-center" onClick={handleAddSocial}>
            <AddIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Add Social
          </button>
        </div>
        <form>
          {socials.map(social => (
            <div key={social.id} className="input-group mb-3">
              <span className="input-group-text">{getPlatformIcon(social.platform)}</span>
              <input
                type="text"
                className="form-control"
                placeholder={`https://${social.platform.toLowerCase()}.com/`}
                value={social.url}
                onChange={(e) => handleChange(social.id, e.target.value)}
              />
              <span className="input-group-text p-0">
                <IconButton size="small" color="error" onClick={() => handleRemoveSocial(social.id)} title="Delete">
                  <DeleteIcon />
                </IconButton>
              </span>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SocialMediaCard;