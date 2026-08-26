type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBox;
