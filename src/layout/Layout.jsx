import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  InputBase,
  IconButton,
  Avatar,
  Badge,
  alpha,
} from "@mui/material";
import { Icon } from "@iconify/react"; // ✅ Iconify
import { Link } from "react-router-dom";

// MUI Icons still needed
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const drawerWidth = 270;

// Sidebar menu config with Iconify icons and routes
const menuItems = [
  {
    label: "Dashboard",
    icon: "mdi:monitor-dashboard",
    path: "/dashboard",
  },
  {
    label: "User Management",
    icon: "mdi:account-group-outline",
    children: [
      { label: "Agents", icon: "mdi:account-tie", path: "/user/agents" },
      {
        label: "Compliance Officers",
        icon: "mdi:shield-account",
        path: "/user/compliance-officers",
      },
      { label: "End Users", icon: "mdi:account-multiple", path: "/user/end-users" },
    ],
  },
  { label: "Transaction Management", icon: "mdi:swap-horizontal", path: "/transactions" },
  { label: "Reports & Analytics", icon: "mdi:chart-bar", path: "/reports" },
  { label: "Compliance & Security", icon: "mdi:security", path: "/compliance" },
  { label: "System Management", icon: "mdi:cog-outline", path: "/system" },
  { label: "Content Management", icon: "mdi:database-outline", path: "/content" },
  { label: "Currency & Fees", icon: "mdi:currency-usd", path: "/currency" },
  { label: "Help & Chat", icon: "mdi:help-circle-outline", path: "/help" },
  { label: "KYC & Verify", icon: "mdi:account-check-outline", path: "/kyc" },
  { label: "Roles & Permissions", icon: "mdi:shield-key-outline", path: "/roles" },
  { label: "Admin Management", icon: "mdi:account-cog-outline", path: "/admin" },
];

export default function Layout() {
  const [openSubmenu, setOpenSubmenu] = React.useState({});

  const handleToggle = (label) => {
    setOpenSubmenu((prev) => ({ ...prev, [label]: !prev[label] }));
  };
 const location = useLocation();

  // Define routes that should have NO margin/padding
  const noMarginRoutes = ["/content","/help","/admin","/roles","/kyc"];

  const isNoMargin = noMarginRoutes.includes(location.pathname);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "white",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end", gap: 3 }}>
          {/* Search bar */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "20px",
              backgroundColor: alpha("#000", 0.05),
              "&:hover": { backgroundColor: alpha("#000", 0.1) },
              width: "250px",
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 0.5,
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ flex: 1 }}
            />
          </Box>

          {/* Notification */}
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          {/* User info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                John Doe
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Administrator
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#043C78",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Branding / Logo */}
        <Toolbar
          sx={{
            bgcolor: "#032C5A",
            color: "white",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Myrica Pay
          </Typography>
        </Toolbar>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />

        {/* Menu */}
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.path ? Link : "button"}
                  to={item.path || "#"}
                  onClick={() => (item.children ? handleToggle(item.label) : null)}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: 35 }}>
                    <Icon icon={item.icon} width={20} height={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                  {item.children &&
                    (openSubmenu[item.label] ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>

              {/* Submenu */}
              {item.children && (
                <Collapse
                  in={openSubmenu[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton
                        component={Link}
                        to={child.path}
                        sx={{ pl: 6 }}
                        key={child.label}
                      >
                        <ListItemIcon sx={{ color: "white", minWidth: 35 }}>
                          <Icon icon={child.icon} width={18} height={18} />
                        </ListItemIcon>
                        <ListItemText
                          primary={child.label}
                          primaryTypographyProps={{ fontSize: 13 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        {/* Logout */}
        <Box sx={{ flexGrow: 1 }} />
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/logout">
              <ListItemIcon sx={{ color: "white", minWidth: 35 }}>
                <Icon icon="mdi:logout" width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main"   sx={{
        flexGrow: 1,
        mt: "64px",
        width: `calc(100% - ${drawerWidth}px)`,
        ...(isNoMargin ? { p: 0 } : { py: 3, px: 2 }) // ✅ conditional padding
      }}>
        <Outlet />  {/* <-- Add this */}
      </Box>
    </Box>
  );
}
