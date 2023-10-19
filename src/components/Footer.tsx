import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white h-48">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ color: "white" }}>
              Company
            </Typography>
            <Link href="#" style={{ color: "white" }}>
              About Us
            </Link>
            <Link href="#" style={{ color: "white" }}>
              Contact Us
            </Link>
            <Link href="#" style={{ color: "white" }}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ color: "white" }}>
              Support
            </Typography>
            <Link href="#" style={{ color: "white" }}>
              Customer Support
            </Link>
            <Link href="#" style={{ color: "white" }}>
              Terms & Conditions
            </Link>
            <Link href="#" style={{ color: "white" }}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" style={{ color: "white" }}>
              Connect With Us
            </Typography>
            <IconButton href="https://google.com">
              <FacebookIcon htmlColor="white" />
            </IconButton>
            <IconButton>
              <TwitterIcon htmlColor="white" />
            </IconButton>
            <IconButton>
              <LinkedInIcon htmlColor="white" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
