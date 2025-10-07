import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import KPICardSection from "./components/KPICardSection";

// Dummy Data
const barData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 200 },
  { name: "Fri", value: 600 },
  { name: "Sat", value: 450 },
  { name: "Sun", value: 300 },
];

const pieData = [
  { name: "Resolved", value: 65 },
  { name: "Pending", value: 25 },
  { name: "Escalated", value: 10 },
];
const COLORS = ["#4caf50", "#ff9800", "#f44336"];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* KPI Cards - Bootstrap 5 section */}
      <div className="mb-3">
        <KPICardSection />
      </div>

      {/* Alerts + Quick Actions */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Alerts & Notifications
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="⚠️ Server downtime detected" secondary="2 mins ago" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="🔔 New user registered" secondary="10 mins ago" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Quick Actions
              </Typography>
              <Box display="flex" gap={2} mt={2}>
                <Button variant="contained">Add User</Button>
                <Button variant="outlined">Generate Report</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Transaction Volume & Value
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2196f3" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Workload Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
