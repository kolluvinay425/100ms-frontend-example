import { WidgetCard } from "../../components/Footer/WidgetCard";
import { useShowWhiteboard } from "../../components/AppData/useUISettings";
import { useWhiteboardMetadata } from "./useWhiteboardMetadata";

export const ToggleWhiteboard = () => {
  const {
    whiteboardOwner: whiteboardActive,
    amIWhiteboardOwner,
    toggleWhiteboard,
  } = useWhiteboardMetadata();

  const { showWhiteboard } = useShowWhiteboard();

  if (!showWhiteboard) {
    return null;
  }

  return (
    <WidgetCard
      title="Whiteboard"
      subtitle={`${
        whiteboardActive
          ? amIWhiteboardOwner
            ? `Stop whiteboard`
            : `Can't stop whiteboard as it was started by another peer`
          : "Collaboratively sketch ideas"
      }`}
      imageSrc={require("../../images/whiteboard.png")}
      onClick={() => toggleWhiteboard()}
    />
  );
};
