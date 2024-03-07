"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuitsService = void 0;
const common_1 = require("@nestjs/common");
let TuitsService = class TuitsService {
    create(createTuitDto) {
        return 'This action adds a new tuit';
    }
    findAll() {
        return `This action returns all tuits`;
    }
    findOne(id) {
        return `This action returns a #${id} tuit`;
    }
    update(id, updateTuitDto) {
        return `This action updates a #${id} tuit`;
    }
    remove(id) {
        return `This action removes a #${id} tuit`;
    }
};
exports.TuitsService = TuitsService;
exports.TuitsService = TuitsService = __decorate([
    (0, common_1.Injectable)()
], TuitsService);
//# sourceMappingURL=tuits.service.js.map