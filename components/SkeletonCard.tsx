// components/SkeletonCard.tsx
export default function SkeletonCard() {
  return (
    <div className="carrousel-item animate-pulse bg-gray-100 p-4 rounded-md">
      <div className="bg-gray-300 h-[300px] w-full rounded-md mb-4" />
      <div className="h-4 bg-gray-300 w-2/3 mb-2 rounded" />
      <div className="h-4 bg-gray-200 w-1/3 rounded" />
    </div>
  );
}