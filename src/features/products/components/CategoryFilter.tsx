type CategoryFilterProps = {
  value: string;
  onChange: (value: string) => void;
};
const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All Categories</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Audio">Audio</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
