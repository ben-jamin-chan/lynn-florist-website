import { Star } from "lucide-react"

const TestimonialCard = ({ name, date, rating, text, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <img
          src={image || "/placeholder.svg?height=50&width=50"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
        ))}
      </div>

      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  )
}

export default TestimonialCard

