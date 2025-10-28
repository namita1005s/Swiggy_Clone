export default function FoodCard({ foodData }) {
  return (
    <a href={foodData?.action?.link}>
      <img
        className="w-40 h-40 object-cover rounded-lg"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
        alt={foodData?.name}
      />
    </a>
  );
}
