import { Types } from "mongoose"

export type TRoom = {
    name: string,
    roomNo: number,
    floorNo: number,
    capacity: number,
    pricePerSlot: number,
    amenities: string[],
    isDeleted: boolean,
    _id?: string,
    image: string[]
}

export type TRoomsResponse = {
    success: boolean;
    message: string;
    data: TRoom[];
}

export type TSingleRoomResponse = {
    success: boolean;
    message: string;
    data: TRoom;
}

export type TBooking = {
    date: string,
    slots: Types.ObjectId[],
    room: Types.ObjectId,
    user: Types.ObjectId,
    isConfirmed: string,
    isDeleted: boolean,
    totalAmount?: number
}
