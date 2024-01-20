import React from "react";
import { GummyMessage } from "../../../types/gummy";
import { GummyInsightCustomComponentId } from "../../../enums/gummyInsightCustomComponentId";
import { GummyRewrittenProductMessage } from "../GummyRewrittenProductMessage";

export type GummyMessageContainerProps = {
  message: GummyMessage
}

export const GummyMessageContainer = React.memo(({ message }: GummyMessageContainerProps): JSX.Element => {
  if (!message.customComponentId) {
    return <span>{message.content}</span>;
  }

  switch (message.customComponentId) {
    case GummyInsightCustomComponentId.RewrittenProduct:
      return <GummyRewrittenProductMessage message={message} />;

    default:
      throw new Error("Not supported component id");
  }
});
