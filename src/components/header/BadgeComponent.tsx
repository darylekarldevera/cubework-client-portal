type BadgeComponentProps = {
  number?: number;
};

const BadgeComponent = ({ number }: BadgeComponentProps) => {
  return <div className="badge-component">{number}</div>;
};

export default BadgeComponent;
