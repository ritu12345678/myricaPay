import React from 'react'
import DashboardCard from '../../components/DashboardCard'
import ActiveUserCard from './ActiveUserCard'
const users = [
  {
    name: "Sarah Johnson",
    agentId: "2458",
    country: "USA",
    transactions: 692,
    image: "/static/images/avatar/1.jpg", // or "" for letter avatar
  },
  {
    name: "Rajesh Mehta",
    agentId: "3124",
    country: "India",
    transactions: 540,
    image: "", // fallback → shows initials “RM”
  },
  {
    name: "Emily Carter",
    agentId: "1245",
    country: "UK",
    transactions: 810,
    image: "/static/images/avatar/2.jpg",
  },
];
const TopActiveUser = () => {
  return (
   
        <DashboardCard title="Top Active Users" className='flex-fill'>
      {users.map((user) => (    
        <ActiveUserCard key={user.agentId} {...user} />
      ))}

        </DashboardCard>
      
   
  )
}

export default TopActiveUser
