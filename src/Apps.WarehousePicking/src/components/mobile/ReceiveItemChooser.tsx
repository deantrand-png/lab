import { useState } from "react";
import { ItemPicker } from "@/components/mobile/ItemPicker";
import { NewItemDialog } from "@/components/mobile/NewItemDialog";
import type { PickItem } from "@/hooks/UsePickItems";

type ReceiveItemChooserProps = {
  onSelect: (item: PickItem) => void;
};

export function ReceiveItemChooser({ onSelect }: ReceiveItemChooserProps) {
  const [newItemName, setNewItemName] = useState<string | undefined>();

  return (
    <>
      <ItemPicker
        onSelect={onSelect}
        onCreate={(name) => setNewItemName(name || undefined)}
      />
      <NewItemDialog
        open={newItemName !== undefined}
        onOpenChange={(open) => !open && setNewItemName(undefined)}
        defaults={{ name: newItemName }}
        onCreated={(item) => {
          setNewItemName(undefined);
          onSelect(item);
        }}
      />
    </>
  );
}
