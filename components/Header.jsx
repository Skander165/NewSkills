import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MessageIcon from "@mui/icons-material/Message";
import { Badge, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.background, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.background, 0.5),
  },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: 400,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const userPages = [
  {
    icon: <AccountBoxIcon />,
    text: "A propos",
  },
  {
    icon: <UploadFileIcon />,
    text: "Soumettre votre projet",
  },
  {
    icon: <MessageIcon />,
    text: "Contactez nous",
  },
];

const guestPages = [
  {
    text: "Forum",
    link: "#",
  },
  {
    text: "A propos de nous",
    link: "/aboutus",
  },
  {
    text: "Plans",
    link: "#",
  },
  {
    text: "Contactez-nous",
    link: "/contact",
  },
  {
    text: "Soumettre votre projet",
    link: "#",
  },
];

const guestPagesDropdown = [
  {
    text: "Forum",
    link: "#",
  },
  {
    text: "A propos de nous",
    link: "#",
  },
  {
    text: "Plans",
    link: "#",
  },
  {
    text: "Contactez-nous",
    link: "#",
  },
  {
    text: "Soumettre votre projet",
    link: "#",
  },
  {
    text: "SignIn / Signup",
    link: "#",
  },
];

"Profile", "Account", "Dashboard", "Logout";
const settings = [
  {
    text: "Profile",
    link: "/profile",
  },
  {
    text: "Account",
    link: "/editProfile",
  },
  {
    text: "Dashboard",
    link: "/",
  },
  {
    text: "Logout",
    link: "#",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user);
  return (
    <AppBar
      position="static"
      sx={{ p: 2, backgroundColor: "primary.background" }}
    >
      <Toolbar>
        {!session ? (
          <Stack
            direction="row"
            alignItems="center"
            sx={{ width: "100%", gap: 3 }}
          >
            <Link href="/">
              <Box sx={{ position: "relative", height: 57, width: 108 }}>
                <Image src="/assets/logo.png" layout="fill" />
              </Box>
            </Link>
            {/* responsiveness */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {userPages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Search sx={{ display: { xs: "none", md: "flex" }, width: "30px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", gap: "20px" },
              }}
            >
              {userPages.map((page) => (
                <Button
                  key={page.text}
                  startIcon={page.icon}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "#000000", fontSize: { lg: 14, md: 12 } }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Badge badgeContent={4} color="primary" sx={{ mr: 2 }}>
                <NotificationsNoneIcon color="action" />
              </Badge>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt={session?.user?.name} src={session?.user?.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                    {setting.text == "Logout" ? (
                      <Typography textAlign="center" onClick={() => signOut()}>
                        {setting.text}
                      </Typography>
                    ) : (
                      <Link href={setting.link}>
                        <Typography textAlign="center">
                          {setting.text}
                        </Typography>
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            spacing={4}
            sx={{ width: "100%" }}
          >
            <Link href="/">
              <Box
                sx={{
                  position: "relative",
                  height: 57,
                  width: 108,
                  cursor: "pointer",
                }}
              >
                <Image src="/assets/logo.png" layout="fill" />
              </Box>
            </Link>
            {/* responsiveness */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {guestPagesDropdown.map((page) => (
                  <Link href={page.link} key={page.text}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex", gap: "30px" },
              }}
            >
              {guestPages.map((page) => (
                <Link href={page.link} key={page.text}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "secondary.main",
                      fontSize: { lg: 14, md: 12 },
                    }}
                  >
                    {page.text}
                  </Button>
                </Link>
              ))}
            </Box>

            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "secondary.main",
                p: 2,
                color: "white",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  boxShadow: "none",
                },
                borderRadius: 3,
              }}
            >
              <Link href="/signin">Sign In / Sign Up</Link>
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
