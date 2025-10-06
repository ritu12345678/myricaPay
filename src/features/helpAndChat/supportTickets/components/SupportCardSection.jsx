import { StatCard } from "../../components/StatCard";

const SupportCardSection = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 mb-3">
      <div className="col">
        <StatCard
          title="Total Open Tickets"
          value="132"
          change={"8.4"}
          trend="up"
        
        />
      </div>
      <div className="col">
        <StatCard
          title="Urgent Tickets"
          value="13 Open"
          trend="down"
          change="1.2"
          subtitle="Requires follow up"
        />
      </div>
      <div className="col">
        <StatCard
          title="Medium Tickets"
          value="45 Open"
          trend="down"
          change={1.2}
          subtitle="Can be scheduled later"
        />
      </div>
      <div className="col">
        <StatCard
          title="Low Tickets"
          value ="72 Open"
         trend="up"
         change ="12.5"
          subtitle="Faster than last week"
        />
      </div>
      <div className="col">
        <StatCard
          title="Avg. Resolution Time"
          value="3h 15m"
          subtitle="Total Sales Change Text"
        />
      </div>
    </div>
  );
};

export default SupportCardSection;
