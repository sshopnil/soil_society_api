"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schema/order.schema");
const auto_increment_1 = require("@typegoose/auto-increment");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: 'orders',
                    useFactory: async () => {
                        const schema = order_schema_1.OrderSchema;
                        schema.plugin(auto_increment_1.AutoIncrementID, {
                            field: 'id',
                            startAt: 1,
                        });
                        return schema;
                    },
                    inject: [(0, mongoose_1.getConnectionToken)()],
                }
            ]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map