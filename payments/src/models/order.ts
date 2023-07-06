import { OrderStatus } from "@mt_tickets/common";
import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface OrderAttrs {
    id: string;
    status: OrderStatus;
    price: number;
    userId: string;
    version: number;
}

interface OrderDoc extends mongoose.Document {
    status: OrderStatus;
    price: number;
    userId: string;
    version: number;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;
}

const OrderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum: Object.values(OrderStatus),
        default: OrderStatus.Created
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},{
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        },
    }
});

OrderSchema.set('versionKey','version');
OrderSchema.plugin(updateIfCurrentPlugin);

OrderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order({
        _id: attrs.id,
        status: attrs.status,
        price: attrs.price,
        version: attrs.version,
        userId: attrs.userId
    });
};

const Order = mongoose.model<OrderDoc,OrderModel>('Order',OrderSchema);

export { Order };