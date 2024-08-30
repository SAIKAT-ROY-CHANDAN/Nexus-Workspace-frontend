export type TRoom = {
    name: string,
    roomNo: number,
    floorNo: number,
    capacity: number,
    pricePerSlot: number,
    amenities: string[],
    isDeleted: boolean,
    _id: string
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
