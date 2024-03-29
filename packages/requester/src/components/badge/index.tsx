import { SpinnerIcon, StarIcon } from "@chakra-ui/icons";
import { Badge as CBadge } from "@chakra-ui/react";
import React from "react";
import { Spacer } from "../spacer";
import { Text } from "../text";
import { tokens } from "../tokens";

const { colors } = tokens;

const Badge: React.FC<{
  children: React.ReactNode;
  variant: "PENDING" | "COOKING";
}> = ({ children, variant }) => {
  const { backgroundColor, textColor, Icon } = {
    PENDING: {
      backgroundColor: colors.surface.warning.default,
      textColor: "text.main.warning",
      Icon: () => <SpinnerIcon />,
    },
    COOKING: {
      backgroundColor: colors.surface.highlight.default,
      textColor: "text.main.highLight",
      Icon: () => <StarIcon />,
    },
  }[variant];

  return (
    <CBadge
      backgroundColor={backgroundColor}
      padding="4px 8px"
      gap="4px"
      borderRadius="4px"
      display="flex"
      flexDirection="row"
      width="fit-content"
      alignSelf="flex-end"
    >
      <Text variant="body.sml_regular" color={textColor}>
        <Icon />
        <Spacer variant="inline_xsmall" />
        {children}
      </Text>
    </CBadge>
  );
};

export { Badge };
