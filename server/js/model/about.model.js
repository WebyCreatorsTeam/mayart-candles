"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = require("mongoose");
const AboutSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: [true, "נא למלא את הכותרת"]
    },
    desc: {
        type: String,
        require: [true, "נא למלא תוכן הטקסט"],
    },
    images: {
        type: [{ img: String }]
    },
});
AboutSchema.static('getAboutImages', function getAboutImages(id, secure_url, oldId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.findById(id).then((doc) => __awaiter(this, void 0, void 0, function* () {
            yield (doc === null || doc === void 0 ? void 0 : doc.updateImages(secure_url, oldId));
        }));
    });
});
AboutSchema.method('updateImages', function updateImages(secure_url, oldId) {
    const items = [...this.images];
    const imageIndex = items.findIndex((i) => i._id == oldId);
    this.images[imageIndex].img = secure_url;
    return this.save();
});
exports.About = (0, mongoose_1.model)("About", AboutSchema);
//# sourceMappingURL=about.model.js.map