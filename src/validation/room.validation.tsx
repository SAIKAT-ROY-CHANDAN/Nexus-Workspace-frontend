import { z } from "zod";

export const roomSchema = z.object({
    name: z.string().min(1, "Name is required"),
    roomNo: z.string().min(1, "Room number is required"),
    floorNo: z.string().min(1, "Floor number is required"),
    capacity: z.number().min(1, "Capacity must be at least 1"),
    price: z.number().min(1, "Price must be at least 1"),
    amenities: z.array(z.string().min(1, "Amenity cannot be empty")),
});