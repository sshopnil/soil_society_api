"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHasherService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let PasswordHasherService = class PasswordHasherService {
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
    async comparePassword(password, encryptedpass) {
        return await bcrypt.compare(password, encryptedpass);
    }
};
exports.PasswordHasherService = PasswordHasherService;
exports.PasswordHasherService = PasswordHasherService = __decorate([
    (0, common_1.Injectable)()
], PasswordHasherService);
//# sourceMappingURL=password-hasher.service.js.map