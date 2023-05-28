import mongoose from "mongoose"

export interface ISpeaker {
  _id: string
  name: string
  type: string
  description: string
  photo: string
  activity: string
}

const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Organizador", "Conferencista", "Tallerista", "Jurado", "Otro"],
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default: "",
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
    required: true,
  },
})

export default mongoose?.models?.Speaker || mongoose.model("Speaker", speakerSchema)
