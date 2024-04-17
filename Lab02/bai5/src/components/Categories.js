function Categories({ categories, fillterItems }) {
  return (
    <div className="flex justify-center my-8">
      {categories.map((category, index) => {
        return (
          <button
            className="text-sm text-white capitalize bg-[#f59e0b] px-4 py-1.5 rounded mx-2 shadow tracking-[1px] hover:bg-[#b45309]"
            key={index}
            onClick={() => {
              fillterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
