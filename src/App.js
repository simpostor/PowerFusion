import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent, TextField, IconButton, Switch } from '@mui/material';
import { Link } from 'react-scroll';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Services' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  // Default is light mode (isDarkMode false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: 'top-top',
    });
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define colors for each mode.
  const colors = isDarkMode
    ? {
        bg: '#0D0D0D',
        headerBg: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#B3B3B3',
        border: '#404040',
        buttonBg: '#FFFFFF',
        buttonText: '#0D0D0D',
        cardBg: '#0D0D0D',
        cardHoverBorder: '#FFFFFF',
      }
    : {
        bg: '#FFFFFF',
        headerBg: '#F5F5F5',
        textPrimary: '#0D0D0D',
        textSecondary: '#404040',
        border: '#CCCCCC',
        buttonBg: '#0D0D0D',
        buttonText: '#FFFFFF',
        cardBg: '#FFFFFF',
        cardHoverBorder: '#000000',
      };

  // Define service cards.
  const serviceCards = [
    {
      title: "Hybrida",
      subtitle: "Hybrid System",
      description: "Advanced hybrid systems combining renewable sources for optimal efficiency.",
    },
    {
      title: "Helios",
      subtitle: "Solar Arrays",
      description: "State-of-the-art solar arrays for reliable and efficient energy production.",
    },
    {
      title: "Anemo",
      subtitle: "Wind Mill Array",
      description: "Innovative wind mill arrays designed for maximum wind energy capture.",
    },
    {
      title: "Aqua",
      subtitle: "Hydro Generation",
      description: "Efficient hydro generation systems harnessing water energy for sustainable power.",
    },
  ];

  // Define subtle hover colors for each card (light accent colors)
  const hoverColors = {
    "Hybrida": "#e6f4ea", // light eco green
    "Helios": "#fff9e6",  // light solar yellow
    "Anemo": "#e0f7f5",   // light greenish-blue (genshin anemo feel)
    "Aqua": "#e0f7ff",    // light blue
  };

  return (
    <div style={{ background: colors.bg, overflowX: 'hidden' }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          background: colors.headerBg,
          boxShadow: 'none',
          borderBottom: `2px solid ${colors.border}`,
        }}
      >
        <Toolbar sx={{ maxWidth: 1300, margin: '0 auto', width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 900,
              color: colors.textPrimary,
              letterSpacing: '-1.5px',
            }}
          >
            Power Fusion
          </Typography>
          {sections.map((section) => (
            <Button
              key={section.id}
              component={Link}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-70}
              sx={{
                color: colors.textSecondary,
                mx: 2,
                fontWeight: 500,
                borderRadius: '0',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {section.label}
            </Button>
          ))}
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            color="default"
          />
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Hero Section */}
      <Box id="home" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Typography
                variant="h1"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  fontSize: '4rem',
                  textTransform: 'uppercase',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                Industrial-Grade
                <span
                  style={{
                    display: 'block',
                    color: colors.border,
                    WebkitTextStroke: `2px ${colors.textPrimary}`,
                  }}
                >
                  Renewable Energy
                </span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: colors.textSecondary,
                  mb: 4,
                  lineHeight: 1.6,
                  borderLeft: `4px solid ${colors.border}`,
                  paddingLeft: 3,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateX(5px)' },
                }}
              >
                Architectural energy solutions for urban infrastructure
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: colors.buttonBg,
                  color: colors.buttonText,
                  fontWeight: 700,
                  borderRadius: '0',
                  padding: '16px 32px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: colors.textSecondary,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Explore Solutions
              </Button>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <div
                style={{
                  position: 'relative',
                  padding: '8px',
                  background: colors.buttonBg,
                  boxShadow: `16px 16px 0 0 ${colors.border}`,
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="installing-solar-panels.webp"
                  alt="Solar Panels"
                  style={{
                    width: '100%',
                    aspectRatio: '1.5',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(120%)',
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="solutions" sx={{ py: 10, background: colors.headerBg }}>
        <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
          <Typography
            variant="h2"
            sx={{
              color: colors.textPrimary,
              textAlign: 'center',
              mb: 6,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 900,
              fontSize: '3rem',
              textTransform: 'uppercase',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)' },
            }}
          >
            AI Powered Recommendation
          </Typography>
          <Grid container spacing={4}>
            {serviceCards.map((card, index) => {
              let animation = 'zoom-in';
              if (index === 0) animation = 'fade-right';
              else if (index === serviceCards.length - 1) animation = 'fade-left';

              return (
                <Grid item xs={12} md={3} key={card.title} data-aos={animation}>
                  <Card
                    sx={{
                      background: colors.cardBg,
                      borderRadius: '0',
                      border: `2px solid ${colors.border}`,
                      transition: 'all 0.3s ease',
                      height: '100%',
                      '&:hover': {
                        borderColor: colors.cardHoverBorder,
                        transform: 'translateY(-5px) scale(1.03)',
                        backgroundColor: hoverColors[card.title] || colors.cardBg,
                        // In dark mode, override inner text to mimic light mode
                        ...(isDarkMode && {
                          '& .MuiTypography-root': { color: '#0D0D0D !important' },
                          '& .MuiButton-root': { color: '#0D0D0D !important' },
                        }),
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: colors.textPrimary,
                          mb: 1,
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 700,
                          fontSize: '2rem',
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.02)' },
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: colors.textSecondary,
                          mb: 2,
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.textSecondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Button
                        sx={{
                          color: colors.textPrimary,
                          mt: 3,
                          padding: '8px 0',
                          borderBottom: `2px solid ${colors.border}`,
                          borderRadius: '0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: colors.textPrimary,
                            transform: 'translateY(-3px)',
                          },
                        }}
                      >
                        Technical Specifications →
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box id="impact" sx={{ py: 10, background: colors.cardBg }}>
        <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
          <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <div
                style={{
                  background: colors.buttonBg,
                  padding: '8px',
                  boxShadow: `16px 16px 0 0 ${colors.border}`,
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  alt="Wind Turbines"
                  style={{
                    width: '100%',
                    aspectRatio: '1.5',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(120%)',
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography
                variant="h2"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 900,
                  fontSize: '3rem',
                  textTransform: 'uppercase',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                Operational Metrics
              </Typography>
              <div
                style={{
                  borderLeft: `4px solid ${colors.border}`,
                  paddingLeft: '24px',
                  marginBottom: '32px',
                  transition: 'transform 0.3s',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.textPrimary,
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  1.2M tons
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  Annual CO₂ offset through renewable energy production
                </Typography>
              </div>
              <Button
                variant="contained"
                sx={{
                  background: colors.buttonBg,
                  color: colors.buttonText,
                  fontWeight: 700,
                  borderRadius: '0',
                  padding: '16px 32px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: colors.textSecondary,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                View Full Report
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, background: colors.headerBg }}>
        <Container maxWidth="md" sx={{ maxWidth: 1300 }}>
          <Typography
            variant="h2"
            sx={{
              color: colors.textPrimary,
              textAlign: 'center',
              mb: 6,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 900,
              fontSize: '3rem',
              textTransform: 'uppercase',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)' },
            }}
          >
            Contact
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: colors.textPrimary,
                    '& fieldset': { borderColor: colors.border },
                    '&:hover fieldset': { borderColor: colors.textPrimary },
                  },
                  '& .MuiInputLabel-root': {
                    color: colors.textSecondary,
                    '&.Mui-focused': { color: colors.textPrimary },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: colors.textPrimary,
                    '& fieldset': { borderColor: colors.border },
                    '&:hover fieldset': { borderColor: colors.textPrimary },
                  },
                  '& .MuiInputLabel-root': {
                    color: colors.textSecondary,
                    '&.Mui-focused': { color: colors.textPrimary },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-right">
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: colors.textPrimary,
                    '& fieldset': { borderColor: colors.border },
                    '&:hover fieldset': { borderColor: colors.textPrimary },
                  },
                  '& .MuiInputLabel-root': {
                    color: colors.textSecondary,
                    '&.Mui-focused': { color: colors.textPrimary },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }} data-aos="fade-left">
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: colors.buttonBg,
                  color: colors.buttonText,
                  fontWeight: 700,
                  borderRadius: '0',
                  padding: '16px 48px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: colors.textSecondary,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, borderTop: `2px solid ${colors.border}` }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1300,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: colors.textSecondary,
              fontWeight: 500,
            }}
          >
            © 2025 Power Fusion
          </Typography>
          <Box>
            <IconButton
              sx={{
                color: colors.textSecondary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: colors.textSecondary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{
                color: colors.textSecondary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;
