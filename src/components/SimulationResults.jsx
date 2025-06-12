export default function SimulationResults({ messagePath }) {
  const deliveryTime = (messagePath.length - 1) * 0.5; // 0.5s per hop
  
  return (
    <div className="mt-4 space-y-2">
      <div className="font-semibold text-blue-600">
        Message Path: {messagePath.map(d => d.id.slice(0,2)).join(" → ")}
      </div>
      <div className="flex gap-4 text-sm">
        <div>Hops: {messagePath.length > 0 ? messagePath.length - 1 : 0}</div>
        <div>Delivery Time: {deliveryTime.toFixed(1)}s</div>
      </div>
    </div>
  );
}
