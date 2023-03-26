import { Button, Card, Text } from "../../components";

const Header: React.FC<{ onNewRequest: () => void }> = ({ onNewRequest }) => {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 12px",
          gap: "16px",
        }}
      >
        <div>
          <Text variant="title.default" color="text.main.default">
            SmartDomotic
          </Text>
          <Text variant="body.md_regular" color="text.main.subtitle">
            Experience the future of home automation with SmartDomotic
          </Text>
        </div>
        <Button disabled={false} loading={false} onClick={onNewRequest}>
          + New request
        </Button>
      </div>
    </Card>
  );
};

export default Header;
