const ServiceCard = ({ title, description, icon, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && <p className="text-emerald-700 font-medium">Starting at ${price}</p>}
    </div>
  )
}

export default ServiceCard

