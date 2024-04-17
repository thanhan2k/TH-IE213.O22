import Person from "./Person";
const List = ({ people }) => {
  return (
    <section className="list">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
