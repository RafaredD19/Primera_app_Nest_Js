"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuitsController = void 0;
const common_1 = require("@nestjs/common");
const tuits_service_1 = require("./tuits.service");
const create_tuit_dto_1 = require("./dto/create-tuit.dto");
const update_tuit_dto_1 = require("./dto/update-tuit.dto");
let TuitsController = class TuitsController {
    constructor(tuitsService) {
        this.tuitsService = tuitsService;
    }
    getTuits() {
        return 'gaaa';
    }
    getTuit(params) {
        return 'you id de tuit es ${params.id}';
    }
    create(createTuitDto) {
        return this.tuitsService.create(createTuitDto);
    }
    findAll() {
        return this.tuitsService.findAll();
    }
    findOne(id) {
        return this.tuitsService.findOne(+id);
    }
    update(id, updateTuitDto) {
        return this.tuitsService.update(+id, updateTuitDto);
    }
    remove(id) {
        return this.tuitsService.remove(+id);
    }
};
exports.TuitsController = TuitsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "getTuits", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "getTuit", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tuit_dto_1.CreateTuitDto]),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tuit_dto_1.UpdateTuitDto]),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TuitsController.prototype, "remove", null);
exports.TuitsController = TuitsController = __decorate([
    (0, common_1.Controller)('tuits'),
    __metadata("design:paramtypes", [tuits_service_1.TuitsService])
], TuitsController);
//# sourceMappingURL=tuits.controller.js.map