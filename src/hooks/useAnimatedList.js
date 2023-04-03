import { useCallback, useState } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItens] = useState(initialValue);
  const [pendingRemovalItensIds, setPendingRemovalItemsIds] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsIds(
      (prevState) => [...prevState, id],
    );
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItens((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemovalItemsIds((prevState) => prevState.filter((itemId) => itemId !== id));
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => renderItem(item, {
      isLeaving: pendingRemovalItensIds.includes(item.id),
    }))
  ), [items, pendingRemovalItensIds]);

  return {
    items,
    setItens,
    handleRemoveItem,
    handleAnimationEnd,
    renderList,
  };
}
