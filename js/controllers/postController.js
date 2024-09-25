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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postService_1 = __importDefault(require("../services/postService"));
const router = express_1.default.Router();
//קבלת כל הפוסטים
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: 'This is very GOOD',
            Date: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'This NO good',
            data: null
        });
    }
}));
// יצירת פוסט חדש
// protected rout
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.createNewPost(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'Post saved sucssesfuly',
                Date: undefined
            });
        }
        else {
            throw new Error("Can't Save New Post to the file");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'This NO good',
            data: null
        });
    }
}));
//
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: 'This is very GOOD',
            Date: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'This NO good',
            data: null
        });
    }
}));
// ID חיפוש פוסט לפי 
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: 'This is very GOOD',
            Date: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'This NO good',
            data: null
        });
    }
}));
// להשים לייק לפוסט
// protected rout..
router.patch('/like/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: 'This is very GOOD',
            Date: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'This NO good',
            data: null
        });
    }
}));
exports.default = router;
