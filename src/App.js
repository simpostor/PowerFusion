import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent, TextField, IconButton, Switch } from '@mui/material';
import { Link } from 'react-scroll';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  // Default is light mode (isDarkMode false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                },
                transition: 'all 0.3s ease',
                borderRadius: '0',
                padding: '8px 16px',
              }}
            >
              {section.label}
            </Button>
          ))}
          {/* Theme Switch */}
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
                  '&:hover': {
                    background: colors.textSecondary,
                  },
                  transition: 'all 0.3s ease',
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
                }}
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

      {/* Solutions Section */}
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
            }}
          >
            Core Systems
          </Typography>
          <Grid container spacing={4}>
            {['Solar Arrays', 'Wind Turbines', 'Hydro Plants'].map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={item}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <Card
                  sx={{
                    background: colors.cardBg,
                    borderRadius: '0',
                    border: `2px solid ${colors.border}`,
                    transition: 'all 0.3s ease',
                    height: '100%',
                    '&:hover': {
                      borderColor: colors.cardHoverBorder,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: colors.textPrimary,
                        mb: 2,
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 700,
                        fontSize: '2rem',
                      }}
                    >
                      {item}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {index === 0
                        ? 'Monocrystalline photovoltaic systems with industrial efficiency ratings'
                        : index === 1
                        ? '3MW direct-drive turbines with predictive maintenance systems'
                        : 'Run-of-river hydroelectric plants with minimal environmental impact'}
                    </Typography>
                    <Button
                      sx={{
                        color: colors.textPrimary,
                        mt: 3,
                        padding: '8px 0',
                        borderBottom: `2px solid ${colors.border}`,
                        borderRadius: '0',
                        '&:hover': {
                          borderColor: colors.textPrimary,
                        },
                      }}
                    >
                      Technical Specifications →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
                }}
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
                }}
              >
                Operational Metrics
              </Typography>
              <div
                style={{
                  borderLeft: `4px solid ${colors.border}`,
                  paddingLeft: '24px',
                  marginBottom: '32px',
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
                  '&:hover': {
                    background: colors.textSecondary,
                  },
                  transition: 'all 0.3s ease',
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
                  '&:hover': {
                    background: colors.textSecondary,
                  },
                  transition: 'all 0.3s ease',
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
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                },
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: colors.textSecondary,
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
                },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{
                color: colors.textSecondary,
                '&:hover': {
                  color: colors.textPrimary,
                  backgroundColor: colors.border,
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
