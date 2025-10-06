import { StatCard } from "../../components/StatCard";

const BroadcastCardSection = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 px-1">
      <div className="col">
        <StatCard
          title="Broadcasts Sent"
          value="24"
      subtitle={"from this month"}
        
        />
      </div>
      <div className="col">
        <StatCard
          title="Push Engagement "
          value="62%"
          trend="up"
          change="5.2"
          subtitle="Highest performing channel"
        />
      </div>
      <div className="col">
        <StatCard
          title="Email Engagement"
          value="48%"
          trend="down"
          change={7.2}
          subtitle="Moderate response"
        />
      </div>
      <div className="col">
        <StatCard
          title="SMS Engagement"
          value ="31%"
         trend="up"
         change ="12.5"
          subtitle="Lowest response"
        />
      </div>
      
    </div>
  );
};

export default BroadcastCardSection;
