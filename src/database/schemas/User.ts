import mongoose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}

export interface IUser {
    _id: any;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: false },
    updatedAt: { type: Date, default: Date.now, required: false },
    isActive: { type: Boolean, default: true, required: false }
}, { timestamps: {} });

const model = mongoose.model<IUserDocument>("User", UserSchema);

export default model;