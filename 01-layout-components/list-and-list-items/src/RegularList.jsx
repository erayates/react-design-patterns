export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  // {...{ [resourceName]: item }} === person={item}
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
