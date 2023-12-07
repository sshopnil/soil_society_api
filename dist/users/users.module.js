"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("./schemas/users.schema");
const password_hasher_service_1 = require("./auth/password-hasher/password-hasher.service");
const seller_controller_1 = require("./seller/seller.controller");
const seller_service_1 = require("./seller/seller.service");
const seller_schema_1 = require("./seller/seller.schema");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Users', schema: users_schema_1.UserSchema }, { name: 'sellers', schema: seller_schema_1.SellerSchema }])],
        providers: [users_service_1.UsersService, password_hasher_service_1.PasswordHasherService, seller_service_1.SellerService],
        controllers: [users_controller_1.UsersController, seller_controller_1.SellerController]
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map