"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTuitDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tuit_dto_1 = require("./create-tuit.dto");
class UpdateTuitDto extends (0, mapped_types_1.PartialType)(create_tuit_dto_1.CreateTuitDto) {
}
exports.UpdateTuitDto = UpdateTuitDto;
//# sourceMappingURL=update-tuit.dto.js.map